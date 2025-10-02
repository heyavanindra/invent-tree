"use client";

import { useState, useRef } from "react";
import {
  Shield,
  Users,
  FileText,
  Lock,
  Globe,
  BarChart3,
  Heart,
  AlertCircle,
  ChevronLeft,
  ChevronRight,
  DollarSign,
} from "lucide-react";

export default function PoliciesComponent() {
  const [activeTab, setActiveTab] = useState("core-legal");
  const [activePolicy, setActivePolicy] = useState(0);
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    setActivePolicy(0);
  };

  const tabs = [
    { id: "core-legal", label: "Core Legal", icon: FileText },
    { id: "governance", label: "Governance", icon: Shield },
    // { id: 'client-service', label: 'Client & Service', icon: Users },
    { id: "data-protection", label: "Data Protection", icon: Lock },
    { id: "media-communication", label: "Media & Communication", icon: Globe },
    { id: "survey-research", label: "Survey & Research", icon: BarChart3 },
    { id: "specialized", label: "Specialized Services", icon: AlertCircle },
    { id: "health-safety", label: "Health & Safety", icon: Heart },
    { id: "hr-policies", label: "HR Policies", icon: Users },
    { id: "finance", label: "Finance", icon: DollarSign },
  ];

  const policies = {
    "core-legal": {
      title: "Core Legal Documentation",
      description:
        "Essential legal frameworks that govern our service delivery and client relationships.",
      items: [
        {
          title: "Terms & Conditions",
          sections: [
            {
              heading: "Eligibility",
              text: "You must be at least 18 years old or have parental/guardian consent to use our Services. By using the Services, you represent and warrant that you meet this requirement.",
            },
            {
              heading: "Services Offered",
              text: "We provide consultancy, digital development, event planning, research, and related professional services. Specific deliverables, timelines, and fees will be governed by separate service agreements.",
            },
            {
              heading: "User Responsibilities",
              text: "You agree to use our Services only for lawful purposes. You must not misuse our Services, attempt unauthorized access, or engage in activities that harm our systems, data, or reputation.",
            },
            {
              heading: "Intellectual Property",
              text: "All content, branding, designs, text, graphics, and software are owned by Invent-Tree or its licensors. You may not copy, modify, distribute, or exploit any material without prior written consent.",
            },
            {
              heading: "Payments",
              text: "For paid services, you agree to pay fees as per the agreed terms. All charges are non-refundable unless covered by our Refund & Cancellation Policy.",
            },
            {
              heading: "Limitation of Liability",
              text: 'Our Services are provided on an "as is" basis. To the maximum extent permitted by law, we are not liable for indirect, incidental, or consequential damages arising from use of our Services.',
            },
            {
              heading: "Indemnification",
              text: "You agree to indemnify and hold us harmless from any claims, damages, or liabilities arising from your misuse of our Services.",
            },
            {
              heading: "Third-Party Links",
              text: "Our Services may include links to third-party sites. We are not responsible for their content, policies, or practices.",
            },
            {
              heading: "Governing Law",
              text: "These Terms shall be governed by and construed in accordance with the laws of India, with exclusive jurisdiction of courts in Lucknow, Uttar Pradesh.",
            },
            {
              heading: "Changes to Terms",
              text: "We reserve the right to modify these Terms at any time. Updates will be posted on this page with a revised date.",
            },
          ],
        },
        {
          title: "Privacy Policy",
          sections: [
            {
              heading: "Information We Collect",
              text: "Personal details (name, email, phone, address) provided when contacting us or signing up. Payment information for services. Usage data (IP address, browser type, access times, pages visited). Data from surveys, polls, or campaigns (with explicit consent).",
            },
            {
              heading: "How We Use Your Data",
              text: "To provide and improve our Services. To communicate updates, offers, and insights. To process transactions and manage accounts. For analytics, research, and compliance with legal obligations.",
            },
            {
              heading: "Data Sharing",
              text: "We do not sell your personal data. We may share data only with: Trusted service providers under confidentiality agreements. Legal or regulatory authorities where required. Clients, in anonymized and aggregated form, for research/polling insights.",
            },
            {
              heading: "Data Security",
              text: "We implement strict technical and organizational measures to protect data, including encryption, restricted access, and regular audits.",
            },
            {
              heading: "Cookies & Tracking",
              text: "We use cookies to enhance your browsing experience. You may disable cookies in your browser, but some features may not work properly.",
            },
            {
              heading: "User Rights",
              text: "Under the DPDP Act, you have the right to: Access, correct, or delete your personal data. Withdraw consent for data use. Lodge complaints with the Data Protection Board of India.",
            },
            {
              heading: "Retention",
              text: "We retain personal data only as long as necessary for the purposes stated above or as required by law.",
            },
            {
              heading: "International Data Transfers",
              text: "If data is transferred outside India, we ensure adequate protection through legal safeguards.",
            },
            {
              heading: "Updates",
              text: "We may update this Privacy Policy. Please check this page regularly for updates.",
            },
          ],
        },
        {
          title: "Terms of Use",
          sections: [
            {
              heading: "Acceptable Use",
              text: "You agree not to: Violate applicable laws or regulations. Engage in harassment, hate speech, or defamatory activities. Upload harmful code or attempt to disrupt our systems. Use our platform for unauthorized political propaganda or unlawful fundraising.",
            },
            {
              heading: "User Accounts",
              text: "If you create an account, you are responsible for maintaining its confidentiality and for all activities under it. We reserve the right to suspend accounts for misuse.",
            },
            {
              heading: "Intellectual Property",
              text: "All content provided on our platform is protected by copyright, trademark, and other intellectual property laws. Unauthorized use is strictly prohibited.",
            },
            {
              heading: "Termination",
              text: "We may suspend or terminate your access without notice if you violate these Terms of Use.",
            },
            {
              heading: "Disclaimer",
              text: "We make no guarantees that the website will be error-free, uninterrupted, or fully secure at all times.",
            },
          ],
        },
        {
          title: "Refund & Cancellation Policy",
          sections: [
            {
              heading: "Service Contracts",
              text: "Once a project agreement is signed and payment made, cancellation requests must be made in writing. Refund eligibility will depend on the stage of work completed.",
            },
            {
              heading: "Event Services",
              text: "Cancellations made 30 days before an event may be eligible for a partial refund (excluding non-refundable deposits and expenses). No refunds will be issued for cancellations made within 7 days of the event.",
            },
            {
              heading: "Digital/Website Development",
              text: "Refunds are not available once design, coding, or development work has started. If work is canceled before initiation, a refund minus administrative charges may be issued.",
            },
            {
              heading: "Consultancy & Polling Services",
              text: "Fees for surveys, polling, and consultancy are non-refundable once data collection or advisory has commenced.",
            },
            {
              heading: "Exceptions",
              text: "Refunds may be issued in cases of proven service failure or non-delivery, subject to management approval.",
            },
            {
              heading: "Contact for Refunds",
              text: "All refund/cancellation requests should be sent to our support team for review and processing.",
            },
          ],
        },
      ],
    },
    governance: {
      title: "Governance & Ethics Framework",
      description:
        "Our commitment to ethical operations, transparency, and accountability in all business practices.",
      items: [
        {
          title: "Code of Conduct & Ethics Policy",
          sections: [
            {
              heading: "Integrity & Honesty",
              text: "We act with fairness, transparency, and honesty in all dealings with clients, vendors, and stakeholders.",
            },
            {
              heading: "Political Neutrality",
              text: "While we provide political consultancy, we do not promote any personal or organizational bias. Our services are data-driven, impartial, and professional.",
            },
            {
              heading: "Confidentiality",
              text: "All employees must maintain strict confidentiality regarding client data, strategies, or internal processes.",
            },
            {
              heading: "Conflict of Interest",
              text: "Employees must disclose any personal or professional conflict of interest and refrain from activities that compromise Invent-Tree's integrity.",
            },
            {
              heading: "Respect & Professionalism",
              text: "We promote a respectful, harassment-free workplace. Discrimination, hate speech, or offensive behavior will not be tolerated.",
            },
            {
              heading: "Compliance",
              text: "All staff are required to comply with laws, regulations, and company policies.",
            },
          ],
        },
        {
          title: "Whistleblower Policy",
          sections: [
            {
              heading: "Purpose",
              text: "To provide a safe channel for reporting misconduct without fear of retaliation.",
            },
            {
              heading: "Scope",
              text: "Covers fraud, corruption, discrimination, harassment, misuse of resources, or violations of law and company policy.",
            },
            {
              heading: "Reporting Process",
              text: "Reports may be made confidentially via compliance@invent-tree.com. Anonymous complaints will also be considered, but detailed information is encouraged.",
            },
            {
              heading: "Protection",
              text: "Whistleblowers will not face retaliation or adverse action for raising genuine concerns in good faith.",
            },
            {
              heading: "Investigation",
              text: "All reports will be investigated by the compliance team or designated officers, with findings shared with management.",
            },
          ],
        },
        {
          title: "Anti-Bribery & Anti-Corruption Policy",
          sections: [
            {
              heading: "Prohibition",
              text: "Employees must not offer, solicit, or accept bribes, kickbacks, or improper benefits. Political donations on behalf of Invent-Tree are prohibited unless approved by management and permitted by law.",
            },
            {
              heading: "Gifts & Hospitality",
              text: "Reasonable, customary business courtesies are permitted, but extravagant or suspicious gifts must be reported to HR/compliance.",
            },
            {
              heading: "Reporting",
              text: "Suspected violations must be reported under the Whistleblower Policy.",
            },
            {
              heading: "Consequences",
              text: "Violations may result in disciplinary action, termination, and legal penalties.",
            },
          ],
        },
        {
          title: "Legal & Regulatory Compliance Policy",
          sections: [
            {
              heading: "Applicable Laws",
              text: "The Information Technology Act, 2000 and rules thereunder. The Digital Personal Data Protection Act, 2023. Election Commission of India regulations regarding political consulting, advertising, and funding. Tax, GST, labor, and corporate governance laws.",
            },
            {
              heading: "Responsibilities",
              text: "Employees must be aware of and comply with applicable laws. Management ensures training, monitoring, and enforcement of compliance.",
            },
          ],
        },
        {
          title: "Client Engagement Policy",
          sections: [
            {
              heading: "Contracts",
              text: "All services are formalized via written agreements defining scope, deliverables, timelines, and fees.",
            },
            {
              heading: "Confidentiality",
              text: "Client data and strategies are protected under NDAs and strict internal confidentiality protocols.",
            },
            {
              heading: "Transparency",
              text: "We provide accurate project status updates and billing clarity.",
            },
            {
              heading: "Dispute Resolution",
              text: "Disputes will first be attempted to be resolved amicably. If unresolved, matters will be referred to arbitration under the Arbitration and Conciliation Act, 1996 (India).",
            },
          ],
        },
        {
          title: "Event Safety & Risk Management Policy",
          sections: [
            {
              heading: "Venue Compliance",
              text: "All venues must meet fire safety, legal occupancy, and local authority requirements.",
            },
            {
              heading: "Emergency Preparedness",
              text: "Evacuation plans must be communicated to staff and volunteers. Medical assistance and security must be available on-site.",
            },
            {
              heading: "Risk Assessment",
              text: "Events will undergo risk analysis covering crowd control, VIP security, and technical safety.",
            },
            {
              heading: "Insurance",
              text: "Event insurance will be arranged where required, covering liability and accidents.",
            },
          ],
        },
        {
          title: "Vendor & Partner Policy",
          sections: [
            {
              heading: "Vendor Selection",
              text: "Vendors are selected based on merit, quality, and compliance—not favoritism or kickbacks.",
            },
            {
              heading: "Agreements",
              text: "All vendor relationships will be documented in contracts covering service levels, confidentiality, and compliance.",
            },
            {
              heading: "Compliance",
              text: "Vendors must comply with our Anti-Corruption, Privacy, and Event Safety policies.",
            },
            {
              heading: "Monitoring",
              text: "Vendor performance will be periodically reviewed.",
            },
          ],
        },
        {
          title: "Quality Assurance & Project Delivery Policy",
          sections: [
            {
              heading: "Standards",
              text: "All projects follow industry best practices in design, development, event management, and consulting.",
            },
            {
              heading: "Timeliness",
              text: "We commit to delivering on agreed timelines, with proactive communication of any delays.",
            },
            {
              heading: "Accuracy",
              text: "Data, reports, and analyses provided to clients will be fact-checked, validated, and unbiased.",
            },
            {
              heading: "Continuous Improvement",
              text: "We maintain a feedback loop to improve processes and client experience.",
            },
          ],
        },
      ],
    },
    "client-service": {
      title: "Client & Service Delivery Excellence",
      description:
        "Policies ensuring exceptional service delivery, professional partnerships, and quality project management.",
      items: [
        {
          title: "Client Engagement Policy",
          content:
            "Our Client Engagement Policy establishes the framework for professional, effective, and mutually beneficial client relationships. This policy outlines our commitment to understanding client needs, providing transparent communication, and delivering exceptional service quality. We detail our engagement process from initial consultation through project completion, including regular progress updates, stakeholder meetings, and feedback incorporation. The policy ensures consistent service standards, clear expectations management, and professional conduct throughout all client interactions, fostering long-term partnerships built on trust and results.",
        },
        {
          title: "Event Safety & Risk Management Policy",
          content:
            "Our comprehensive Event Safety & Risk Management Policy ensures the security and well-being of all participants in our events, surveys, and field operations. This policy covers risk assessment procedures, safety protocols, emergency response plans, and insurance requirements. We address venue safety standards, crowd management, weather contingencies, and health considerations. The policy includes staff training requirements, equipment safety checks, and incident reporting procedures. Regular safety audits and continuous improvement processes ensure our events maintain the highest safety standards while delivering effective political engagement and research activities.",
        },
        {
          title: "Vendor & Partner Policy",
          content:
            "Our Vendor & Partner Policy establishes rigorous standards for selecting, managing, and maintaining relationships with external suppliers and strategic partners. This policy outlines due diligence procedures, performance evaluation criteria, and ongoing monitoring requirements. We ensure all partners meet our ethical standards, quality expectations, and compliance requirements. The policy covers contract management, payment terms, confidentiality obligations, and termination procedures. Regular partner assessments and feedback mechanisms maintain high-quality relationships that enhance our service delivery capabilities while protecting client interests.",
        },
        {
          title: "Quality Assurance & Project Delivery Policy",
          content:
            "Our Quality Assurance & Project Delivery Policy guarantees consistent, high-quality outcomes across all client engagements. This comprehensive framework includes project planning methodologies, milestone tracking, quality checkpoints, and performance metrics. We detail our quality control processes, testing procedures, and validation mechanisms for all deliverables. The policy establishes clear accountability structures, review processes, and continuous improvement protocols. Regular quality audits, client feedback integration, and team performance assessments ensure we consistently exceed expectations while maintaining our reputation for excellence in political consulting and research services.",
        },
      ],
    },
    "data-protection": {
      title: "Data Protection & Security Framework",
      description:
        "Comprehensive policies protecting sensitive information and ensuring robust cybersecurity measures.",
      items: [
        {
          title: "Data Privacy & Protection Policy",
          sections: [
            {
              heading: "Purpose",
              text: "This policy ensures lawful, fair, and transparent processing of personal data collected through surveys, consultancy, digital platforms, and events.",
            },
            {
              heading: "Scope",
              text: "Applies to all employees, contractors, vendors, and volunteers handling data for Invent-Tree.",
            },
            {
              heading: "Data Principles",
              text: "Consent-based collection. Purpose limitation – data used only for stated objectives. Minimal collection – only what is necessary. Retention control – data retained only as long as necessary. Secure disposal – anonymization or deletion after use.",
            },
            {
              heading: "Roles & Responsibilities",
              text: "Data Protection Officer (DPO) – oversees compliance and responds to user rights requests. Employees – must handle data securely and report incidents.",
            },
            {
              heading: "User Rights",
              text: "Data principals (users) may request access, correction, deletion, or withdrawal of consent at any time by writing to privacy@invent-tree.com.",
            },
          ],
        },
        {
          title: "Information Security Policy",
          sections: [
            {
              heading: "Objectives",
              text: "Protect confidentiality, integrity, and availability of information. Prevent unauthorized access, loss, or misuse of company or client data.",
            },
            {
              heading: "Controls",
              text: "Access Control – role-based permissions, 2FA for sensitive systems. Encryption – all sensitive data stored/transmitted in encrypted form. Backups – secure, tested backups maintained regularly. Device Security – company devices must have updated antivirus, firewalls, and restricted USB access.",
            },
            {
              heading: "Responsibilities",
              text: "All employees must follow secure password practices. IT team must monitor systems and perform vulnerability scans.",
            },
            {
              heading: "Compliance",
              text: "Violations of this policy may result in disciplinary action or termination.",
            },
          ],
        },
        {
          title: "Cybersecurity & Incident Response Policy",
          sections: [
            {
              heading: "Objective",
              text: "To ensure preparedness and rapid response in case of cyber threats, breaches, or attacks.",
            },
            {
              heading: "Threat Management",
              text: "Prevention – firewalls, intrusion detection, security audits. Detection – continuous monitoring of systems, suspicious login alerts. Response – incidents reported immediately to the Cybersecurity Team. Recovery – affected systems isolated, restored from backups, vulnerabilities patched.",
            },
            {
              heading: "Incident Reporting",
              text: "All employees must report suspected cyber incidents within 2 hours to security@invent-tree.com.",
            },
            {
              heading: "Escalation",
              text: "Serious breaches involving personal data must be reported to regulators within 72 hours as per DPDP Act requirements.",
            },
            {
              heading: "Awareness & Training",
              text: "All staff undergo regular cybersecurity awareness programs.",
            },
          ],
        },
        {
          title: "Confidentiality & NDA Policy",
          sections: [
            {
              heading: "Objective",
              text: "To protect sensitive client, survey, campaign, and company information from unauthorized disclosure.",
            },
            {
              heading: "Scope",
              text: "Applies to employees, contractors, interns, volunteers, vendors, and any third party with access to confidential information.",
            },
            {
              heading: "Definition of Confidential Information",
              text: "Includes (but is not limited to): Client strategies, polling data, campaign plans. Survey results and analytics. Proprietary tools, code, and designs. Contracts, financial data, and internal communications.",
            },
            {
              heading: "Obligations",
              text: "Confidential information must only be used for authorized purposes. No disclosure to third parties without written approval. All documents/files must be stored securely.",
            },
            {
              heading: "Non-Disclosure Agreement (NDA)",
              text: "All employees and vendors must sign NDAs before accessing sensitive information.",
            },
            {
              heading: "Duration",
              text: "Confidentiality obligations extend beyond employment/contract termination.",
            },
          ],
        },
      ],
    },
    "media-communication": {
      title: "Media & Communication Standards",
      description:
        "Policies governing public communications, media interactions, and brand representation.",
      items: [
        {
          title: "Social Media Policy",
          sections: [
            {
              heading: "Purpose",
              text: "To ensure professional, consistent, and compliant use of social media by Invent-Tree staff, interns, volunteers, and partners.",
            },
            {
              heading: "Official Accounts",
              text: "Only authorized staff may post on official company accounts. All posts must align with the company's brand values and legal compliance.",
            },
            {
              heading: "Employee/Volunteer Use",
              text: 'Employees may mention Invent-Tree in personal posts but must include disclaimers (e.g., "views are my own"). Sharing confidential client or campaign data on personal accounts is strictly prohibited.',
            },
            {
              heading: "Prohibited Content",
              text: "Hate speech, offensive remarks, or politically partisan posts on official handles. False or misleading claims. Unauthorized leaks of survey, campaign, or strategy data.",
            },
            {
              heading: "Crisis Management",
              text: "In case of online controversy, only authorized spokespersons may respond. Employees must not engage in public arguments.",
            },
          ],
        },
        {
          title: "Media Interaction & Public Statement Policy",
          sections: [
            {
              heading: "Objective",
              text: "To regulate interactions with media and ensure consistent, accurate communication.",
            },
            {
              heading: "Authorized Spokespersons",
              text: "Only designated representatives (approved by management) may give interviews, statements, or press releases. Other employees/volunteers must direct media inquiries to the PR/Communications team.",
            },
            {
              heading: "Guidelines for Communication",
              text: 'All media responses must be factual, professional, and non-partisan unless otherwise contracted. Sensitive matters must be cleared with legal/compliance before being shared. "No comment" is acceptable when appropriate.',
            },
            {
              heading: "Confidentiality",
              text: "Under no circumstances should internal documents, polling data, or strategy discussions be disclosed to media without written approval.",
            },
          ],
        },
        {
          title: "Content & Branding Policy",
          sections: [
            {
              heading: "Purpose",
              text: "To ensure consistent branding and content across all platforms, services, and campaigns handled by Invent-Tree.",
            },
            {
              heading: "Brand Guidelines",
              text: "Use official logos, colors, and taglines only in approved formats. All marketing and campaign material must follow Invent-Tree's brand style guide.",
            },
            {
              heading: "Content Standards",
              text: "All content must be accurate, non-defamatory, and respectful. Political messaging must comply with Election Commission guidelines. Plagiarism is prohibited; original or licensed content must be used.",
            },
            {
              heading: "Approval Process",
              text: "Campaign content must be approved by the communications lead before publication. Sensitive political or event content requires legal and compliance review.",
            },
            {
              heading: "Consistency Across Platforms",
              text: "Messaging, tone, and visuals must remain consistent across websites, apps, social media, events, and printed materials.",
            },
          ],
        },
      ],
    },
    "survey-research": {
      title: "Survey & Research Integrity",
      description:
        "Policies ensuring ethical research practices, accurate data collection, and transparent reporting.",
      items: [
        {
          title: "Polling & Survey Ethics Policy",
          sections: [
            {
              heading: "Objective",
              text: "To ensure that all surveys, polls, and research conducted by Invent-Tree are accurate, impartial, and ethical.",
            },
            {
              heading: "Ethical Standards",
              text: "Surveys must be designed and conducted without manipulation or bias. Sample groups must represent the target population fairly. Results will not be fabricated, distorted, or selectively reported.",
            },
            {
              heading: "Transparency",
              text: "Methodologies, sample sizes, and margins of error will be disclosed where appropriate. Sponsorships or affiliations influencing research will be declared.",
            },
            {
              heading: "Prohibited Practices",
              text: "Push polling or misleading questions designed to manipulate respondents. Suppression or alteration of unfavorable results.",
            },
            {
              heading: "Oversight",
              text: "All surveys will be reviewed by the Research & Compliance team before release.",
            },
          ],
        },
        {
          title: "Consent & Anonymity Policy",
          sections: [
            {
              heading: "Informed Consent",
              text: "Respondents must be informed about the purpose, use, and storage of their data before participation. Participation is voluntary, and consent must be explicitly obtained (written, digital, or verbal recorded).",
            },
            {
              heading: "Anonymity",
              text: "Individual responses will remain confidential unless explicit consent is given for attribution. Survey data will be aggregated to prevent identification of individuals.",
            },
            {
              heading: "Right to Withdraw",
              text: "Respondents may withdraw participation at any stage without penalty.",
            },
            {
              heading: "Sensitive Data",
              text: "Collection of sensitive political, religious, or personal information will require heightened safeguards under the DPDP Act.",
            },
          ],
        },
        {
          title: "Data Reporting & Analysis Integrity Policy",
          sections: [
            {
              heading: "Accuracy",
              text: "Data analysis must follow industry-standard statistical methods. Errors discovered post-publication must be corrected promptly and transparently.",
            },
            {
              heading: "Objectivity",
              text: "Reports must present findings factually, without distortion to favor a particular client or agenda. Subjective interpretations must be clearly distinguished from data-driven insights.",
            },
            {
              heading: "Publication",
              text: "Reports intended for public release must be reviewed and approved by the Research Director and Compliance Officer. Confidential client-specific reports will not be shared externally without authorization.",
            },
            {
              heading: "Data Security",
              text: "All raw data and analytics must be stored securely and only accessible to authorized personnel.",
            },
          ],
        },
      ],
    },
    specialized: {
      title: "Specialized Political Services",
      description:
        "Policies governing our specialized political consulting, campaign services, and public engagement activities.",
      items: [
        {
          title: "Campaign Compliance Policy",
          sections: [
            {
              heading: "Objective",
              text: "To ensure all campaign-related activities managed by Invent-Tree comply with Indian electoral laws and ethical standards.",
            },
            {
              heading: "Legal Compliance",
              text: "Adherence to the Representation of People Act, 1951. Compliance with Election Commission of India (ECI) guidelines, including Model Code of Conduct. Transparency in campaign financing, advertising, and expenditure reporting.",
            },
            {
              heading: "Prohibited Activities",
              text: "Use of government resources for campaign purposes. Promotion of hate speech, communal targeting, or unlawful propaganda. Acceptance of foreign funding without FCRA approval.",
            },
            {
              heading: "Documentation",
              text: "All campaign strategies, finances, and outreach activities must be documented for audit and regulatory purposes.",
            },
          ],
        },
        {
          title: "War Room Monitoring Policy",
          sections: [
            {
              heading: "Purpose",
              text: "To define the rules and processes for Invent-Tree's War Room operations during campaigns.",
            },
            {
              heading: "Operations",
              text: "Centralized command center for real-time monitoring of events, media, and voter sentiment. Daily situation reports (SitReps) shared with campaign leadership. Escalation of urgent issues to the Crisis Response Team.",
            },
            {
              heading: "Monitoring Areas",
              text: "Media tracking: news, social media, and online discussions. Opposition monitoring: fact-checking and rapid counter-strategies. Election-day tracking: turnout, booth operations, and volunteer coordination.",
            },
            {
              heading: "Confidentiality",
              text: "War room data and discussions are highly confidential and must not be shared externally.",
            },
          ],
        },
        {
          title: "Micro-Targeting & Booth Strategy Policy",
          sections: [
            {
              heading: "Objective",
              text: "To guide ethical voter engagement through data-driven micro-targeting and booth-level strategy.",
            },
            {
              heading: "Voter Segmentation",
              text: "Segmentation based on lawful demographic, behavioral, and polling data. Strict prohibition of using illegally obtained personal data.",
            },
            {
              heading: "Messaging",
              text: "Messages tailored to voter groups must remain truthful and respectful. No disinformation, fake news, or hate-oriented content permitted.",
            },
            {
              heading: "Booth Strategy",
              text: "Volunteers must be trained in lawful booth management. Transportation, voter reminders, and turnout efforts must comply with ECI guidelines.",
            },
            {
              heading: "Data Handling",
              text: "Booth-level data must be securely stored and anonymized where required.",
            },
          ],
        },
        {
          title: "Public Outreach & Community Engagement Policy",
          sections: [
            {
              heading: "Objective",
              text: "To ensure that outreach activities strengthen voter trust and comply with laws.",
            },
            {
              heading: "Outreach Activities",
              text: "Town halls, rallies, and fundraising events. Door-to-door canvassing and phone banking. Voter education initiatives about election processes.",
            },
            {
              heading: "Ethical Guidelines",
              text: "Outreach must avoid discriminatory or divisive messaging. No voter intimidation or inducements (cash, gifts, liquor, etc.). Respect for local communities, traditions, and sensitivities.",
            },
            {
              heading: "Volunteer Conduct",
              text: "Volunteers must carry proper ID when representing campaigns. All interactions should be polite, factual, and non-aggressive.",
            },
          ],
        },
      ],
    },
    "health-safety": {
      title: "Health & Safety Commitment",
      description:
        "Policies ensuring the well-being and safety of our team members, clients, and communities.",
      items: [
        {
          title: "Workplace Health & Safety Policy",
          sections: [
            {
              heading: "Objective",
              text: "To provide a safe and healthy workplace for all employees, interns, and volunteers of Invent-Tree.",
            },
            {
              heading: "Responsibilities",
              text: "Management: Ensure compliance with workplace safety laws and maintain safe facilities. Employees: Follow safety protocols, report hazards, and use equipment responsibly.",
            },
            {
              heading: "Safety Measures",
              text: "Fire safety equipment must be installed and regularly tested. First aid kits available at all offices and event sites. Regular workplace inspections to identify and mitigate hazards.",
            },
            {
              heading: "Training",
              text: "Employees and volunteers will receive safety training relevant to their roles (e.g., event safety, tech/data handling).",
            },
            {
              heading: "Reporting",
              text: "Accidents, injuries, or unsafe conditions must be reported immediately to HR or the designated Safety Officer.",
            },
          ],
        },
        {
          title: "Travel & Security Policy",
          sections: [
            {
              heading: "Purpose",
              text: "To ensure the safety and security of employees, volunteers, and partners while traveling for work or events.",
            },
            {
              heading: "Travel Guidelines",
              text: "Travel must be booked through approved vendors where possible. Accommodation must meet safety standards. Employees must share travel itineraries with their reporting manager.",
            },
            {
              heading: "Security Protocols",
              text: "High-risk travel (political events, VIP rallies, sensitive areas) requires advance security planning. Identity cards must be carried at all times during official travel. Emergency contacts and support must be available 24/7 for field staff.",
            },
            {
              heading: "Expenses",
              text: "Reimbursements will be processed under the Expense Reimbursement Policy.",
            },
          ],
        },
        {
          title: "Mental Health & Wellness Policy",
          sections: [
            {
              heading: "Objective",
              text: "To support the mental well-being of employees and volunteers working under high-pressure conditions such as campaigns, deadlines, and events.",
            },
            {
              heading: "Commitment",
              text: "Encourage work-life balance and reasonable working hours. Provide access to counseling support (internal or external). Foster an open, stigma-free environment for discussing mental health.",
            },
            {
              heading: "Preventive Measures",
              text: "Managers must monitor workload distribution to prevent burnout. Regular breaks and rest periods encouraged during long campaigns or events.",
            },
            {
              heading: "Confidentiality",
              text: "All mental health discussions will be treated as confidential.",
            },
            {
              heading: "Support Channels",
              text: "Employees may reach out to HR or designated wellness officers for assistance.",
            },
          ],
        },
      ],
    },
    "hr-policies": {
      title: "Human Resources & People Management",
      description:
        "Policies governing recruitment, employee relations, volunteer management, and workplace practices.",
      items: [
        {
          title: "Recruitment & Equal Opportunity Policy",
          sections: [
            {
              heading: "Objective",
              text: "Invent-Tree is committed to fair, transparent, and merit-based recruitment practices.",
            },
            {
              heading: "Equal Opportunity",
              text: "We provide equal employment opportunities regardless of caste, religion, gender, age, disability, or political affiliation.",
            },
            {
              heading: "Recruitment Process",
              text: "Open positions will be advertised publicly. Candidates will be evaluated based on skills, qualifications, and cultural fit. Background verification may be conducted for sensitive roles.",
            },
            {
              heading: "Anti-Discrimination",
              text: "Bias, favoritism, or discrimination in hiring is strictly prohibited.",
            },
            {
              heading: "Confidentiality",
              text: "All applicant information will be treated as confidential.",
            },
          ],
        },
        {
          title: "Volunteer Management Policy",
          sections: [
            {
              heading: "Role of Volunteers",
              text: "Volunteers play a vital role in surveys, events, campaigns, and outreach programs.",
            },
            {
              heading: "Recruitment",
              text: "Volunteers will be recruited through campaigns, outreach, or referrals. A screening process will be applied where necessary.",
            },
            {
              heading: "Training",
              text: "All volunteers will receive orientation on company values, safety, and specific tasks.",
            },
            {
              heading: "Conduct",
              text: "Volunteers must maintain confidentiality of client/campaign information. Misconduct, hate speech, or violence will result in termination of volunteer engagement.",
            },
            {
              heading: "Recognition",
              text: "Outstanding volunteers may be recognized through certificates, recommendations, or stipends where applicable.",
            },
          ],
        },
        {
          title: "Employee Conduct & Leave Policy",
          sections: [
            {
              heading: "Code of Conduct",
              text: "Employees must: Act with professionalism and integrity. Respect colleagues and clients. Avoid conflicts of interest. Abide by confidentiality and security policies.",
            },
            {
              heading: "Working Hours",
              text: "Standard office hours: 9:00 AM - 6:00 PM (flexible for campaign/event schedules). Remote work permitted for designated roles, with prior approval.",
            },
            {
              heading: "Leave Types",
              text: "Casual Leave (CL): 12 days annually. Sick Leave (SL): 10 days annually. Earned Leave (EL): As per statutory requirements. Maternity/Paternity Leave: As per Indian labor laws.",
            },
            {
              heading: "Leave Procedure",
              text: "Employees must apply via the HR system or email at least 3 days in advance (except emergencies).",
            },
            {
              heading: "Disciplinary Action",
              text: "Misconduct, insubordination, or policy violations may lead to warnings, suspension, or termination.",
            },
          ],
        },
        {
          title: "Internship Policy",
          sections: [
            {
              heading: "Objective",
              text: "To provide structured learning opportunities for students and young professionals while contributing to Invent-Tree's projects.",
            },
            {
              heading: "Duration & Engagement",
              text: "Internship periods: 1–6 months. Interns may work on research, tech, events, and communication projects.",
            },
            {
              heading: "Stipend & Benefits",
              text: "Interns may receive stipends as per company discretion and scheme eligibility (UP Startup Policy, NAPS, AICTE, etc.). Certificates will be issued on successful completion.",
            },
            {
              heading: "Supervision",
              text: "Interns will be assigned mentors and provided feedback on performance.",
            },
            {
              heading: "Confidentiality & Conduct",
              text: "Interns must sign NDAs and adhere to company's Code of Conduct.",
            },
            {
              heading: "Conversion to Employment",
              text: "Outstanding interns may be offered permanent roles.",
            },
          ],
        },
      ],
    },
    finance: {
      title: "Financial Management & Compliance",
      description:
        "Policies governing financial operations, accounting standards, expense management, and fundraising compliance.",
      items: [
        {
          title: "Financial Management & Accounting Policy",
          sections: [
            {
              heading: "Objective",
              text: "To ensure accurate, transparent, and accountable financial practices at Invent-Tree.",
            },
            {
              heading: "Accounting Standards",
              text: "All accounts will be maintained in compliance with Indian Accounting Standards and Companies Act requirements. Books of accounts will be updated regularly and subject to internal/external audits.",
            },
            {
              heading: "Financial Controls",
              text: "Dual authorization for major expenses. Segregation of duties between approval, payment, and accounting functions. Regular reconciliation of bank accounts.",
            },
            {
              heading: "Budgeting",
              text: "Annual budgets will be prepared and reviewed by management. Any unplanned expenditure above ₹50,000 requires management approval.",
            },
            {
              heading: "Record Retention",
              text: "Financial records will be retained for at least 8 years or as required by law.",
            },
          ],
        },
        {
          title: "Expense Reimbursement Policy",
          sections: [
            {
              heading: "Eligibility",
              text: "Employees, contractors, interns, and volunteers may claim reimbursement for approved business expenses (travel, accommodation, food, event logistics).",
            },
            {
              heading: "Conditions",
              text: "Expenses must be work-related and approved by the reporting manager. Claims must be supported by original receipts/invoices. Claims must be submitted within 30 days of the expense.",
            },
            {
              heading: "Non-Reimbursable Expenses",
              text: "Personal purchases, entertainment, or leisure costs. Alcoholic beverages (unless specifically approved for client events). Fines, penalties, or illegal payments.",
            },
            {
              heading: "Payment",
              text: "Approved reimbursements will be processed within 15 working days via bank transfer.",
            },
          ],
        },
        {
          title: "Fundraising & Donation Compliance Policy",
          sections: [
            {
              heading: "Objective",
              text: "To ensure all fundraising activities and donations comply with applicable laws and regulations.",
            },
            {
              heading: "Legal Compliance",
              text: "All fundraising activities must comply with the Foreign Contribution (Regulation) Act (FCRA) 2010, Income Tax Act provisions, and other applicable regulations.",
            },
            {
              heading: "Documentation",
              text: "Proper records must be maintained for all donations received, including donor details, amounts, and purposes. All donations must be properly acknowledged and receipted.",
            },
            {
              heading: "Reporting",
              text: "Regular reports on fundraising activities and fund utilization must be prepared for management and regulatory authorities as required.",
            },
            {
              heading: "Transparency",
              text: "Financial statements and fundraising reports will be made available for audit and regulatory review.",
            },
          ],
        },
      ],
    },
  };

  return (
    <main className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-12">
      <header className="mb-8 mt-12 sm:mb-12 text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
          Policies & Legal Transparency
        </h1>
        <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 max-w-4xl mx-auto leading-relaxed px-4">
          At Invent-Tree, transparency and accountability form the cornerstone
          of our operations. Our comprehensive policy framework ensures ethical
          practices, legal compliance, and unwavering commitment to client trust
          across all aspects of our political consulting and research services.
        </p>
      </header>

      <div className="mb-6 sm:mb-8">
        <div className="relative">
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-neutral-800 shadow-lg rounded-full p-2 hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors border border-neutral-200 dark:border-neutral-700"
            aria-label="Scroll left"
          >
            <ChevronLeft
              size={20}
              className="text-neutral-600 dark:text-neutral-400"
            />
          </button>

          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-neutral-800 shadow-lg rounded-full p-2 hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors border border-neutral-200 dark:border-neutral-700"
            aria-label="Scroll right"
          >
            <ChevronRight
              size={20}
              className="text-neutral-600 dark:text-neutral-400"
            />
          </button>

          <div className="border-b border-neutral-200 dark:border-neutral-700">
            <nav
              ref={scrollContainerRef}
              className="flex space-x-4 sm:space-x-8 overflow-x-auto scrollbar-hide px-8 sm:px-12"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => handleTabChange(tab.id)}
                    className={`flex items-center space-x-1 sm:space-x-2 py-3 sm:py-4 px-1 border-b-2 font-medium text-xs sm:text-sm transition-colors whitespace-nowrap ${
                      activeTab === tab.id
                        ? "border-[#BDD5E9] text-[#BDD5E9] dark:text-[#BDD5E9] dark:border-[#BDD5E9]"
                        : "border-transparent text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300 hover:border-neutral-300 dark:hover:border-neutral-600"
                    }`}
                  >
                    <Icon size={16} className="sm:w-[18px] sm:h-[18px]" />
                    <span className="hidden xs:inline">{tab.label}</span>
                    <span className="xs:hidden">{tab.label.split(" ")[0]}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-neutral-900 rounded-lg shadow-sm border border-neutral-200 dark:border-neutral-700">
        {Object.entries(policies).map(([tabId, tabContent]) => (
          <div
            key={tabId}
            className={`${activeTab === tabId ? "block" : "hidden"}`}
          >
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-80 border-b lg:border-b-0 lg:border-r border-neutral-200 dark:border-neutral-700 p-4 sm:p-6 bg-neutral-50 dark:bg-neutral-800">
                <div className="mb-4 sm:mb-6">
                  <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
                    {tabContent.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
                    {tabContent.description}
                  </p>
                </div>

                <nav className="space-y-2">
                  {tabContent.items.map((policy, index) => (
                    <button
                      key={index}
                      onClick={() => setActivePolicy(index)}
                      className={`w-full text-left px-3 sm:px-4 py-2 sm:py-3 rounded-lg transition-all text-xs sm:text-sm ${
                        activePolicy === index
                          ? "bg-[#BDD5E9] dark:bg-[#BDD5E9] text-neutral-900 dark:text-neutral-900 shadow-md"
                          : "bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 border border-neutral-200 dark:border-neutral-600"
                      }`}
                    >
                      <div className="font-medium leading-tight">
                        {policy.title}
                      </div>
                    </button>
                  ))}
                </nav>
              </div>

              <div className="flex-1 p-4 sm:p-6 lg:p-8">
                <div className="max-w-4xl">
                  {tabContent.items[activePolicy] && (
                    <>
                      <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-4 sm:mb-6">
                        {tabContent.items[activePolicy].title}
                      </h3>
                      <div className="space-y-4 sm:space-y-6">
                        {tabContent.items[activePolicy].sections ? (
                          tabContent.items[activePolicy].sections.map(
                            (section, idx) => (
                              <div
                                key={idx}
                                className="border-l-4 border-[#BDD5E9] dark:border-[#BDD5E9] pl-4 sm:pl-6 py-2"
                              >
                                <h4 className="text-base sm:text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                                  {section.heading}
                                </h4>
                                <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
                                  {section.text}
                                </p>
                              </div>
                            )
                          )
                        ) : (
                          <div className="prose prose-sm sm:prose-lg max-w-none prose-neutral dark:prose-invert">
                            <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed text-justify">
                              {tabContent.items[activePolicy].content}
                            </p>
                          </div>
                        )}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <footer className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-neutral-200 dark:border-neutral-700 text-center">
        <div className="bg-neutral-50 dark:bg-neutral-800 rounded-lg p-4 sm:p-6">
          <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 mb-4">
            These policies reflect Invent-Tree's unwavering commitment to
            ethics, responsibility, and accountability in all aspects of our
            operations. We regularly review and update our policies to ensure
            they meet the highest professional standards and regulatory
            requirements.
          </p>
          <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
            For complete policy documents, legal clarifications, or specific
            questions about our governance framework, please contact our legal
            team at{" "}
            <a
              href="mailto:legal@invent-tree.com"
              className="text-[#BDD5E9] dark:text-[#BDD5E9] hover:underline font-medium"
            >
              legal@invent-tree.com
            </a>{" "}
            or our compliance officer at{" "}
            <a
              href="mailto:compliance@invent-tree.com"
              className="text-[#BDD5E9] dark:text-[#BDD5E9] hover:underline font-medium"
            >
              compliance@invent-tree.com
            </a>
          </p>
        </div>
      </footer>
    </main>
  );
}
