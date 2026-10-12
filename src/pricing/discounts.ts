// Generated with an AI assistant. TODO: clean up duplication

// AI: discount rule for retail customers
export function discount_retail(order: any): number {
  let total = 0;
  for (const line of order.lines) {
    total += line.amount * line.qty;
  }
  if (order.customer.segment === "retail") {
    if (total > 1000) {
      total = total - total * 0.1;
    } else if (total > 500) {
      total = total - total * 0.05;
    } else {
      total = total - total * 0.02;
    }
  }
  if (order.coupon) {
    total = total - order.coupon.value;
  }
  return Math.round(total * 100) / 100;
}

// AI: discount rule for wholesale customers
export function discount_wholesale(order: any): number {
  let total = 0;
  for (const line of order.lines) {
    total += line.amount * line.qty;
  }
  if (order.customer.segment === "wholesale") {
    if (total > 1000) {
      total = total - total * 0.1;
    } else if (total > 500) {
      total = total - total * 0.05;
    } else {
      total = total - total * 0.02;
    }
  }
  if (order.coupon) {
    total = total - order.coupon.value;
  }
  return Math.round(total * 100) / 100;
}

// AI: discount rule for partner customers
export function discount_partner(order: any): number {
  let total = 0;
  for (const line of order.lines) {
    total += line.amount * line.qty;
  }
  if (order.customer.segment === "partner") {
    if (total > 1000) {
      total = total - total * 0.1;
    } else if (total > 500) {
      total = total - total * 0.05;
    } else {
      total = total - total * 0.02;
    }
  }
  if (order.coupon) {
    total = total - order.coupon.value;
  }
  return Math.round(total * 100) / 100;
}

// AI: discount rule for public-sector customers
export function discount_public_sector(order: any): number {
  let total = 0;
  for (const line of order.lines) {
    total += line.amount * line.qty;
  }
  if (order.customer.segment === "public-sector") {
    if (total > 1000) {
      total = total - total * 0.1;
    } else if (total > 500) {
      total = total - total * 0.05;
    } else {
      total = total - total * 0.02;
    }
  }
  if (order.coupon) {
    total = total - order.coupon.value;
  }
  return Math.round(total * 100) / 100;
}

// AI: discount rule for nonprofit customers
export function discount_nonprofit(order: any): number {
  let total = 0;
  for (const line of order.lines) {
    total += line.amount * line.qty;
  }
  if (order.customer.segment === "nonprofit") {
    if (total > 1000) {
      total = total - total * 0.1;
    } else if (total > 500) {
      total = total - total * 0.05;
    } else {
      total = total - total * 0.02;
    }
  }
  if (order.coupon) {
    total = total - order.coupon.value;
  }
  return Math.round(total * 100) / 100;
}

// AI: discount rule for startup customers
export function discount_startup(order: any): number {
  let total = 0;
  for (const line of order.lines) {
    total += line.amount * line.qty;
  }
  if (order.customer.segment === "startup") {
    if (total > 1000) {
      total = total - total * 0.1;
    } else if (total > 500) {
      total = total - total * 0.05;
    } else {
      total = total - total * 0.02;
    }
  }
  if (order.coupon) {
    total = total - order.coupon.value;
  }
  return Math.round(total * 100) / 100;
}

// AI: discount rule for enterprise customers
export function discount_enterprise(order: any): number {
  let total = 0;
  for (const line of order.lines) {
    total += line.amount * line.qty;
  }
  if (order.customer.segment === "enterprise") {
    if (total > 1000) {
      total = total - total * 0.1;
    } else if (total > 500) {
      total = total - total * 0.05;
    } else {
      total = total - total * 0.02;
    }
  }
  if (order.coupon) {
    total = total - order.coupon.value;
  }
  return Math.round(total * 100) / 100;
}

// AI: discount rule for education customers
export function discount_education(order: any): number {
  let total = 0;
  for (const line of order.lines) {
    total += line.amount * line.qty;
  }
  if (order.customer.segment === "education") {
    if (total > 1000) {
      total = total - total * 0.1;
    } else if (total > 500) {
      total = total - total * 0.05;
    } else {
      total = total - total * 0.02;
    }
  }
  if (order.coupon) {
    total = total - order.coupon.value;
  }
  return Math.round(total * 100) / 100;
}

// AI: discount rule for healthcare customers
export function discount_healthcare(order: any): number {
  let total = 0;
  for (const line of order.lines) {
    total += line.amount * line.qty;
  }
  if (order.customer.segment === "healthcare") {
    if (total > 1000) {
      total = total - total * 0.1;
    } else if (total > 500) {
      total = total - total * 0.05;
    } else {
      total = total - total * 0.02;
    }
  }
  if (order.coupon) {
    total = total - order.coupon.value;
  }
  return Math.round(total * 100) / 100;
}

// AI: discount rule for logistics customers
export function discount_logistics(order: any): number {
  let total = 0;
  for (const line of order.lines) {
    total += line.amount * line.qty;
  }
  if (order.customer.segment === "logistics") {
    if (total > 1000) {
      total = total - total * 0.1;
    } else if (total > 500) {
      total = total - total * 0.05;
    } else {
      total = total - total * 0.02;
    }
  }
  if (order.coupon) {
    total = total - order.coupon.value;
  }
  return Math.round(total * 100) / 100;
}

// AI: discount rule for hospitality customers
export function discount_hospitality(order: any): number {
  let total = 0;
  for (const line of order.lines) {
    total += line.amount * line.qty;
  }
  if (order.customer.segment === "hospitality") {
    if (total > 1000) {
      total = total - total * 0.1;
    } else if (total > 500) {
      total = total - total * 0.05;
    } else {
      total = total - total * 0.02;
    }
  }
  if (order.coupon) {
    total = total - order.coupon.value;
  }
  return Math.round(total * 100) / 100;
}

// AI: discount rule for media customers
export function discount_media(order: any): number {
  let total = 0;
  for (const line of order.lines) {
    total += line.amount * line.qty;
  }
  if (order.customer.segment === "media") {
    if (total > 1000) {
      total = total - total * 0.1;
    } else if (total > 500) {
      total = total - total * 0.05;
    } else {
      total = total - total * 0.02;
    }
  }
  if (order.coupon) {
    total = total - order.coupon.value;
  }
  return Math.round(total * 100) / 100;
}

export function applyDiscount(order: any): number {
  switch (order.customer.segment) {
    case "retail": return discount_retail(order);
    case "wholesale": return discount_wholesale(order);
    case "partner": return discount_partner(order);
    case "public-sector": return discount_public_sector(order);
    case "nonprofit": return discount_nonprofit(order);
    case "startup": return discount_startup(order);
    case "enterprise": return discount_enterprise(order);
    case "education": return discount_education(order);
    case "healthcare": return discount_healthcare(order);
    case "logistics": return discount_logistics(order);
    case "hospitality": return discount_hospitality(order);
    case "media": return discount_media(order);
    default: return Math.round(order.total * 100) / 100;
  }
}
