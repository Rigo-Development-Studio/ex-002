# Delivery Calculator Module (ex-002)

## Overview & Objective
As a customer checking out on the online store, the delivery calculator determines the base shipping cost (Standard vs. Express) and adjusts for parcel weight, ensuring heavier shipments accurately reflect increased courier handling costs.

## API Usage

```typescript
import { calculateDeliveryCost, DeliveryCalculationInput } from './deliveryCalculator';

const input: DeliveryCalculationInput = {
  deliveryType: 'standard', // or 'express'
  weightKg: 6.5
};

const costUah = calculateDeliveryCost(input);
console.log(costUah); // e.g., 140
```

## Rules & Pricing
- **Standard Delivery Base**: 100 UAH (weight <= 5 kg)
- **Express Delivery Base**: 250 UAH (weight <= 5 kg)
- **Weight Surcharge**: For parcels exceeding 5 kg, an additional 20 UAH is added for each full or partial kilogram above 5 kg (`Math.ceil(weight - 5) * 20`).
