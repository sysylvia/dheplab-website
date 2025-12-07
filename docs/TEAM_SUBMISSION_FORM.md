# DHEPLab Team Profile Submission Form

## Google Form Setup Instructions

Create a new Google Form at [forms.google.com](https://forms.google.com) with the following configuration:

---

## Form Settings

- **Title:** DHEPLab Team Profile Submission
- **Description:** Submit your information for the DHEPLab website team page. Your profile will be reviewed before publication.
- **Response destination:** Create new spreadsheet (for easy review)
- **Email notifications:** Enable (notify sean_sylvia@unc.edu on submission)
- **Collect email addresses:** Yes (auto-collect respondent email)

---

## Form Fields

### 1. Full Name (Required)
- **Type:** Short answer
- **Validation:** Required

### 2. Role (Required)
- **Type:** Dropdown
- **Options:**
  - PhD Student
  - Postdoc
  - Research Assistant
  - Staff
  - Lab Manager
  - Collaborator
  - Other

### 3. Academic Title (Optional)
- **Type:** Short answer
- **Helper text:** e.g., "PhD Student in Health Policy", "Assistant Professor, Dept of Economics"

### 4. Short Bio (Required)
- **Type:** Paragraph
- **Helper text:** 2-3 sentences describing your research interests and background.
- **Validation:** Required

### 5. Profile Photo (Optional)
- **Type:** File upload
- **Allow only specific file types:** Images only (jpg, png)
- **Maximum file size:** 10 MB
- **Helper text:** Square format preferred (400x400 pixels or larger)

### 6. Education (Optional)
- **Type:** Paragraph
- **Helper text:** List degrees, institutions, and years. One per line.
  Example:
  - PhD Health Policy, UNC Chapel Hill, 2025
  - MPH, Johns Hopkins, 2020
  - BA Economics, Stanford, 2018

### 7. Google Scholar URL (Optional)
- **Type:** Short answer (URL validation)
- **Helper text:** e.g., https://scholar.google.com/citations?user=XXXXX

### 8. LinkedIn URL (Optional)
- **Type:** Short answer (URL validation)

### 9. Personal Website (Optional)
- **Type:** Short answer (URL validation)

### 10. ORCID (Optional)
- **Type:** Short answer
- **Helper text:** e.g., 0000-0002-1234-5678

### 11. Twitter/X Handle (Optional)
- **Type:** Short answer
- **Helper text:** e.g., @yourusername

---

## After Form Creation

1. **Get shareable link:** Settings → Responses → Get pre-filled link
2. **Share in Slack:** Post link in DHEPLab Slack channel
3. **Optional:** Add link to website contact page

---

## Processing Submissions

When a submission arrives:

1. Review the Google Sheet response
2. Create/update the team member file in `/src/content/team/`
3. Download profile photo (if provided) and add to `/public/team/`
4. Run `npm run build` to validate
5. Commit and push changes

---

## File Template

```yaml
---
name: "{Full Name}"
role: "{Role}"
title: "{Academic Title}"
email: "{Email}"
image: "/team/{filename}.jpg"  # if photo provided
bio: "{Short Bio}"
order: {N}  # Assign based on role
active: true
links:
  scholar: "{Google Scholar URL}"
  linkedin: "{LinkedIn URL}"
  website: "{Personal Website}"
  orcid: "https://orcid.org/{ORCID}"
  twitter: "https://twitter.com/{handle}"
education:
  - "{Degree 1}"
  - "{Degree 2}"
---
```

---

## Order Assignment Guide

| Role | Order Range |
|------|-------------|
| Director, Co-Director | 1-4 |
| Lab Manager, Staff | 5-9 |
| Postdoc, Research Scientist | 10-19 |
| PhD Student | 30-39 |
| Research Assistant, Developer | 40-49 |
| Collaborator | 50-59 |
| Alumni | 60+ |
