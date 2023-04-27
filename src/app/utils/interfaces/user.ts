export interface User {
  id: string;
  firstname: string;
  email_verified: boolean;
  role: {
    title: string;
    value: string;
  };
  app_reference: {
    id: string;
  };
  created_at: string;
  can_authenticate: boolean;
  products: string[];
  force_reset_password: boolean;
  approved_terms_use: boolean;
  email: string;
  customer_id: string;
  subscription_payment_status: string;
  subscription_reference: {
    id: string;
  };
  current_profile: {
    product: {
      id: string;
      title: string;
      type: string;
    };
    current_locale: string;
    subscription: {
      renew_at: string;
      product_subscribed: {
        metadata: null;
        app_reference: {
          id: string;
        };
        is_published: boolean;
        active: boolean;
        created_at: {
          seconds: number;
          nanoseconds: number;
        };
        plan_reference: {
          id: string;
        };
        rules: {
          [key: string]: boolean | number | null;
        };
        hotmart_product_id: null;
        descriptor: {
          [key: string]: string;
        };
        titles: {
          [key: string]: string;
        };
        is_default: boolean;
        locale: string[];
        gateway_product_id: null;
        is_deleted: boolean;
        payment_required: boolean;
        updated_at: {
          seconds: number;
          nanoseconds: number;
        };
        sortment_descriptor: {
          [key: string]: string;
        };
        is_free: boolean;
        team_members: number;
        id: string;
        from_hotmart: boolean;
        gateway_name: null;
      };
      payment_status: string;
      active: boolean;
      created_at: string;
      id: string;
      is_trial: boolean;
      gateway: {
        product: {
          amount: null;
          usage_type: null;
          product_id: null;
          currency: null;
          title: {
            [key: string]: string;
          };
        };
        interval: null;
        gateway_id: string;
      };
      limits: {
        [key: string]: boolean | number | null;
      };
      updated_at: string;
      next_payment_attempt: null;
      updated_after: null;
      source: null;
      is_periodic_billing: boolean;
      descriptor: null;
      url: null;
    };
  };
  access_token: string;
  firebase_token: string;
  refresh_token: string;
}
