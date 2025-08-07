import React, { useState } from "react";
import { motion } from "framer-motion";

const integrations = [
  {
    title: "GoHighLevel Integration",
    subtitle: "Transform Your CRM Into an AI-Powered Lead Machine",
    sections: [
      {
        heading: "How It Works",
        content:
          "Our native GoHighLevel integration seamlessly connects your AI avatar with your CRM, creating a powerful automation loop that captures, nurtures, and converts leads without manual intervention.",
      },
      {
        heading: "Real-Time Lead Sync",
        content: [
          "Automatically sync all leads captured by your AI avatar directly into GoHighLevel",
          "Update contact information, conversation history, and lead scores in real-time",
          "Trigger specific pipelines based on AI conversation outcomes",
        ],
      },
      {
        heading: "Intelligent Appointment Booking",
        content: [
          "AI avatar books appointments directly into your GoHighLevel calendar",
          "Automatically sends confirmation emails and SMS reminders through GHL",
          "Updates opportunity stages based on appointment status",
          "Get a smart summary of your full call transcript. It highlights customer intent, sentiment, objections, and agent performance. Plus, it recommends next steps—like follow-up or closing—so your team can improve and convert faster.",
        ],
      },
      {
        heading: "Smart Pipeline Management",
        content: [
          "Move leads through custom pipelines based on AI conversation analysis",
          "Assign lead scores and tags automatically based on prospect engagement",
          "Trigger follow-up sequences when leads require human intervention",
        ],
      },
      {
        heading: "Unified Reporting",
        content: [
          "View AI conversation metrics alongside your GHL analytics",
          "Track conversion rates from AI interactions to closed deals",
          "Monitor ROI across your entire automated sales funnel",
        ],
      },
      {
        heading: "Setup Process",
        content: [
          "Connect your GoHighLevel account through our secure OAuth integration",
          "Map your existing pipelines and custom fields",
          "Configure appointment calendars and notification preferences",
          "Your AI avatar starts syncing leads and booking appointments instantly",
        ],
      },
    ],
  },
  {
    title: "Zapier Integration",
    subtitle: "Connect to 5,000+ Apps With Zero Coding",
    sections: [
      {
        heading: "How It Works",
        content:
          "Through Zapier, Ravan.ai becomes the central hub of your business automation, connecting with virtually any software you use to create powerful, multi-step workflows.",
      },
      {
        heading: "Instant Lead Distribution",
        content: [
          "Send qualified leads to your email marketing platform (Mailchimp, ActiveCampaign)",
          "Add prospects to your outreach sequences automatically",
        ],
      },
      {
        heading: "Multi-Channel Notifications",
        content: [
          "Get instant Slack notifications when high-value leads are captured",
          "Send SMS alerts through Twilio for urgent appointment bookings",
          "Create tasks in project management tools (Asana, Monday.com, Trello)",
        ],
      },
      {
        heading: "Advanced Analytics & Reporting",
        content: [
          "Send conversation data to Google Sheets for custom analysis",
          "Update dashboards in real-time (Google Data Studio, Tableau)",
          "Track performance metrics across all your business tools",
        ],
      },
      {
        heading: "Two-Way Data Sync",
        content: [
          "Update customer information from your existing databases",
          "Sync appointment changes across all your scheduling tools",
          "Maintain consistent data across your entire tech stack",
        ],
      },
      {
        heading: "Popular Zapier Workflows",
        content: [
          "**Lead Qualification Workflow**: AI avatar qualifies a lead, creates contact in CRM with lead score, adds to email nurture sequence, notifies sales team via Slack, creates follow-up task in project management tool.",
          "**Appointment Booking Workflow**: AI avatar books appointment, creates calendar event in Google Calendar, sends confirmation via email marketing platform, adds contact to post-appointment nurture sequence, updates deal stage in CRM.",
          "**Customer Support Escalation**: AI detects support request during conversation, creates ticket in help desk software (Zendesk, Freshdesk), notifies support team via email/Slack, schedules follow-up conversation with AI avatar, updates customer record with support history.",
        ],
      },
      {
        heading: "Setup Process",
        content: [
          "Install the Ravan.ai app from the Zapier marketplace",
          "Authenticate your Ravan.ai account",
          "Choose from pre-built templates or create custom workflows",
          "Test your automation and activate",
        ],
      },
    ],
  },
  {
    title: "HubSpot Integration",
    subtitle: "Supercharge Your Inbound Marketing with AI Conversations",
    sections: [
      {
        heading: "How It Works",
        content:
          "Transform your HubSpot instance into an AI-powered lead generation machine. Our deep integration connects every AI conversation with your marketing automation, sales pipeline, and customer service workflows.",
      },
      {
        heading: "Advanced Lead Scoring & Qualification",
        content: [
          "AI conversations automatically update HubSpot lead scores based on engagement quality",
          "Create dynamic contact properties from AI conversation insights",
          "Trigger smart content and personalized email sequences based on conversation topics",
          "Automatically assign leads to sales reps using HubSpot’s round-robin or territory rules",
        ],
      },
      {
        heading: "Marketing Automation That Actually Converts",
        content: [
          "Enroll prospects in specific workflows based on AI conversation outcomes",
          "Create custom audiences for targeted campaigns using AI interaction data",
          "Automatically suppress contacts from marketing emails when AI schedules meetings",
          "Track conversation-to-customer journey across all HubSpot tools",
        ],
      },
      {
        heading: "Unified Sales & Marketing Reporting",
        content: [
          "View AI performance metrics in custom HubSpot dashboards",
          "Track conversation influence on deal progression and close rates",
          "Analyze AI conversation topics alongside marketing campaign performance",
          "Monitor lead quality improvements from AI pre-qualification",
        ],
      },
      {
        heading: "Smart Deal Management",
        content: [
          "Automatically create deals when AI qualifies high-intent prospects",
          "Update deal stages based on conversation milestones and appointment bookings",
          "Add contextual notes from AI conversations to deal records",
          "Set follow-up tasks and reminders for sales reps based on AI insights",
        ],
      },
      {
        heading: "Video & Content Personalization",
        content: [
          "Trigger personalized video sequences through HubSpot based on AI conversation topics",
          "Automatically tag contacts with interests identified during AI conversations",
          "Create targeted content recommendations using conversation insights",
          "Personalize follow-up emails with specific topics discussed with AI",
        ],
      },
      {
        heading: "Setup Process",
        content: [
          "Connect through HubSpot’s App Marketplace with one-click installation",
          "Map AI conversation fields to your custom HubSpot properties",
          "Configure workflow triggers and lead scoring rules",
          "Set up dashboard reporting and notification preferences",
          "AI starts enhancing your HubSpot data immediately",
        ],
      },
    ],
  },
  {
    title: "Salesforce Integration",
    subtitle: "Enterprise-Grade AI That Scales With Your Business",
    sections: [
      {
        heading: "How It Works",
        content:
          "Built for enterprise organizations, our Salesforce integration provides deep customization and powerful automation that works with your existing Salesforce architecture and custom objects.",
      },
      {
        heading: "Custom Object & Field Mapping",
        content: [
          "Map AI conversation data to any standard or custom Salesforce object",
          "Create custom fields automatically based on your AI conversation requirements",
          "Support for complex data relationships and hierarchies",
          "Full compatibility with Salesforce CPQ, Communities, and Industry Clouds",
        ],
      },
      {
        heading: "Advanced Workflow Automation",
        content: [
          "Trigger Salesforce Flow processes based on AI conversation outcomes",
          "Create sophisticated approval processes for high-value leads identified by AI",
          "Automatically assign leads using complex territory management rules",
          "Integration with Salesforce Einstein for enhanced lead scoring",
        ],
      },
      {
        heading: "Enterprise Reporting & Analytics",
        content: [
          "Custom Salesforce reports and dashboards showing AI performance metrics",
          "Integration with Salesforce Analytics Cloud for advanced data visualization",
          "Track AI ROI across multiple business units and regions",
          "Export conversation data for custom analytics and machine learning models",
        ],
      },
      {
        heading: "Territory & Team Management",
        content: [
          "Respect existing territory assignments when distributing AI-generated leads",
          "Support for complex organizational hierarchies and role-based access",
          "Automatic lead assignment based on product lines, regions, or custom criteria",
          "Integration with Salesforce Communities for channel partner lead distribution",
        ],
      },
      {
        heading: "Enterprise Security & Compliance",
        content: [
          "Full compliance with Salesforce Shield encryption and audit requirements",
          "Support for IP restrictions and single sign-on (SSO) protocols",
          "Custom permission sets for controlling AI data access",
          "Data residency options for international compliance requirements",
        ],
      },
      {
        heading: "Mobile & Multi-Cloud Support",
        content: [
          "Access AI conversation data through Salesforce Mobile app",
          "Integration across Sales, Service, Marketing, and Commerce Clouds",
          "Support for Salesforce Experience Cloud customer portals",
          "Real-time sync with Field Service Lightning for technical sales",
        ],
      },
      {
        heading: "Advanced Features",
        content: [
          "**Einstein AI Enhancement**: Combine Ravan.ai conversation insights with Salesforce Einstein predictions, enhanced lead scoring using both AI conversation data and Einstein algorithms, predictive analytics for conversation-to-close probability, automated next-best-action recommendations based on AI interactions.",
          "**Multi-Org & Sandbox Support**: Deploy across multiple Salesforce orgs with centralized management, full sandbox integration for testing and development, support for complex org mergers and data migration scenarios, custom deployment packages for different business units.",
        ],
      },
      {
        heading: "Setup Process",
        content: [
          "Install from Salesforce AppExchange or custom package deployment",
          "Configure object mappings and custom field creation",
          "Set up workflow rules, process builder, or Flow automations",
          "Configure security settings and user permissions",
          "Deploy to production with full change set management",
        ],
      },
    ],
  },
];

const IntegrationCard: React.FC<{
  title: string;
  subtitle: string;
  sections: { heading: string; content: string | string[] }[];
}> = ({ title, subtitle, sections }) => {
  return (
    <motion.div
      className="bg-[#EAD9A8] p-8 rounded-2xl shadow-2xl mb-12"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold text-gray-900 mb-2">{title}</h2>
      <p className="text-lg text-gray-700 mb-6">{subtitle}</p>
      {sections.map((section, index) => (
        <div key={index} className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            {section.heading}
          </h3>
          {Array.isArray(section.content) ? (
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              {section.content.map((item, idx) => (
                <li key={idx} className="text-base">
                  {item}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-700 text-base">{section.content}</p>
          )}
        </div>
      ))}
    </motion.div>
  );
};

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="min-h-screen bg-[#F5E8C7] font-sans">
      <main className="max-w-5xl mx-auto py-12 px-4">
        <div className="flex space-x-4 mb-8 overflow-x-auto pb-2">
          {integrations.map((integration, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-4 py-2 rounded-t-lg ${
                activeTab === index
                  ? "bg-[#F28C38] text-white"
                  : "bg-[#EAD9A8] text-gray-900"
              }`}
            >
              {integration.title}
            </button>
          ))}
        </div>
        <IntegrationCard
          title={integrations[activeTab].title}
          subtitle={integrations[activeTab].subtitle}
          sections={integrations[activeTab].sections}
        />
      </main>
    </div>
  );
};

export default App;
