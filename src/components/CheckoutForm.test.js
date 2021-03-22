import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {

    const header = render(<CheckoutForm/>);
    const element = header.queryByText(/Checkout Form/i);
    expect(element).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {

    const form = render(<CheckoutForm/>);
    const successMessage = form.queryByText(/You have ordered some plants! Woo-hoo!/i);
    const button = form.queryByText(/CHECKOUT/);
    userEvent.click(button);
    expect(successMessage).toBeInTheDocument();

});
