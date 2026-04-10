import { sendEmail } from "@/lib/emailService";

const sendWelcomeEmail = async (user: any) => {
	const { name, email, roles } = user;
	const role = roles[0];

	const subject = `Welcome to VentureConnect, ${name}!`;

	let htmlBody = `
    <html>
      <head>
        <style>
          body {
            font-family: 'Arial', sans-serif;
            color: #333;
            background: linear-gradient(to right, #4e73df, #1cc88a);
            padding: 1.25rem;
          }
          .container {
            max-width: 37.5rem;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 0.75rem;
            padding: 2.5rem;
            text-align: center;
            box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1);
          }
          .header {
            background-color: #00a8e6;
            color: white;
            padding: 1.25rem;
            border-radius: 0.75rem 0.75rem 0 0;
            font-size: 1.5rem;
          }
          .footer {
            font-size: 0.875rem;
            color: #777;
            margin-top: 1.25rem;
          }
          .button {
            background-color: #00a8e6;
            color: white;
            padding: 0.9375rem 1.875rem;
            border-radius: 50px;
            text-decoration: none;
            font-weight: bold;
            display: inline-block;
            margin-top: 1.25rem;
          }
          .card {
            background-color: #f4f6f9;
            border-radius: 0.75rem;
            padding: 1.25rem;
            box-shadow: 0 0.125rem 0.3125rem rgba(0, 0, 0, 0.1);
            margin-top: 1.25rem;
          }
          .card-header {
            font-size: 1.125rem;
            font-weight: bold;
            margin-bottom: 0.625rem;
            color: #333;
          }
          .card-body {
            font-size: 1rem;
            color: #555;
            margin-bottom: 1.25rem;
          }
          .role-info {
            font-style: italic;
            color: #666;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Welcome to VentureConnect!</h1>
            <p>We're thrilled to have you on board, ${name}.</p>
          </div>
          <div class="card">
            <div class="card-header">
              Your Email is Verified
            </div>
            <div class="card-body">
              <p>
                Congratulations! Your email has been successfully verified.
              </p>
              <p>
                Thank you for joining VentureConnect, the platform that connects promising startups with passionate investors.
              </p>
              <p class="role-info">
                ${
					role === "startup"
						? `As a Startup, you can now showcase your innovative ideas, connect with investors, and take your venture to the next level.`
						: `As an Investor, you can now discover the most promising startups, evaluate investment opportunities, and help bring new ideas to life.`
				}
              </p>
              <p>
                To get started, please visit your profile and complete any missing details. We’re here to help you connect, grow, and succeed!
              </p>
              <a href="http://${
					process.env.DOMAIN
				}" class="button">Visit VentureConnect</a>
            </div>
          </div>
          <div class="footer">
            <p>For any help, please contact <a href="mailto:${
				process.env.SMTP_USER
			}" style="color: inherit; text-decoration: none;">${
		process.env.SMTP_USER
	}</a>.</p>
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

export { sendWelcomeEmail };
