import React from 'react';

export default function StatusBadge({ label, status }) {
  let badgeClass = "bg-surface-container text-on-surface-variant";
  
  if (status === "success" || status === "healthy") {
    badgeClass = "bg-[#009668]/10 text-[#009668]";
  } else if (status === "warning" || status === "medium") {
    badgeClass = "bg-[#f59e0b]/10 text-[#b54708]";
  } else if (status === "danger" || status === "critical") {
    badgeClass = "bg-error-container/30 text-error";
  } else if (status === "pending") {
    badgeClass = "bg-[#fef0c7] text-[#b54708]";
  } else if (status === "active") {
    badgeClass = "bg-secondary/10 text-secondary";
  }

  return (
    <span className={`px-2 py-0.5 rounded-full font-label-caps text-label-caps ${badgeClass}`}>
      {label}
    </span>
  );
}
