# Team Page & Login Styling Requirements

### Purpose: 

This document defines the requirements for the mock sprint feature – styled login page that leads to a team page.The requirements will be used by the UX designer snd developers when designing and building the feature. 

### User Stories 

**US1**: As a user, I want to view the team name and project name so that I can identify the team and the project. 

**US2**: as a user I want to view each team member’s photo, name, role and short blurd so that I can understand who they are and what they do 

**US3**: As a user, I want the login page to a have a clear and consistent appearance so that it is easy to use 

**US4**: as a user, I want a successful login to lead to the team page so that I can access the team information. 

### Team Page Requirements 

The team page must display: 

- Team name 
- A section for each team member 
- Each team member’s: 
    - Photo 
    - Name 
    - Role 
    - Short about us blurb 

Display rules: 

- Each team member’s photo, name, role and blurb must be grouped together so it is clear which information belongs to that person 

- Names, roles and blurbs must be readable and displayed consistently across the team page 

- The layout must support longer blurbs and do not assume that the blurbs will fit in one line 

- If a team member does not have a headshot, the design must provide a placeholder avatar 

- Member photos should be displayed consistently even when the original image sizes are different. 

 

### Login styling requirements 

The login work is styling only. The existing authentication behaviour must not be changed 

The team _may_ change:
- Layout 
- Colours 
- Fonts 
- Spacing 
- Other visual styling or branding 

 
The team _must not_ change: 

- Authentication logic 
- Login validation logic 
- Session handling 
- Existing login functionality 
- A successful login must continue to work and lead the user to the team page. 

### Edge cases 

- One team member does not have a headshot. A placeholder avatar must be supported. 

- Two team members have longer blurbs. The design must allow for blurbs with multiple lines rather than just assuming a one line blurb 

- Team member photos may have different dimensions or aspect ratios 

- Longer names or roles must not break the page layout 

- Missing or incomplete member information should cause the page layout to fail 

### Handoff 

Done: Documented required fields for the team page (team name, project name, per-member photo/name/role, about-us blurb) and confirmed login work is styling-only, no auth logic changes. 

Deliverable: Requirements document, committed to the team repo. 

Git URL: 

Note for next role: UX — we have 5 team members, one doesn't have a headshot yet, so the design needs a placeholder-avatar treatment. Two members also have longer blurbs, so don't assume a one-line blurb. 

 