/**
 * Legal document content (Terms & Conditions, Privacy Policy).
 *
 * Rendered by src/pageComponents/LegalPage.tsx. Each doc is a list of
 * sections (heading + paragraphs and/or a bullet list).
 *
 * NOTE: This is general, good-faith template copy for a digital agency.
 * Replace the {{CONTACT_EMAIL}} / {{JURISDICTION}} placeholders and have it
 * reviewed by a qualified lawyer before relying on it.
 */

const CONTACT_EMAIL = 'hello@cyveradigitals.com';
const JURISDICTION = 'the jurisdiction in which Cyvera Digitals operates';

export type LegalSection = {
  heading: string;
  paragraphs?: string[];
  list?: string[];
};

export type LegalDoc = {
  title: string;
  updated: string; // ISO yyyy-mm-dd
  intro: string;
  sections: LegalSection[];
};

export const terms: LegalDoc = {
  title: 'Terms and Conditions',
  updated: '2026-05-24',
  intro:
    'These Terms and Conditions ("Terms") govern your access to and use of the Cyvera Digitals website and the services we provide. By using our website or engaging our services, you agree to these Terms. Please read them carefully.',
  sections: [
    {
      heading: '1. Who We Are',
      paragraphs: [
        'Cyvera Digitals ("we", "us", "our") is a creative digital agency offering website development, UI/UX strategy, graphic and brand design, and social media management services. References to "you" or "client" mean any individual or business that visits our website or engages our services.',
      ],
    },
    {
      heading: '2. Acceptance of Terms',
      paragraphs: [
        'By accessing this website, requesting a quote, or commissioning work, you confirm that you have read, understood, and agree to be bound by these Terms. If you are agreeing on behalf of a company, you represent that you have authority to do so. If you do not agree, please do not use our website or services.',
      ],
    },
    {
      heading: '3. Our Services',
      paragraphs: [
        'The specific scope, deliverables, timeline, and price for any engagement are defined in a separate written proposal, quote, or statement of work agreed between us. Those project-specific terms, together with these Terms, form the agreement between us. Where there is a conflict, the signed proposal or statement of work takes precedence.',
      ],
    },
    {
      heading: '4. Quotes, Fees, and Payment',
      paragraphs: [
        'Quotes are valid for the period stated in the proposal. Unless agreed otherwise, projects may require a deposit before work begins, with the balance due at agreed milestones or on completion.',
      ],
      list: [
        'Prices shown on our website are indicative and may change; the binding price is the one in your accepted proposal.',
        'Invoices are payable by the due date stated. Late payments may pause work and incur reasonable late fees where permitted by law.',
        'Third-party costs (domains, hosting, premium plugins, stock assets, fonts, ad spend) are your responsibility unless expressly included in your proposal.',
      ],
    },
    {
      heading: '5. Client Responsibilities',
      paragraphs: [
        'A successful project depends on timely cooperation. You agree to provide accurate information, content, brand assets, access, and feedback within reasonable timeframes. Delays in providing materials or approvals may affect the timeline and cost of your project. You are responsible for ensuring any content you supply does not infringe third-party rights.',
      ],
    },
    {
      heading: '6. Revisions and Approvals',
      paragraphs: [
        'The number of revision rounds included is specified in your proposal. Additional revisions, or changes that fall outside the agreed scope, may be billed separately at our standard rate. Once you approve a deliverable or milestone, further changes are treated as new work.',
      ],
    },
    {
      heading: '7. Intellectual Property',
      paragraphs: [
        'Unless your proposal states otherwise, ownership of final deliverables transfers to you upon full payment. Until then, all work remains our property. We may retain and reuse general know-how, techniques, and non-client-specific components.',
        'We may showcase completed work in our portfolio and marketing unless you request otherwise in writing. Third-party assets (fonts, stock media, plugins) remain subject to their own licenses.',
      ],
    },
    {
      heading: '8. Third-Party Services',
      paragraphs: [
        'Our services may rely on third-party platforms and tools (for example, hosting providers, content management systems, payment processors, and analytics). We are not responsible for the availability, performance, or policies of those third parties, and your use of them may be subject to their own terms.',
      ],
    },
    {
      heading: '9. Confidentiality',
      paragraphs: [
        'Each party agrees to keep confidential any non-public information shared during an engagement and to use it only for the purposes of the project. This obligation does not apply to information that is or becomes public through no fault of the receiving party, or that must be disclosed by law.',
      ],
    },
    {
      heading: '10. Warranties and Disclaimer',
      paragraphs: [
        'We provide our services with reasonable skill and care. However, our website and services are provided "as is" and "as available" without warranties of any kind, whether express or implied, including fitness for a particular purpose. We do not warrant that the website will be uninterrupted, error-free, or free of harmful components.',
      ],
    },
    {
      heading: '11. Limitation of Liability',
      paragraphs: [
        'To the maximum extent permitted by law, Cyvera Digitals will not be liable for any indirect, incidental, or consequential losses, or for loss of profits, revenue, data, or goodwill. Our total liability arising from any engagement will not exceed the fees you paid us for that engagement. Nothing in these Terms limits liability that cannot be excluded by law.',
      ],
    },
    {
      heading: '12. Termination',
      paragraphs: [
        'Either party may terminate an engagement in writing if the other materially breaches these Terms and fails to remedy the breach within a reasonable period. On termination, you agree to pay for all work completed up to the termination date. Sections intended to survive termination (including Intellectual Property, Confidentiality, and Limitation of Liability) will continue to apply.',
      ],
    },
    {
      heading: '13. Governing Law',
      paragraphs: [
        `These Terms are governed by the laws of ${JURISDICTION}, and any disputes will be subject to the exclusive jurisdiction of its courts.`,
      ],
    },
    {
      heading: '14. Changes to These Terms',
      paragraphs: [
        'We may update these Terms from time to time. The latest version will always be posted on this page with a revised "Last updated" date. Continued use of our website or services after changes take effect constitutes acceptance of the updated Terms.',
      ],
    },
    {
      heading: '15. Contact Us',
      paragraphs: [
        `If you have any questions about these Terms, contact us at ${CONTACT_EMAIL}.`,
      ],
    },
  ],
};

export const privacy: LegalDoc = {
  title: 'Privacy Policy',
  updated: '2026-05-24',
  intro:
    'This Privacy Policy explains how Cyvera Digitals collects, uses, and protects your personal information when you visit our website or engage our services. We are committed to handling your data responsibly and transparently.',
  sections: [
    {
      heading: '1. Information We Collect',
      paragraphs: [
        'We collect information you provide directly and information collected automatically when you use our website.',
      ],
      list: [
        'Information you provide: name, email address, phone number, business details, project information, and anything you include in forms or messages you send us.',
        'Information collected automatically: IP address, browser and device type, pages visited, referring URLs, and similar usage data gathered through cookies and analytics tools.',
      ],
    },
    {
      heading: '2. How We Use Your Information',
      paragraphs: ['We use the information we collect to:'],
      list: [
        'Respond to enquiries and provide quotes or consultations.',
        'Deliver, manage, and improve our services and website.',
        'Send project updates, invoices, and (where you have opted in) occasional marketing.',
        'Understand how our website is used so we can improve it.',
        'Comply with legal obligations and protect against fraud or misuse.',
      ],
    },
    {
      heading: '3. Cookies and Analytics',
      paragraphs: [
        'Our website uses cookies and similar technologies, including privacy-respecting analytics, to understand traffic and improve the experience. You can control or disable cookies through your browser settings, though some features may not work as intended without them.',
      ],
    },
    {
      heading: '4. How We Share Your Information',
      paragraphs: [
        'We do not sell your personal information. We may share it only with trusted service providers who help us operate (for example, hosting, email, analytics, and payment processors), and only to the extent needed to perform their services. We may also disclose information where required by law or to protect our rights.',
      ],
    },
    {
      heading: '5. Data Retention',
      paragraphs: [
        'We keep personal information only as long as necessary for the purposes described in this policy, to satisfy legal, accounting, or reporting requirements, or to resolve disputes. When it is no longer needed, we securely delete or anonymise it.',
      ],
    },
    {
      heading: '6. Data Security',
      paragraphs: [
        'We use reasonable technical and organisational measures to protect your information against loss, misuse, and unauthorised access. However, no method of transmission or storage is completely secure, and we cannot guarantee absolute security.',
      ],
    },
    {
      heading: '7. Your Rights',
      paragraphs: [
        'Depending on your location, you may have rights regarding your personal information, including the right to access, correct, delete, or restrict its use, and to object to processing or withdraw consent. To exercise these rights, contact us using the details below.',
      ],
    },
    {
      heading: '8. Third-Party Links',
      paragraphs: [
        'Our website may link to third-party sites or services we do not control. This policy does not apply to those sites, and we encourage you to review their privacy policies.',
      ],
    },
    {
      heading: '9. Children’s Privacy',
      paragraphs: [
        'Our website and services are not directed to children, and we do not knowingly collect personal information from children. If you believe a child has provided us information, please contact us so we can remove it.',
      ],
    },
    {
      heading: '10. Changes to This Policy',
      paragraphs: [
        'We may update this Privacy Policy from time to time. The latest version will always appear on this page with a revised "Last updated" date. Significant changes will be made clear where appropriate.',
      ],
    },
    {
      heading: '11. Contact Us',
      paragraphs: [
        `If you have questions about this Privacy Policy or how we handle your data, contact us at ${CONTACT_EMAIL}.`,
      ],
    },
  ],
};
