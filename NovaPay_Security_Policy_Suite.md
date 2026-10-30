# Security Policy Suite
## NovaPay Financial Technologies, Inc.

---

> **Document Classification:** Internal — Confidential
> **Document Owner:** Chief Information Security Officer (CISO)
> **Approved By:** Board of Directors, Risk & Compliance Committee
> **Effective Date:** November 1, 2026
> **Review Cycle:** Annual (or upon material change)
> **Version:** 2.1

---

# PART I — ACCEPTABLE USE POLICY (AUP)

---

## 1. Purpose

This Acceptable Use Policy ("Policy") establishes the standards governing the appropriate use of NovaPay Financial Technologies, Inc.'s ("NovaPay," "the Company") information technology resources, systems, networks, and data assets. The Policy is designed to:

- Protect NovaPay's information assets, intellectual property, and customer data from unauthorized access, disclosure, or misuse;
- Ensure compliance with applicable laws and regulations, including the Gramm-Leach-Bliley Act (GLBA), Payment Card Industry Data Security Standard (PCI DSS), and applicable state data protection statutes;
- Define clear responsibilities for all personnel who access Company resources; and
- Establish a consistent, enforceable baseline of acceptable and prohibited behavior.

---

## 2. Scope

This Policy applies to **all individuals** who access or use NovaPay information technology resources, including but not limited to:

| Covered Party | Examples |
|---|---|
| Full-time and part-time employees | All departments and business units |
| Contractors and temporary staff | Vendors, consultants, staffing agency personnel |
| Third-party service providers | Cloud vendors, payment processors, auditors |
| Board members and executives | Directors, C-suite officers |
| Interns and students | Sponsored academic placements |

This Policy covers all IT resources owned, leased, or managed by NovaPay, including:

- Corporate workstations, laptops, mobile devices, and servers;
- Internal networks, VPNs, and wireless infrastructure;
- Cloud platforms and Software-as-a-Service (SaaS) applications;
- Email, collaboration, and communication systems;
- Cardholder Data Environments (CDE) and financial transaction systems; and
- Personal devices used to access NovaPay systems (BYOD).

---

## 3. Definitions

| Term | Definition |
|---|---|
| **Authorized User** | Any individual granted access credentials to NovaPay systems by the IT or Identity & Access Management (IAM) team. |
| **Company Data** | Any information owned, collected, stored, or processed by NovaPay, including Personally Identifiable Information (PII), financial records, and proprietary business data. |
| **Cardholder Data (CHD)** | Any information associated with a payment card as defined by PCI DSS, including Primary Account Numbers (PAN), cardholder names, and authentication data. |
| **Information System** | Any hardware, software, network, or service used to process, store, or transmit Company Data. |
| **Sensitive Information** | Data classified as Confidential or Restricted under the NovaPay Data Classification Policy. |
| **Security Incident** | Any actual or suspected unauthorized access, use, disclosure, modification, or destruction of information or information systems. |

---

## 4. Acceptable Use Standards

### 4.1 General Principles

All Authorized Users must:

1. Use NovaPay IT resources **solely for legitimate business purposes** consistent with their job responsibilities;
2. Comply with all applicable laws, regulations, and contractual obligations;
3. Protect access credentials (usernames, passwords, tokens, certificates) and never share them with any other individual;
4. Immediately report suspected Security Incidents, policy violations, or unusual system behavior to the Security Operations Center (SOC) at **security@novapay.example.com** or via the internal ticketing portal;
5. Lock workstations and mobile devices when leaving them unattended, even briefly; and
6. Complete all mandatory information security awareness training within prescribed timelines.

### 4.2 Email and Electronic Communications

Authorized Users may use NovaPay email and messaging platforms for business communication. Users must:

- Treat all electronic communications as potentially reviewable by NovaPay;
- Refrain from forwarding confidential or Sensitive Information to personal email accounts;
- Exercise caution with unsolicited emails, links, and attachments (phishing awareness);
- Encrypt messages containing Sensitive Information using approved tools (e.g., Microsoft Purview Information Protection); and
- Retain emails in accordance with the NovaPay Records Retention Schedule.

### 4.3 Internet and Network Access

Use of NovaPay internet connectivity is permitted for business purposes. Incidental personal use is permissible provided it does not:

- Consume excessive bandwidth or degrade network performance;
- Involve accessing prohibited content categories (see Section 5); or
- Circumvent security controls such as web content filtering or DNS protection.

Remote access to internal systems must occur exclusively through the NovaPay approved VPN client using multi-factor authentication (MFA).

### 4.4 Endpoint Devices

All endpoints (laptops, desktops, mobile phones, tablets) used to access Company resources must:

1. Run only NovaPay-approved operating systems and software;
2. Have full-disk encryption enabled (e.g., BitLocker, FileVault);
3. Have endpoint detection and response (EDR) software installed and active;
4. Receive security patches within the timelines specified in the Patch Management Policy; and
5. Never be used by family members, friends, or other unauthorized individuals.

### 4.5 Cloud Services and Software Installation

Users must not install, subscribe to, or use cloud services or software applications that have not been approved through NovaPay's **IT Change Advisory Board (CAB)** process. Unauthorized "shadow IT" creates uncontrolled risk to Company Data and regulatory compliance posture. Requests for new software or services must be submitted to the IT Procurement team.

### 4.6 Data Handling and Storage

Users handling Sensitive Information must:

- Store data only in approved, encrypted repositories (e.g., corporate SharePoint, approved cloud storage);
- Never store Cardholder Data on personal devices, local workstations, or unapproved cloud storage;
- Dispose of physical documents containing Sensitive Information using cross-cut shredders or secure destruction bins; and
- Transfer data to third parties only under an executed Data Processing Agreement (DPA) or Non-Disclosure Agreement (NDA).

### 4.7 Physical and Environmental Security

Authorized Users working in NovaPay facilities must:

- Wear identification badges visibly at all times;
- Challenge or report unescorted visitors in restricted areas;
- Prevent tailgating through secured access doors; and
- Secure physical documents and media containing Sensitive Information when not in use (clean desk policy).

---

## 5. Prohibited Activities

The following activities are strictly prohibited on NovaPay information systems. This list is illustrative, not exhaustive.

| Category | Prohibited Activity |
|---|---|
| **Unauthorized Access** | Accessing systems, data, or accounts beyond one's authorized scope; attempting to bypass authentication controls; using another user's credentials |
| **Malicious Software** | Introducing, distributing, or facilitating malware, ransomware, spyware, or other malicious code |
| **Prohibited Content** | Accessing, downloading, or distributing illegal content; pornographic, violent, or hate-based material; pirated software or media |
| **Data Exfiltration** | Copying or transmitting Sensitive Information to unauthorized destinations; using unapproved USB drives or external storage |
| **Cryptomining** | Using Company systems for cryptocurrency mining or other non-business computational tasks |
| **Harassment** | Using IT resources to harass, stalk, threaten, or discriminate against any individual |
| **Unauthorized Disclosure** | Sharing confidential information with unauthorized parties, including on social media |
| **Circumventing Controls** | Using proxies, Tor, VPNs not approved by NovaPay, or other tools to evade security monitoring |
| **Unauthorized Modifications** | Altering system configurations, disabling security software, or modifying audit logs |
| **Fraud** | Using NovaPay systems to commit financial fraud, identity theft, or any deceptive practice |

---

## 6. Monitoring and Privacy

NovaPay reserves the right to monitor, log, and audit all activity on its information systems, networks, and devices — **including communications** — to ensure compliance with this Policy and applicable law. Users should have **no expectation of privacy** when using Company-provided or Company-connected resources.

Monitoring activities may include:

- Network traffic inspection and logging;
- Email filtering and archiving;
- Endpoint activity monitoring via EDR tools;
- Web browsing logs; and
- System and application access logs (SIEM).

All monitoring is conducted in accordance with applicable employment law and the NovaPay Employee Privacy Notice.

---

## 7. Exceptions

Any business-justified exception to this Policy must be:

1. Submitted in writing to the Information Security team via the Exception Request Form;
2. Reviewed and approved by the CISO (or designated deputy);
3. Documented with a defined expiration date and compensating controls; and
4. Subject to quarterly review.

---

## 8. Policy Violations and Disciplinary Action

Violations of this Policy may result in disciplinary action up to and including:

- Formal written warning;
- Suspension of system access privileges;
- Termination of employment or contract; and
- Civil or criminal legal proceedings where warranted.

Severity of response will be commensurate with the nature, intent, and impact of the violation, as determined by Human Resources in consultation with Legal, Compliance, and the CISO.

---

## 9. User Acknowledgment

All Authorized Users are required to read, understand, and electronically acknowledge this Policy upon onboarding and annually thereafter via the NovaPay HR Learning Management System (LMS). Acknowledgment records will be maintained for a minimum of **five (5) years**.

---

## 10. Policy Governance

| Role | Responsibility |
|---|---|
| **Chief Information Security Officer (CISO)** | Policy owner; authorizes exceptions; annual review |
| **Information Security Team** | Policy maintenance; user guidance; exception management |
| **Human Resources** | Disciplinary action; onboarding acknowledgment |
| **Legal & Compliance** | Regulatory alignment; legal review |
| **IT Operations** | Technical enforcement of controls |
| **All Authorized Users** | Compliance with this Policy |

---
---

# PART II — INCIDENT RESPONSE POLICY (IRP)

---

## 1. Purpose

This Incident Response Policy ("Policy") establishes NovaPay Financial Technologies, Inc.'s framework for identifying, containing, eradicating, recovering from, and learning from cybersecurity incidents. An effective and timely response to security incidents is essential to:

- Minimize operational disruption and financial loss;
- Protect customer data, including Cardholder Data and Personally Identifiable Information;
- Meet regulatory notification obligations under GLBA, PCI DSS, applicable state breach notification laws (e.g., CCPA, NY SHIELD Act), and any applicable federal agency requirements;
- Preserve forensic evidence for legal and regulatory purposes; and
- Continuously improve NovaPay's security posture through post-incident analysis.

---

## 2. Scope

This Policy applies to all Security Incidents affecting NovaPay information assets, systems, networks, employees, contractors, and third-party providers. It governs the activities of the **Incident Response Team (IRT)** and all personnel who discover, report, or participate in the response to a security incident.

---

## 3. Definitions

| Term | Definition |
|---|---|
| **Security Event** | Any observable occurrence in an information system or network, which may or may not be a Security Incident. |
| **Security Incident** | A Security Event confirmed to have an adverse impact on the confidentiality, integrity, or availability of information or systems. |
| **Critical Incident** | An incident involving confirmed exfiltration of Sensitive Information, systemic compromise of production systems, or ransomware impacting business operations. |
| **Containment** | Actions taken to limit the scope and impact of an active incident. |
| **Eradication** | Removal of the root cause of the incident (e.g., malware, unauthorized access, misconfiguration). |
| **Recovery** | Restoration of systems and operations to a known-good state. |
| **Indicators of Compromise (IoC)** | Forensic artifacts or behavioral patterns indicating a system has been compromised. |
| **Mean Time to Detect (MTTD)** | Average time elapsed between incident initiation and detection. |
| **Mean Time to Respond (MTTR)** | Average time elapsed between detection and containment. |

---

## 4. Incident Classification

All Security Incidents must be classified upon detection to determine response priority and resource allocation.

### 4.1 Severity Matrix

| Severity Level | Description | Examples | Target Response Time |
|---|---|---|---|
| **P1 — Critical** | Confirmed breach of Sensitive Information; active attacker in environment; ransomware deployment; systemic payment system compromise | Ransomware outbreak, confirmed CHD exfiltration, supply chain attack | **Immediate** (within 15 minutes of detection) |
| **P2 — High** | Suspected breach; significant malware infection; privilege escalation; unauthorized admin access | Malware on privileged endpoint, successful phishing leading to credential compromise | **Within 1 hour** |
| **P3 — Medium** | Isolated policy violation with potential security impact; suspicious but unconfirmed activity; vulnerability exploitation attempt | Unauthorized access attempt, anomalous data query, lost unencrypted device | **Within 4 hours** |
| **P4 — Low** | Informational or precautionary events requiring investigation but with minimal immediate impact | Failed login attempts within expected thresholds, minor policy violations | **Within 24 hours** |

---

## 5. Incident Response Team (IRT)

NovaPay maintains a standing Incident Response Team with defined roles and responsibilities.

### 5.1 Core IRT Members

| Role | Responsibility | Primary Contact |
|---|---|---|
| **Incident Commander (IC)** | Overall incident ownership; stakeholder communication; escalation decisions | CISO or designated deputy |
| **Security Operations Lead** | Technical triage, containment, and eradication coordination | SOC Manager |
| **Digital Forensics & Threat Intelligence Analyst** | Evidence collection, log analysis, attacker TTP profiling | Senior Security Analyst |
| **IT Infrastructure Lead** | System isolation, backup restoration, infrastructure changes | VP of Engineering |
| **Legal Counsel** | Regulatory notifications, law enforcement engagement, litigation hold | General Counsel |
| **Privacy & Compliance Officer** | Breach notification obligations, regulatory reporting | Chief Compliance Officer |
| **Communications Lead** | Internal and external communications, public relations | VP of Communications |
| **HR Representative** | Employee-related incidents; HR investigations | HR Business Partner |

### 5.2 Extended IRT (Activated as Needed)

- Business Unit Owners (for affected systems or processes)
- Third-party Incident Response Retainer (currently: [Redacted — Confidential Vendor Registry])
- Cyber Insurance Liaison
- Payment Network Contacts (Visa, Mastercard fraud and security teams)

---

## 6. Incident Response Lifecycle

NovaPay's incident response process follows a six-phase lifecycle aligned with NIST SP 800-61 Rev. 2 and adapted for the FinTech regulatory environment.

```
┌─────────────────────────────────────────────────────────────────────┐
│  PREPARATION → DETECTION → ANALYSIS → CONTAINMENT →                │
│  ERADICATION & RECOVERY → POST-INCIDENT ACTIVITY                   │
└─────────────────────────────────────────────────────────────────────┘
```

### Phase 1 — Preparation

**Objective:** Ensure NovaPay has the people, processes, and technology in place to respond effectively before an incident occurs.

| Activity | Owner | Frequency |
|---|---|---|
| Maintain and test IR playbooks for key attack scenarios | SOC Manager | Annually + as-needed |
| Conduct tabletop exercises and red team engagements | CISO | Semi-annually |
| Maintain IRT contact list and escalation tree | Security Operations Lead | Quarterly |
| Ensure forensic tooling and evidence storage are operational | Digital Forensics Analyst | Monthly |
| Maintain cyber insurance policy and IR retainer agreements | Legal / Finance | Annually |
| Train all employees in incident identification and reporting | HR / Security Team | Annually |
| Maintain documented system inventory and data flow diagrams | IT Operations | Quarterly |

### Phase 2 — Detection and Reporting

**Objective:** Identify potential Security Incidents as early as possible and ensure all personnel know how to report them.

#### 2.1 Detection Sources

Incidents may be detected through:

- **Automated Alerts:** SIEM correlation rules, EDR alerts, intrusion detection systems (IDS/IPS), fraud detection engine alerts, cloud security posture monitoring;
- **User Reports:** Employee, contractor, or customer reports of suspicious activity;
- **Third-Party Notification:** Payment networks, threat intelligence feeds, law enforcement, regulatory bodies, or security researchers; and
- **Proactive Discovery:** Penetration testing, threat hunting, or vulnerability scanning.

#### 2.2 Reporting Requirements

**All NovaPay personnel** who discover or suspect a Security Incident **must** report it immediately using one of the following channels:

| Channel | Contact |
|---|---|
| SOC Email (24/7) | security@novapay.example.com |
| SOC Hotline (24/7) | +1 (800) 555-0192 |
| Internal Ticketing Portal | https://helpdesk.novapay.internal/security |
| Emergency Escalation (P1 only) | CISO mobile (distributed via secure HR directory) |

Individuals must **never** attempt to investigate, contain, or remediate a suspected incident independently without SOC authorization. Do not power off affected systems unless explicitly directed by the SOC.

### Phase 3 — Analysis and Triage

**Objective:** Confirm whether a Security Event constitutes a Security Incident, classify its severity, and determine initial scope.

**Steps:**

1. **Initial Triage (SOC Analyst):** Validate the alert or report; correlate with SIEM telemetry, threat intelligence, and asset inventory; rule out false positives.
2. **Severity Classification:** Assign a severity level (P1–P4) per Section 4.1 and open a formal Incident ticket.
3. **IRT Notification:** Notify required IRT members based on severity:

   | Severity | IRT Notification |
   |---|---|
   | P1 | Full IRT; executive leadership; Legal; Compliance — within 15 minutes |
   | P2 | Core IRT members — within 1 hour |
   | P3 | SOC Lead + relevant technical staff — within 4 hours |
   | P4 | SOC Analyst — within 24 hours |

4. **Scope Determination:** Identify affected systems, data, users, and third parties; preserve and collect initial evidence (logs, memory images, network captures) before taking containment actions.
5. **Evidence Handling:** All evidence must be collected and stored in accordance with the **NovaPay Digital Forensics Evidence Handling Standard** to preserve chain of custody.

### Phase 4 — Containment

**Objective:** Limit the spread and impact of the incident while preserving the ability to restore normal operations.

#### 4.1 Short-Term Containment

Actions may include, but are not limited to:

- Network isolation of compromised hosts (VLAN segregation, firewall rule updates);
- Disabling compromised user accounts and revoking access tokens;
- Blocking malicious IP addresses, domains, or file hashes at the perimeter;
- Suspending affected API integrations or payment processing flows; and
- Engaging payment network fraud teams if CHD is suspected to be compromised.

#### 4.2 Long-Term Containment

Following initial stabilization:

- Deploy clean system images or restore from validated backups;
- Implement enhanced monitoring on affected segments;
- Rotate all potentially compromised credentials; and
- Apply emergency patches or configuration changes to address the exploit vector.

> **Important:** No evidence must be destroyed during containment. Forensic images should be taken prior to any system modification wherever possible.

### Phase 5 — Eradication and Recovery

**Objective:** Remove the threat from the environment and safely restore systems to normal operation.

**Eradication Steps:**

1. Identify and eliminate the root cause (e.g., remove malware, close backdoors, revoke unauthorized access);
2. Conduct vulnerability remediation on exploited weaknesses;
3. Verify eradication through forensic analysis and IOC scanning; and
4. Obtain CISO sign-off before proceeding to recovery.

**Recovery Steps:**

1. Restore systems from clean, validated backups;
2. Rebuild compromised systems using approved hardening baselines;
3. Reintegrate systems into production in a phased, monitored manner;
4. Conduct regression testing and business validation before declaring full operational status; and
5. Maintain enhanced monitoring for a minimum of **30 days** post-recovery.

### Phase 6 — Post-Incident Activity

**Objective:** Learn from the incident to prevent recurrence and improve the IR program.

#### 6.1 Post-Incident Review (PIR)

A Post-Incident Review must be conducted for all P1 and P2 incidents within **14 calendar days** of incident closure. P3 and P4 incidents require a summary review within **30 days**.

The PIR must document:

| PIR Section | Description |
|---|---|
| **Incident Summary** | Timeline, affected systems, root cause, and impact |
| **Detection Effectiveness** | How was the incident detected? What was MTTD? |
| **Response Effectiveness** | Were response SLAs met? What worked well? |
| **Gaps and Deficiencies** | What controls failed or were absent? |
| **Action Items** | Specific remediation tasks, owners, and deadlines |
| **Lessons Learned** | Improvements to be incorporated into playbooks, controls, or training |

#### 6.2 Metrics and Reporting

The SOC will report the following metrics to executive leadership and the Board Risk Committee on a **quarterly** basis:

- Total incidents by severity and category;
- Mean Time to Detect (MTTD) and Mean Time to Respond (MTTR);
- Regulatory notifications issued;
- Open action items from prior PIRs; and
- Trending analysis (year-over-year and quarter-over-quarter).

---

## 7. Regulatory Notification Obligations

NovaPay operates in a heavily regulated environment. The following notification timelines are **mandatory** and must be coordinated by Legal Counsel and the Compliance Officer.

| Regulation / Authority | Trigger | Notification Deadline |
|---|---|---|
| **GLBA Safeguards Rule (FTC)** | Unauthorized acquisition of unencrypted customer financial information affecting ≥500 customers | Within **30 days** of discovery |
| **PCI DSS** | Confirmed or suspected CHD compromise | Notify acquiring bank and card brands **immediately** (within 24 hours) |
| **CCPA (California)** | Breach of California residents' personal information | Within **72 hours** for regulatory notice; consumer notice in "expedient time" |
| **NY SHIELD Act** | Breach of NY residents' private information | In "expedient time" without unreasonable delay |
| **SEC Cybersecurity Rules** (if applicable) | Material cybersecurity incident | Form 8-K within **4 business days** of materiality determination |
| **Law Enforcement** | Suspected criminal activity (e.g., fraud, extortion) | At CISO and General Counsel's discretion; FBI Cyber Division if appropriate |

> [!CAUTION]
> Failure to meet mandatory regulatory notification deadlines may result in significant civil penalties, regulatory sanctions, and reputational harm. Legal Counsel must be engaged **immediately** for all P1 and P2 incidents.

---

## 8. Communication Guidelines

### 8.1 Internal Communications

- All incident communications must use **approved, out-of-band channels** (e.g., a dedicated secure communication platform) if the primary email or collaboration infrastructure is suspected to be compromised.
- Incident details must be communicated on a **need-to-know basis** only.
- All internal communications regarding an active incident may be subject to **legal privilege** if routed through Legal Counsel.

### 8.2 External Communications

- **No employee** may communicate with media, regulators, customers, or the public regarding a Security Incident without explicit authorization from the Communications Lead and General Counsel.
- Customer notifications must be reviewed by Legal and Compliance before issuance.
- All regulatory communications must be reviewed and approved by the General Counsel.

---

## 9. Evidence Retention

All evidence and documentation related to a Security Incident must be retained for a minimum of:

| Evidence Type | Minimum Retention Period |
|---|---|
| Incident tickets and case files | 7 years |
| Forensic images and logs | 7 years (or duration of any related legal proceeding, whichever is longer) |
| PIR reports | 5 years |
| Regulatory notification records | 7 years |
| Communications (including legal hold) | Duration of legal hold + 2 years |

---

## 10. Testing and Continuous Improvement

| Activity | Frequency | Owner |
|---|---|---|
| Tabletop exercise (executive and technical) | Semi-annually | CISO |
| Full-scale IR simulation (red team vs. blue team) | Annually | SOC Manager / Red Team |
| Playbook review and update | Annually or post-P1 incident | Security Operations Lead |
| IRT contact list verification | Quarterly | SOC Manager |
| Third-party IR retainer review | Annually | CISO / Legal |

---

## 11. Policy Governance and Approval

| Attribute | Detail |
|---|---|
| **Policy Owner** | Chief Information Security Officer |
| **Approved By** | Board of Directors, Risk & Compliance Committee |
| **Effective Date** | November 1, 2026 |
| **Last Review Date** | October 30, 2026 |
| **Next Review Date** | October 30, 2027 |
| **Version** | 2.1 |
| **Distribution** | All NovaPay employees, contractors, and authorized third parties |
| **Related Documents** | Data Classification Policy, Patch Management Policy, Business Continuity Plan, Vendor Management Policy, Digital Forensics Evidence Handling Standard |

---

*© 2026 NovaPay Financial Technologies, Inc. All rights reserved. This document is the confidential property of NovaPay and is intended solely for internal use. Unauthorized distribution is prohibited.*
