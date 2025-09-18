export default function LegalTransparency() {
  return (
    <main className="max-w-6xl mx-auto p-6 lg:p-12">
      <header className="mb-8">
        <h1 className="text-3xl lg:text-4xl font-semibold leading-tight">Legal &amp; Transparency</h1>
        <p className="mt-3 text-gray-600">
          At Invent-Tree, we believe trust is the foundation of every client relationship. 
          Our commitment to transparency, governance, ethics, compliance, and accountability 
          guides how we operate and deliver political surveys, polling, and consulting services. 
          We adhere to the highest professional standards so that clients, partners, and the public 
          can rely on us for responsible and impartial practices.
        </p>
      </header>

      {/* Two-column layout: TOC + Content */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <nav className="lg:col-span-1 sticky top-6 self-start">
          <div className="bg-white border rounded-lg p-4 shadow-sm">
            <h2 className="text-lg font-medium">On this page</h2>
            <ul className="mt-3 space-y-2 text-sm text-gray-700">
              <li><a href="#ethics" className="hover:underline">Polling &amp; Survey Ethics</a></li>
              <li><a href="#consent" className="hover:underline">Consent &amp; Anonymity</a></li>
              <li><a href="#data-reporting" className="hover:underline">Data Reporting Integrity</a></li>
              <li><a href="#compliance" className="hover:underline">Legal &amp; Regulatory Compliance</a></li>
              <li><a href="#privacy" className="hover:underline">Privacy &amp; Data Protection</a></li>
              <li><a href="#confidentiality" className="hover:underline">Confidentiality &amp; NDA</a></li>
              <li><a href="#media" className="hover:underline">Media &amp; Public Communication</a></li>
              <li><a href="#quality" className="hover:underline">Quality Assurance</a></li>
              <li><a href="#outreach" className="hover:underline">Public Outreach &amp; Responsibility</a></li>
            </ul>
          </div>
        </nav>

        <article className="lg:col-span-3 space-y-8">
          <section id="ethics" className="prose max-w-none">
            <h2>Polling &amp; Survey Ethics</h2>
            <p>
              Invent-Tree upholds strict ethical standards in all surveys and polls. 
              We use scientifically rigorous methodologies, avoid bias in question framing, 
              and ensure that every poll reflects true public sentiment. 
              Integrity and impartiality are central to our process.
            </p>
          </section>

          <section id="consent" className="prose max-w-none">
            <h2>Consent &amp; Anonymity</h2>
            <p>
              Participation in our surveys is always voluntary. 
              We guarantee the anonymity of respondents, safeguarding their privacy 
              and protecting them from any form of misuse. 
              Informed consent is a mandatory part of our polling process.
            </p>
          </section>

          <section id="data-reporting" className="prose max-w-none">
            <h2>Data Reporting Integrity</h2>
            <p>
              Accuracy and honesty are the foundation of our reporting. 
              All findings are presented without manipulation, ensuring 
              stakeholders can make decisions based on authentic public insights.
            </p>
          </section>

          <section id="compliance" className="prose max-w-none">
            <h2>Legal &amp; Regulatory Compliance</h2>
            <p>
              We comply with all applicable laws, election regulations, and data 
              protection standards. Our services adhere to the ethical framework 
              of political polling and consulting, ensuring lawful practices at every stage.
            </p>
          </section>

          <section id="privacy" className="prose max-w-none">
            <h2>Privacy &amp; Data Protection</h2>
            <p>
              Invent-Tree values the confidentiality of data. 
              Personal and survey information is collected only when necessary, 
              stored securely, and never shared without permission. 
              Our systems use encryption and secure storage practices aligned with global standards.
            </p>
          </section>

          <section id="confidentiality" className="prose max-w-none">
            <h2>Confidentiality &amp; NDA</h2>
            <p>
              All client information and project data remain confidential. 
              Non-Disclosure Agreements (NDAs) are signed to formalize this commitment. 
              We ensure sensitive information is handled with the highest level of care.
            </p>
          </section>

          <section id="media" className="prose max-w-none">
            <h2>Media &amp; Public Communication</h2>
            <p>
              Any public release of polling data follows a structured review process. 
              Media interactions are transparent, fact-based, and aligned with ethical 
              polling standards. We do not allow misrepresentation of our data.
            </p>
          </section>

          <section id="quality" className="prose max-w-none">
            <h2>Quality Assurance</h2>
            <p>
              Every poll undergoes thorough quality checks, from sampling to analysis. 
              Our methodologies are constantly refined to meet global best practices, 
              ensuring results remain reliable and credible.
            </p>
          </section>

          <section id="outreach" className="prose max-w-none">
            <h2>Public Outreach &amp; Responsibility</h2>
            <p>
              Invent-Tree operates with social responsibility. 
              We engage with the public transparently, educate communities about polling, 
              and promote democratic participation through accurate information sharing.
            </p>
          </section>

          <footer className="pt-6 border-t">
            <p className="text-sm text-gray-600">
              These policies reflect Invent-Tree's unwavering commitment to ethics, responsibility, 
              and accountability. For the full legal text or to request policy documents, 
              please contact our team at{" "}
              <a href="mailto:legal@invent-tree.com" className="underline">
                legal@invent-tree.com
              </a>.
            </p>
          </footer>
        </article>
      </div>
    </main>
  );
}
