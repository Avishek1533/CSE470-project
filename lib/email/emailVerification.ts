import { sendEmail } from "@/lib/emailService";
import jwt from "jsonwebtoken";

const sendVerificationEmail = async (user: any) => {
	const { name, email } = user;
	if (!name || !email) {
		throw new Error(
			"Missing required user details for email verification."
		);
	}
	const tokenPayload = { email };
	const token = jwt.sign(
		tokenPayload,
		process.env.NEXTAUTH_SECRET as string,
		{
			expiresIn: "5m",
		}
	);

	const subject = `Verify Your Email Address - VentureConnect`;

	const htmlBody = `
    <html>
      <head>
        <style>
          body {
            font-family: 'Arial', sans-serif;
            color: #333;
            background: linear-gradient(to right, #4e73df, #1cc88a);
            padding: 1.25rem;
            margin: 0;
          }
          .container {
            max-width: 37.5rem; /* 600px */
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 0.75rem; /* 12px */
            padding: 2.5rem; /* 40px */
            text-align: center;
            box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1);
          }
          .header {
            background-color: #00a8e6;
            color: #ffffff;
            padding: 1.25rem; /* 20px */
            border-radius: 0.75rem 0.75rem 0 0;
            font-size: 1.5rem; /* 24px */
            font-weight: bold;
          }
          .card {
            background-color: #f4f6f9;
            border-radius: 0.75rem;
            padding: 1.875rem; /* 30px */
            box-shadow: 0 0.125rem 0.3125rem rgba(0, 0, 0, 0.1);
            margin-top: 1.25rem;
            text-align: left;
          }
          .card-header {
            font-size: 1.125rem; /* 18px */
            font-weight: bold;
            margin-bottom: 0.625rem; /* 10px */
            color: #333333;
          }
          .card-body {
            font-size: 1rem; /* 16px */
            color: #555555;
            margin-bottom: 1.25rem;
            line-height: 1.5;
          }
          .button {
            background-color: #00a8e6;
            color: #ffffff;
            padding: 0.9375rem 1.875rem; /* 15px 30px */
            border-radius: 3.125rem; /* 50px */
            text-decoration: none;
            font-weight: bold;
            display: inline-block;
            margin-top: 1.25rem;
          }
          .footer {
            font-size: 0.875rem; /* 14px */
            color: #777777;
            margin-top: 1.25rem;
          }
          .link-text {
            word-break: break-all;
            font-size: 0.875rem;
            color: #1cc88a;
          }
          /* Responsive Adjustments */
          @media (max-width: 600px) {
            .container {
              padding: 1.25rem;
            }
            .header {
              font-size: 1.25rem;
            }
            .card, .card-body {
              font-size: 0.9375rem;
            }
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            Verify Your Email Address
          </div>
          <div class="card">
            <div class="card-header">
              Hello ${name},
            </div>
            <div class="card-body">
              <p>
                Thank you for joining VentureConnect. To ensure your account remains secure, please verify your email address by clicking the button below.
              </p>
              <p>
                This verification link is valid for 5 minutes. Once confirmed, you'll be able to enjoy all the features our platform has to offer, including connecting with startups or investors.
              </p>
              <p style="text-align: center;">
                <a
                 style="text-decoration: none; color: white;"
                 href="http://${
						process.env.DOMAIN
					}/auth/verify-email/${token}" class="button">Verify Email</a>
              </p>
              <p>
                If the button above does not work, please copy and paste the link below into your browser:
              </p>
              <p class="link-text">
                http://${process.env.DOMAIN}/auth/verify-email/${token}
              </p>
              <p>
                If you did not register for a VentureConnect account, please ignore this email.
              </p>
            </div>
          </div>
          <div class="footer">
            <p>For any assistance, please contact <a href="mailto:${
				process.env.EMAIL_USER
			}">${process.env.EMAIL_USER}</a>.</p>
            <p>VentureConnect &copy; ${new Date().getFullYear()}</p>
          </div>
        </div>
      </body>
    </html>
  `;

	await sendEmail({
		to: email,
		subject,
		html: htmlBody,
	});
};

export { sendVerificationEmail };
