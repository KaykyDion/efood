import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type PurchasePayload = {
  products: { id: number; price: number }[];
  delivery: Delivery;
  payment: {
    card: {
      name: string;
      number: string;
      code: number;
      expires: {
        month: number;
        year: number;
      };
    };
  };
};

type Response = {
  orderId: string;
};

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fake-api-tau.vercel.app/api/efood",
  }),

  endpoints: (builder) => ({
    getAllRestaurants: builder.query<Restaurant[], void>({
      query: () => "restaurantes",
    }),
    getRestaurant: builder.query<Restaurant, string>({
      query: (id) => `restaurantes/${id}`,
    }),
    purchase: builder.mutation<Response, PurchasePayload>({
      query: (body) => ({
        url: "checkout",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useGetAllRestaurantsQuery,
  useGetRestaurantQuery,
  usePurchaseMutation,
} = api;
export default api;
