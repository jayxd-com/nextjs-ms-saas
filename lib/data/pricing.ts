// lib/data/pricing.ts

export interface Plan {
    name: string;
    features: string[];
    price: number;
    period: string; // e.g., 'year' or 'month'
    discount?: string; // Optional field for discount information
  }
  
  export interface PaymentTypePlans {
    paymentType: 'Credit Card' | 'ACH';
    plans: Plan[];
  }
  
  export const plans: PaymentTypePlans[] = [
    {
      paymentType: 'Credit Card',
      plans: [
        {
          name: 'Basic',
          features: [
            'Example Feature Number 1',
            'Example Feature Number 2',
            'Example Feature Number 3',
          ],
          price: 100,
          period: 'year',
        },
        {
          name: 'Pro',
          features: [
            'Example Feature Number 1',
            'Example Feature Number 2',
            'Example Feature Number 3',
          ],
          price: 250,
          period: 'year',
        },
        {
          name: 'Enterprise',
          features: [
            'Example Feature Number 1',
            'Example Feature Number 2',
            'Super Exclusive Feature',
          ],
          price: 500, // Assuming a custom price for demonstration
          period: 'year',
        },
      ],
    },
    {
      paymentType: 'ACH',
      plans: [
        {
          name: 'Basic',
          features: [
            'Example Feature Number 1 Example Feature Number 1',
            'Example Feature Number 2',
            'Example Feature Number 3',
          ],
          price: 90, // Discounted price
          period: 'year',
          discount: 'Save $10', // Optional discount information
        },
        {
          name: 'Pro',
          features: [
            'Example Feature Number 1',
            'Example Feature Number 2',
            'Example Feature Number 3',
          ],
          price: 225, // Discounted price
          period: 'year',
          discount: 'Save $25', // Optional discount information
        },
        {
          name: 'Enterprise',
          features: [
            'Example Feature Number 1',
            'Example Feature Number 2',
            'Super Exclusive Feature',
          ],
          price: 450, // Discounted price
          period: 'year',
          discount: 'Save $50', // Optional discount information
        },
      ],
    },
  ];
  