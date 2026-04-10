import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
	host: process.env.SMTP_HOST,
	port: 465,
	secure: true,
	auth: {
		user: process.env.SMTP_USER,
		pass: process.env.SMTP_PASS,
	},
	tls: {
		rejectUnauthorized: false,
	},
	debug: true, // Enable debug logging
	logger: true, // Enable logger
});

transporter.verify((error: any, success: any) => {
	if (error) {
		console.error("Error setting up email transporter:", error);
	} else {
		console.log("Email transporter is ready to send messages.");
	}
});

interface EmailOptions {
	to: string;
	subject: string;
	text?: string;
	html?: string;
}

export async function sendEmail(options: EmailOptions): Promise<void> {
	const { to, subject, text, html } = options;

	if (!to || !subject || (!text && !html)) {
		throw new Error(
			"Missing required email parameters: to, subject, and either text or html content are required."
		);
	}

	try {
		await transporter.sendMail({
			from: `"VentureConnect" <${process.env.SMTP_USER}>`,
			to,
			subject,
			text,
			html,
		});
	} catch (error) {
		console.error("Error sending email:", error);
		throw new Error("Failed to send email. Please try again later.");
	}
}
