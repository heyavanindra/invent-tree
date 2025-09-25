"use client"

import { useState, useRef } from 'react';
import { Shield, Users, FileText, Lock, Globe, BarChart3, Heart, AlertCircle, ChevronLeft, ChevronRight } from 'lucide-react';

export default function PoliciesComponent() {
  const [activeTab, setActiveTab] = useState('core-legal');
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  const tabs = [
    { id: 'core-legal', label: 'Core Legal', icon: FileText },
    { id: 'governance', label: 'Governance', icon: Shield },
    { id: 'client-service', label: 'Client & Service', icon: Users },
    { id: 'data-protection', label: 'Data Protection', icon: Lock },
    { id: 'media-communication', label: 'Media & Communication', icon: Globe },
    { id: 'survey-research', label: 'Survey & Research', icon: BarChart3 },
    { id: 'specialized', label: 'Specialized Services', icon: AlertCircle },
    { id: 'health-safety', label: 'Health & Safety', icon: Heart }
  ];

  const policies = {
    'core-legal': {
      title: 'Core Legal Documentation',
      description: 'Essential legal frameworks that govern our service delivery and client relationships.',
      items: [
        {
          title: 'Terms & Conditions',
          content: 'Our comprehensive Terms & Conditions establish the legal foundation for all client engagements. These terms outline the scope of services, payment obligations, intellectual property rights, liability limitations, and dispute resolution mechanisms. We ensure clarity in service delivery expectations, project timelines, and deliverable specifications. All contracts include force majeure provisions, termination clauses, and amendment procedures. These terms are regularly updated to reflect current legal standards and industry best practices, providing both parties with clear guidelines for successful collaboration.'
        },
        {
          title: 'Privacy Policy',
          content: 'Our Privacy Policy demonstrates our unwavering commitment to protecting personal information collected through our services, website, and client interactions. We detail what information we collect, how it\'s used, stored, and protected. The policy covers data retention periods, third-party sharing limitations, user rights regarding their data, and procedures for data access or deletion requests. We comply with international privacy laws including GDPR, CCPA, and local data protection regulations, ensuring transparency in all data processing activities.'
        },
        {
          title: 'Terms of Use',
          content: 'Our Terms of Use govern the access and use of Invent-Tree\'s digital platforms, including our website, client portals, and digital tools. These terms establish user responsibilities, acceptable use guidelines, intellectual property protections, and access restrictions. We outline prohibited activities, content standards, and consequences for policy violations. The terms also cover account security requirements, service availability, and our rights to modify or discontinue services. Regular compliance monitoring ensures adherence to these standards.'
        },
        {
          title: 'Refund & Cancellation Policy',
          content: 'Our transparent Refund & Cancellation Policy protects both client investments and our operational integrity. We provide clear guidelines for service cancellations, refund eligibility criteria, and processing timelines. The policy distinguishes between different service types, project phases, and cancellation circumstances. We offer flexible solutions including partial refunds, service credits, and rescheduling options where appropriate. All refund decisions consider work completed, resources allocated, and contractual obligations, ensuring fair outcomes for all parties involved.'
        }
      ]
    },
    'governance': {
      title: 'Governance & Ethics Framework',
      description: 'Our commitment to ethical operations, transparency, and accountability in all business practices.',
      items: [
        {
          title: 'Code of Conduct & Ethics Policy',
          content: 'Our comprehensive Code of Conduct establishes the ethical foundation for all Invent-Tree operations. This policy outlines expected behaviors, professional standards, and moral obligations for all team members and stakeholders. We address conflicts of interest, fair dealing practices, respect for diversity and inclusion, and commitment to honest communication. The code includes reporting mechanisms for ethical concerns, protection for whistleblowers, and clear consequences for violations. Regular training and assessment ensure consistent application across all levels of our organization.'
        },
        {
          title: 'Anti-Bribery & Anti-Corruption Policy',
          content: 'Invent-Tree maintains zero tolerance for bribery and corruption in all forms. Our policy provides clear definitions of prohibited activities, including facilitation payments, kickbacks, and conflicts of interest. We establish robust due diligence procedures for clients, vendors, and partners. The policy includes gift and entertainment guidelines, political contribution restrictions, and third-party risk assessments. Comprehensive training programs ensure all team members understand their responsibilities, and regular audits monitor compliance with anti-corruption laws across all jurisdictions where we operate.'
        },
        {
          title: 'Legal & Regulatory Compliance Policy',
          content: 'Our Legal & Regulatory Compliance Policy ensures adherence to all applicable laws, regulations, and industry standards. This comprehensive framework covers election laws, campaign finance regulations, data protection requirements, and professional polling standards. We maintain current knowledge of regulatory changes, conduct regular compliance assessments, and implement necessary policy updates. The policy establishes clear accountability structures, reporting mechanisms, and corrective action procedures. Our legal compliance team monitors regulatory developments and provides ongoing guidance to ensure all activities meet the highest legal standards.'
        },
        {
          title: 'Whistleblower Policy',
          content: 'Our Whistleblower Policy creates a safe environment for reporting unethical behavior, legal violations, or policy breaches. We guarantee protection against retaliation for good-faith reports and provide multiple confidential reporting channels. The policy outlines investigation procedures, response timelines, and resolution processes. We ensure thorough, impartial investigations while maintaining confidentiality and protecting reporter identities. This policy demonstrates our commitment to accountability and continuous improvement in ethical practices, encouraging a culture of transparency and responsibility throughout our organization.'
        }
      ]
    },
    'client-service': {
      title: 'Client & Service Delivery Excellence',
      description: 'Policies ensuring exceptional service delivery, professional partnerships, and quality project management.',
      items: [
        {
          title: 'Client Engagement Policy',
          content: 'Our Client Engagement Policy establishes the framework for professional, effective, and mutually beneficial client relationships. This policy outlines our commitment to understanding client needs, providing transparent communication, and delivering exceptional service quality. We detail our engagement process from initial consultation through project completion, including regular progress updates, stakeholder meetings, and feedback incorporation. The policy ensures consistent service standards, clear expectations management, and professional conduct throughout all client interactions, fostering long-term partnerships built on trust and results.'
        },
        {
          title: 'Event Safety & Risk Management Policy',
          content: 'Our comprehensive Event Safety & Risk Management Policy ensures the security and well-being of all participants in our events, surveys, and field operations. This policy covers risk assessment procedures, safety protocols, emergency response plans, and insurance requirements. We address venue safety standards, crowd management, weather contingencies, and health considerations. The policy includes staff training requirements, equipment safety checks, and incident reporting procedures. Regular safety audits and continuous improvement processes ensure our events maintain the highest safety standards while delivering effective political engagement and research activities.'
        },
        {
          title: 'Vendor & Partner Policy',
          content: 'Our Vendor & Partner Policy establishes rigorous standards for selecting, managing, and maintaining relationships with external suppliers and strategic partners. This policy outlines due diligence procedures, performance evaluation criteria, and ongoing monitoring requirements. We ensure all partners meet our ethical standards, quality expectations, and compliance requirements. The policy covers contract management, payment terms, confidentiality obligations, and termination procedures. Regular partner assessments and feedback mechanisms maintain high-quality relationships that enhance our service delivery capabilities while protecting client interests.'
        },
        {
          title: 'Quality Assurance & Project Delivery Policy',
          content: 'Our Quality Assurance & Project Delivery Policy guarantees consistent, high-quality outcomes across all client engagements. This comprehensive framework includes project planning methodologies, milestone tracking, quality checkpoints, and performance metrics. We detail our quality control processes, testing procedures, and validation mechanisms for all deliverables. The policy establishes clear accountability structures, review processes, and continuous improvement protocols. Regular quality audits, client feedback integration, and team performance assessments ensure we consistently exceed expectations while maintaining our reputation for excellence in political consulting and research services.'
        }
      ]
    },
    'data-protection': {
      title: 'Data Protection & Security Framework',
      description: 'Comprehensive policies protecting sensitive information and ensuring robust cybersecurity measures.',
      items: [
        {
          title: 'Data Privacy & Protection Policy',
          content: 'Our Data Privacy & Protection Policy establishes comprehensive safeguards for all personal and sensitive information under our stewardship. This policy outlines data collection principles, processing limitations, storage requirements, and retention schedules. We detail individual rights including access, correction, deletion, and portability requests. The policy addresses international data transfers, third-party sharing restrictions, and consent management procedures. Regular privacy impact assessments, staff training programs, and compliance audits ensure adherence to global privacy regulations while maintaining the trust clients and respondents place in our data handling practices.'
        },
        {
          title: 'Information Security Policy',
          content: 'Our Information Security Policy provides a robust framework for protecting all organizational and client information assets. This comprehensive policy covers access controls, authentication requirements, network security, and physical security measures. We detail classification systems for sensitive information, secure communication protocols, and device management standards. The policy includes regular security assessments, vulnerability management, and incident response procedures. Continuous monitoring, staff training, and technology updates ensure our information security measures evolve with emerging threats while maintaining the confidentiality, integrity, and availability of critical data.'
        },
        {
          title: 'Cybersecurity & Incident Response Policy',
          content: 'Our Cybersecurity & Incident Response Policy establishes proactive defense mechanisms and rapid response capabilities for cyber threats. This policy outlines threat detection systems, prevention strategies, and response protocols for various incident types. We detail notification procedures, containment strategies, evidence preservation, and recovery processes. The policy includes regular security drills, staff training programs, and system updates to maintain strong cyber defenses. Our incident response team follows established protocols to minimize impact, preserve evidence, and restore operations quickly while maintaining transparency with affected clients and regulatory authorities.'
        },
        {
          title: 'Confidentiality & NDA Policy',
          content: 'Our Confidentiality & NDA Policy ensures the absolute protection of sensitive client information, strategic plans, and proprietary methodologies. This policy establishes classification levels for confidential information, access controls, and handling procedures. We detail Non-Disclosure Agreement requirements for all personnel, contractors, and partners with access to sensitive information. The policy covers information sharing restrictions, secure communication protocols, and confidentiality breach response procedures. Regular training and awareness programs ensure all team members understand their confidentiality obligations and the critical importance of protecting client trust through absolute discretion.'
        }
      ]
    },
    'media-communication': {
      title: 'Media & Communication Standards',
      description: 'Policies governing public communications, media interactions, and brand representation.',
      items: [
        {
          title: 'Social Media Policy',
          content: 'Our Social Media Policy establishes professional standards for all digital communications and online presence. This policy covers official organizational accounts, employee personal accounts, and client-related communications across all social media platforms. We outline content guidelines, approval processes, crisis communication protocols, and privacy protection measures. The policy addresses professional conduct, brand representation, political neutrality, and confidentiality maintenance in digital spaces. Regular training ensures all team members understand appropriate social media use while protecting both organizational reputation and client interests in the dynamic digital landscape.'
        },
        {
          title: 'Media Interaction & Public Statement Policy',
          content: 'Our Media Interaction & Public Statement Policy ensures accurate, professional, and consistent communication with media outlets and public forums. This policy designates authorized spokespersons, establishes approval processes for public statements, and outlines message consistency requirements. We detail interview preparation procedures, fact-checking protocols, and crisis communication strategies. The policy ensures all public communications maintain political neutrality, protect client confidentiality, and accurately represent our research findings. Media training and regular communication reviews maintain high standards for public representation while building trust in our expertise and integrity.'
        },
        {
          title: 'Content & Branding Policy',
          content: 'Our Content & Branding Policy maintains consistent, professional representation across all communication channels and materials. This policy establishes brand guidelines, messaging standards, visual identity requirements, and content approval processes. We detail quality standards for publications, presentations, websites, and marketing materials. The policy ensures all content reflects our professional values, maintains political neutrality, and accurately represents our capabilities. Regular brand audits and content reviews ensure consistent quality and messaging while protecting our reputation and building recognition as a trusted authority in political research and consulting services.'
        }
      ]
    },
    'survey-research': {
      title: 'Survey & Research Integrity',
      description: 'Policies ensuring ethical research practices, accurate data collection, and transparent reporting.',
      items: [
        {
          title: 'Polling & Survey Ethics Policy',
          content: 'Our Polling & Survey Ethics Policy establishes the highest standards for research integrity and methodological rigor. This comprehensive policy outlines scientific sampling methods, question design principles, and bias prevention strategies. We detail respondent rights, voluntary participation requirements, and fair representation protocols. The policy ensures transparent methodology disclosure, appropriate statistical analysis, and accurate result interpretation. Regular training on research ethics, methodology reviews, and quality assessments maintain our reputation for producing reliable, unbiased research that serves democratic processes and informed decision-making while respecting all participants.'
        },
        {
          title: 'Consent & Anonymity Policy',
          content: 'Our Consent & Anonymity Policy guarantees voluntary participation and complete privacy protection for all research respondents. This policy establishes informed consent procedures, anonymity safeguards, and data de-identification protocols. We detail participant rights including withdrawal options, data access requests, and privacy protections. The policy covers secure data collection methods, identity protection measures, and confidentiality maintenance throughout the research process. Rigorous consent documentation and anonymity verification ensure all participants understand their rights while enabling valuable research that contributes to democratic discourse and policy development.'
        },
        {
          title: 'Data Reporting & Analysis Integrity Policy',
          content: 'Our Data Reporting & Analysis Integrity Policy ensures accurate, unbiased presentation of all research findings and analytical insights. This policy establishes standards for statistical analysis, result verification, and transparent reporting. We detail methodology disclosure requirements, margin of error communication, and limitation acknowledgment protocols. The policy prevents data manipulation, selective reporting, and misleading interpretations while ensuring complete accuracy in all published findings. Independent verification processes, peer review mechanisms, and transparency standards maintain the credibility and reliability of our research outputs, supporting informed decision-making across the political spectrum.'
        }
      ]
    },
    'specialized': {
      title: 'Specialized Political Services',
      description: 'Policies governing our specialized political consulting, campaign services, and public engagement activities.',
      items: [
        {
          title: 'Campaign Compliance Policy',
          content: 'Our Campaign Compliance Policy ensures strict adherence to all election laws, campaign finance regulations, and political activity requirements. This comprehensive policy covers contribution limits, expenditure reporting, disclosure obligations, and coordination restrictions. We detail compliance monitoring procedures, regulatory filing requirements, and violation prevention strategies. The policy addresses conflict of interest management, client screening processes, and ethical boundary maintenance in political engagements. Regular legal updates, compliance training, and audit procedures ensure all campaign-related activities meet the highest legal and ethical standards while supporting democratic processes and fair elections.'
        },
        {
          title: 'Public Outreach & Community Engagement Policy',
          content: 'Our Public Outreach & Community Engagement Policy establishes frameworks for meaningful, respectful interaction with diverse communities and stakeholders. This policy outlines engagement strategies, cultural sensitivity requirements, and inclusive participation protocols. We detail community partnership approaches, feedback incorporation mechanisms, and long-term relationship building strategies. The policy ensures equitable access to our research and services while respecting community values and priorities. Regular community assessment, partnership evaluation, and engagement effectiveness reviews ensure our outreach efforts genuinely serve public interests and contribute to informed democratic participation across all communities.'
        }
      ]
    },
    'health-safety': {
      title: 'Health & Safety Commitment',
      description: 'Policies ensuring the well-being and safety of our team members, clients, and communities.',
      items: [
        {
          title: 'Workplace Health & Safety Policy',
          content: 'Our Workplace Health & Safety Policy creates a secure, healthy environment for all team members, clients, and visitors. This comprehensive policy covers physical safety protocols, ergonomic standards, emergency procedures, and health protection measures. We detail hazard identification processes, safety training requirements, and incident reporting procedures. The policy addresses both office environments and field operations, ensuring appropriate safety measures for all work situations. Regular safety assessments, employee wellness programs, and continuous improvement initiatives demonstrate our commitment to maintaining the highest safety standards while supporting productive, healthy work environments.'
        },
        {
          title: 'Travel & Security Policy',
          content: 'Our Travel & Security Policy ensures the safety and security of team members during business travel and field operations. This policy establishes pre-travel risk assessments, security protocol requirements, and emergency communication procedures. We detail travel approval processes, insurance requirements, and safety equipment standards. The policy covers domestic and international travel considerations, including political risk assessments and cultural awareness requirements. Regular security briefings, travel updates, and incident response protocols ensure all team members remain safe while conducting essential research and client services across diverse environments and locations.'
        },
        {
          title: 'Mental Health & Wellness Policy',
          content: 'Our Mental Health & Wellness Policy recognizes the importance of psychological well-being for team effectiveness and personal fulfillment. This policy establishes support resources, wellness programs, and mental health awareness initiatives. We detail confidential counseling services, stress management resources, and work-life balance support measures. The policy addresses workplace stress factors, burnout prevention strategies, and stigma reduction efforts. Regular wellness assessments, mental health training, and support program evaluations ensure our team members have access to comprehensive mental health resources while maintaining a supportive, understanding work environment that prioritizes both professional success and personal well-being.'
        }
      ]
    }
  };

  return (
    <main className="max-w-7xl mx-auto p-6 lg:p-12">
      <header className="mb-12 text-center">
        <h1 className="text-4xl dark:text-neutral-400 lg:text-5xl font-bold text-gray-900 mb-4">
          Policies & Legal Transparency
        </h1>
        <p className="text-xl dark:text-neutral-500 text-gray-600 max-w-4xl mx-auto leading-relaxed">
          At Invent-Tree, transparency and accountability form the cornerstone of our operations. 
          Our comprehensive policy framework ensures ethical practices, legal compliance, and 
          unwavering commitment to client trust across all aspects of our political consulting 
          and research services.
        </p>
      </header>

      {/* Tab Navigation */}
      <div className="mb-8">
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors border"
            aria-label="Scroll left"
          >
            <ChevronLeft size={20} className="text-gray-600" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors border"
            aria-label="Scroll right"
          >
            <ChevronRight size={20} className="text-gray-600" />
          </button>

          <div className="border-b border-gray-200">
            <nav 
              ref={scrollContainerRef}
              className="flex space-x-8 overflow-x-auto scrollbar-hide px-12"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors whitespace-nowrap ${
                      activeTab === tab.id
                        ? 'border-blue-600 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <Icon size={18} />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="bg-white dark:bg-neutral-950 rounded-lg shadow-sm border">
        {Object.entries(policies).map(([tabId, tabContent]) => (
          <div
            key={tabId}
            className={`p-8 ${activeTab === tabId ? 'block' : 'hidden'}`}
          >
            <div className="mb-8">
              <h2 className="text-3xl dark:text-neutral-300 font-bold text-gray-900 mb-3">
                {tabContent.title}
              </h2>
              <p className="text-lg text-gray-600">
                {tabContent.description}
              </p>
            </div>

            <div className="space-y-8">
              {tabContent.items.map((policy, index) => (
                <div
                  key={index}
                  className="border-l-4 border-blue-600 pl-6 py-2"
                >
                  <h3 className="text-xl font-semibold dark:text-neutral-300 text-gray-900 mb-3">
                    {policy.title}
                  </h3>
                  <p className="text-gray-700 dark:text-neutral-300 leading-relaxed">
                    {policy.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="mt-12 pt-8 border-t border-gray-200 text-center">
        <div className="bg-gray-50 rounded-lg p-6">
          <p className="text-gray-700 mb-4">
            These policies reflect Invent-Tree's unwavering commitment to ethics, responsibility, 
            and accountability in all aspects of our operations. We regularly review and update 
            our policies to ensure they meet the highest professional standards and regulatory requirements.
          </p>
          <p className="text-sm text-gray-600">
            For complete policy documents, legal clarifications, or specific questions about our 
            governance framework, please contact our legal team at{" "}
            <a href="mailto:legal@invent-tree.com" className="text-blue-600 hover:underline font-medium">
              legal@invent-tree.com
            </a>
            {" "}or our compliance officer at{" "}
            <a href="mailto:compliance@invent-tree.com" className="text-blue-600 hover:underline font-medium">
              compliance@invent-tree.com
            </a>
          </p>
        </div>
      </footer>
    </main>
  );
}