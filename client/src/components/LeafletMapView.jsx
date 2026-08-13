import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

delete L.Icon.Default.prototype._getIconUrl;

const createCustomIcon = (color) => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="40" viewBox="0 0 32 40"><path d="M16 0C7.163 0 0 7.163 0 16c0 12 16 24 16 24S32 28 32 16C32 7.163 24.837 0 16 0z" fill="${color}"/><circle cx="16" cy="16" r="7" fill="white" opacity="0.9"/></svg>`;
  return L.icon({
    iconUrl: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`,
    iconSize: [32, 40],
    iconAnchor: [16, 40],
    popupAnchor: [0, -36],
  });
};

const STATUS_COLORS = {
  submitted: '#6B7280',
  under_review: '#D97706',
  assigned: '#2563EB',
  in_progress: '#7C3AED',
  resolved: '#16A34A',
  rejected: '#DC2626',
};

const STATUS_LABELS = {
  submitted: 'Submitted',
  under_review: 'Under Review',
  assigned: 'Assigned',
  in_progress: 'In Progress',
  resolved: 'Resolved',
  rejected: 'Rejected',
};

function AutoFitBounds({ complaints }) {
  const map = useMap();

  useEffect(() => {
    if (!complaints || complaints.length === 0) return;
    const valid = complaints.filter(c => Number.isFinite(c.latitude) && Number.isFinite(c.longitude));
    if (valid.length === 0) return;

    const bounds = L.latLngBounds(valid.map(c => [c.latitude, c.longitude]));
    map.fitBounds(bounds, { padding: [40, 40], maxZoom: 15 });
  }, [complaints, map]);

  return null;
}

export default function LeafletMapView({ complaints, onNavigate }) {
  const validComplaints = (complaints || []).filter(c => Number.isFinite(c.latitude) && Number.isFinite(c.longitude));
  const centerLat = validComplaints.length > 0 ? validComplaints[0].latitude : 20.5937;
  const centerLng = validComplaints.length > 0 ? validComplaints[0].longitude : 78.9629;

  return (
    <MapContainer
      center={[centerLat, centerLng]}
      zoom={12}
      style={{ height: '100%', width: '100%', minHeight: '400px' }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <AutoFitBounds complaints={validComplaints} />

      {validComplaints.map((complaint) => {
        const color = STATUS_COLORS[complaint.status] || '#6B7280';
        const icon = createCustomIcon(color);

        return (
          <Marker
            key={complaint._id || complaint.complaintNo}
            position={[complaint.latitude, complaint.longitude]}
            icon={icon}
          >
            <Popup>
              <div className="p-1 max-w-[220px]">
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="text-[11px] font-mono font-bold bg-slate-100 px-1.5 py-0.5 rounded text-slate-700">
                    {complaint.complaintNo}
                  </span>
                  <span
                    className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                    style={{ backgroundColor: `${color}20`, color }}
                  >
                    {STATUS_LABELS[complaint.status] || complaint.status}
                  </span>
                </div>
                <p className="text-xs font-semibold text-slate-900 mb-1">{complaint.category}</p>
                <p className="text-[11px] text-slate-600 mb-2 leading-tight">{complaint.address}</p>
                {onNavigate && (
                  <button
                    onClick={() => onNavigate(`/admin/complaints/${complaint._id}`)}
                    className="text-xs font-semibold text-blue-600 hover:text-blue-800 hover:underline flex items-center gap-1"
                  >
                    View details &rarr;
                  </button>
                )}
              </div>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
}
