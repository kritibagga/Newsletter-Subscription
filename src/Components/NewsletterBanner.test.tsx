import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NewsletterBanner from "./NewsletterBanner";

describe("NewsletterBanner component", () => {
	beforeEach(() => {
		render(<NewsletterBanner />);
	});

	test("renders with initial state", () => {
		expect(
			screen.getByText(/Subscribe to our Newsletter!/i)
		).toBeInTheDocument();
		expect(
			screen.getByPlaceholderText(/Enter your email/i)
		).toBeInTheDocument();
		const subscribeButton = screen.getByRole("button", { name: /subscribe/i });
		expect(subscribeButton).toBeInTheDocument();
	});

	test("form submission with invalid email", async () => {
		const emailInput = screen.getByPlaceholderText("Enter your email");
		const subscribeButton = screen.getByRole("button", { name: /subscribe/i });
		await userEvent.type(emailInput, "invalid-email");
		userEvent.click(subscribeButton);
		await screen.queryByText("Please enter a valid email address.");
	});

	test("subscribes successfully with valid email", async () => {
		const emailInput = screen.getByPlaceholderText(
			"Enter your email"
		) as HTMLInputElement;
		const subscribeButton = screen.getByRole("button", { name: /subscribe/i });
		expect(subscribeButton).toBeInTheDocument();

		// Enter a valid email and click subscribe
		await userEvent.type(emailInput, "test@example.com");

		expect(emailInput.value).toBe("test@example.com");

		userEvent.click(subscribeButton);

		// Wait for subscription to complete
		await waitFor(async () => {
			const successMessage = await screen.findByText(
				"Subscription Successful!"
			);
			expect(successMessage).toBeInTheDocument();
		});
	});

	test("closes the newsletter banner when close button is clicked", async () => {
		const closeIcon = screen.getByTestId("close-icon");
		userEvent.click(closeIcon);

		// Ensure the banner is no longer in the document
		await waitFor(async () => {
			const checkCard = await screen.queryByText(
				/Subscribe to our Newsletter!/i
			);
			expect(checkCard).not.toBeInTheDocument();
		});
	});
});
