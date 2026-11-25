import { calculateDeliveryCost } from '../src/deliveryCalculator';

describe('Delivery Calculator', () => {
  test('Scenario 1: Standard delivery costs 100 UAH and express delivery costs 250 UAH when weight is <= 5 kg', () => {
    expect(calculateDeliveryCost({ deliveryType: 'standard', weightKg: 0 })).toBe(100);
    expect(calculateDeliveryCost({ deliveryType: 'standard', weightKg: 3.5 })).toBe(100);
    expect(calculateDeliveryCost({ deliveryType: 'standard', weightKg: 5 })).toBe(100);

    expect(calculateDeliveryCost({ deliveryType: 'express', weightKg: 0 })).toBe(250);
    expect(calculateDeliveryCost({ deliveryType: 'express', weightKg: 3.5 })).toBe(250);
    expect(calculateDeliveryCost({ deliveryType: 'express', weightKg: 5 })).toBe(250);
  });

  test('Scenario 2: If parcel weight exceeds 5 kg, 20 UAH added for each full or partial kg above 5 kg (Standard)', () => {
    // 5.1 kg -> 6 kg ceiling -> 1 extra kg -> 100 + 20 = 120
    expect(calculateDeliveryCost({ deliveryType: 'standard', weightKg: 5.1 })).toBe(120);
    // 6 kg -> 1 extra kg -> 100 + 20 = 120
    expect(calculateDeliveryCost({ deliveryType: 'standard', weightKg: 6 })).toBe(120);
    // 6.5 kg -> 2 extra kg -> 100 + 40 = 140
    expect(calculateDeliveryCost({ deliveryType: 'standard', weightKg: 6.5 })).toBe(140);
  });

  test('Scenario 3: Express delivery weight surcharge applies identically on top of 250 UAH base rate', () => {
    // 5.1 kg -> 250 + 20 = 270
    expect(calculateDeliveryCost({ deliveryType: 'express', weightKg: 5.1 })).toBe(270);
    // 6 kg -> 250 + 20 = 270
    expect(calculateDeliveryCost({ deliveryType: 'express', weightKg: 6 })).toBe(270);
    // 7.2 kg -> ceil(2.2) = 3 extra kg -> 250 + 60 = 310
    expect(calculateDeliveryCost({ deliveryType: 'express', weightKg: 7.2 })).toBe(310);
  });

  test('Edge cases and error handling', () => {
    expect(() => calculateDeliveryCost({ deliveryType: 'standard', weightKg: -1 })).toThrow('Parcel weight cannot be negative.');
    expect(() => calculateDeliveryCost({ deliveryType: 'unknown' as any, weightKg: 3 })).toThrow('Invalid delivery type: unknown');
  });
});
