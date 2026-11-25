export type DeliveryType = 'standard' | 'express';

export interface DeliveryCalculationInput {
  deliveryType: DeliveryType;
  weightKg: number;
}

export function calculateDeliveryCost(input: DeliveryCalculationInput): number {
  if (input.weightKg < 0) {
    throw new Error('Parcel weight cannot be negative.');
  }

  let baseCost = 0;
  if (input.deliveryType === 'standard') {
    baseCost = 100;
  } else if (input.deliveryType === 'express') {
    baseCost = 250;
  } else {
    throw new Error(`Invalid delivery type: ${input.deliveryType}`);
  }

  let weightSurcharge = 0;
  if (input.weightKg > 5) {
    const extraKg = Math.ceil(input.weightKg - 5);
    weightSurcharge = extraKg * 20;
  }

  return baseCost + weightSurcharge;
}
