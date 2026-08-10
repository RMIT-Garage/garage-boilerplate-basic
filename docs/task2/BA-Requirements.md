# Task 2 – Business Analysis Requirements

**Team:** Team 40  
**Feature:** Styled Login Page and Team Page  
**Role:** Business Analyst  
**Sprint:** Task 2 – Mock Sprint  
**Date:** 10 August 2026  

## 1. Purpose

The purpose of this feature is to provide users with a visually improved Login Page and, following successful authentication, direct them to a Team Page that introduces Team 40 and its members.

The feature will use the existing Garage Boilerplate application and reuse its existing authentication functionality.

## 2. Scope

This sprint will deliver one complete feature consisting of:

- A visually styled version of the existing Login Page.
- A new Team Page for Team 40.
- A redirect from successful login to the Team Page.
- Team member information including each member's photo, name, assigned role and short blurb.

The existing authentication system will be reused and must not be rebuilt as part of this sprint.

For the Login Page styling task, changes are limited to the visual presentation of the existing Login Page. Existing authentication logic must remain unchanged.

The Login → Team Page redirect is a separate functional change within the overall feature and will be implemented during the appropriate development task.

## 3. User Stories

### US-01 – Login Page

As a user, I want a clear and professionally styled Login Page so that I can easily understand how to sign in to the application.

### US-02 – Team Page

As an authenticated user, I want to be redirected to a Team Page after successfully signing in so that I can view information about Team 40 and its members.

## 4. Functional Requirements

### Login Page

**FR-01:** The existing Login Page must be visually styled according to the approved UX design.

**FR-02:** The existing email and password login functionality must remain available.

**FR-03:** The existing Google sign-in option must remain available.

**FR-04:** Login Page styling changes must not modify, remove or break existing authentication logic.

**FR-05:** Existing login validation, error messages and loading states must continue to operate correctly.

**FR-06:** The email field, password field, sign-in button, Google sign-in button and account creation link must remain clearly identifiable and usable.

**FR-07:** Invalid login attempts must remain on the Login Page and display an appropriate error message.

### Login Redirect

**FR-08:** After successful authentication, the user must be redirected to the Team Page.

**FR-09:** The Team Page must use the route `/team`.

**FR-10:** Successful authentication through either email/password or Google sign-in must result in the same Team Page destination.

**FR-11:** An already authenticated user who accesses the sign-in page must be redirected to the Team Page rather than being required to sign in again.

### Team Page

**FR-12:** The Team Page must clearly display the team name, **Team 40**.

**FR-13:** The Team Page must contain a profile section or card for every member of Team 40.

**FR-14:** Each team member profile must contain:

- Member photo
- Member name
- Assigned project/sprint role
- Short personal or project-related blurb

**FR-15:** All team member information must be presented in a clear and consistent layout.

**FR-16:** The Team Page must follow the approved UX design.

## 5. Team Page Field and Display Rules

The following rules define the required Team Page information and how it should be presented.

| Field | Requirement / Display Rule |
|---|---|
| Team Name | Must display **Team 40** prominently on the Team Page. |
| Member Photo | Each member must have a photo displayed. If a photo is unavailable, a consistent placeholder avatar should be used. |
| Member Name | Each member's name must be clearly displayed and must not be left blank. |
| Member Role | Each member's assigned sprint/project role must be clearly displayed. |
| Member Blurb | Each member must have a short personal or project-related blurb. The layout must support different blurb lengths without breaking the page design. |
| Member Card / Section | Information for each member must be grouped clearly so users can easily identify which photo, name, role and blurb belong together. |

All required team member information must be provided before the feature is considered complete.

## 6. Edge Cases

The following edge cases should be considered during design, development and testing:

**EC-01 – Invalid Login:**  
If incorrect login credentials are entered, the user must remain on the Login Page and receive an appropriate error message.

**EC-02 – Already Authenticated User:**  
If an authenticated user accesses the Login Page, they should be redirected to `/team`.

**EC-03 – Different Authentication Methods:**  
Successful email/password login and Google sign-in must both direct the user to the same Team Page.

**EC-04 – Missing Member Photo:**  
If a team member photo is unavailable, a consistent placeholder avatar should be displayed instead of leaving a broken or empty image area.

**EC-05 – Different Blurb Lengths:**  
Member blurbs may vary in length. The design must accommodate different text lengths without causing cards or page content to become unreadable or visually broken.

**EC-06 – Smaller Screen Sizes:**  
Team member cards and Login Page elements must remain readable and usable on smaller/mobile screens without overlapping or overflowing.

**EC-07 – Broken or Missing Required Member Information:**  
A member profile should not be considered complete if the required name, role or blurb is missing.

**EC-08 – Authentication Errors During Styling Changes:**  
Visual changes to the Login Page must not interfere with existing authentication validation, error handling or loading behaviour.

## 7. Non-Functional Requirements

**NFR-01 – Responsive Design:**  
The Login Page and Team Page must remain usable and readable on desktop and smaller/mobile screen sizes.

**NFR-02 – Accessibility:**  
Text must be readable, interactive elements should have clear focus states, form fields should retain appropriate labels, and team member images should include appropriate alternative text.

**NFR-03 – Consistency:**  
Fonts, spacing, colours, buttons, cards and other visual elements should follow a consistent design style.

**NFR-04 – Existing Functionality:**  
Existing authentication functionality must not be broken by the new styling or Team Page feature.

**NFR-05 – Code Quality:**  
Implementation must not introduce linting, type checking, build or existing test failures.

## 8. Acceptance Criteria

The completed feature will be accepted when:

1. The Login Page follows the approved UX design.
2. Login Page changes are styling-only and do not alter existing authentication logic.
3. Email/password authentication continues to function.
4. Google authentication continues to function.
5. Existing login validation, error handling and loading behaviour remain functional.
6. Successful login redirects the user to `/team`.
7. Both email/password and Google sign-in lead to the Team Page.
8. The Team Page clearly displays the name **Team 40**.
9. Every Team 40 member is represented on the Team Page.
10. Every member entry includes a photo or placeholder avatar, name, role and short blurb.
11. Team member information follows the documented field and display rules.
12. Different member blurb lengths do not break the Team Page layout.
13. The Team Page matches the approved UX design.
14. The Login Page and Team Page are responsive and usable at different screen sizes.
15. Existing application functionality is not broken.
16. Relevant project quality checks complete successfully.

## 9. Out of Scope

The following items are outside the scope of this feature unless specifically requested by the Product Owner:

- Redesigning the sign-up page.
- Creating new authentication providers.
- Rebuilding the existing authentication system.
- Modifying Firebase authentication behaviour beyond the required post-login redirect.
- Creating a database-driven team management system.
- Allowing users to add, edit or delete team members.
- Changing the Notes feature.
- Redesigning unrelated Dashboard functionality.
- Implementing administrative functionality.
- Allowing users to upload or edit team photographs through the application.

Team member information may be implemented as static content for the purposes of this Mock Sprint.

## 10. Constraints and Assumptions

- The existing Garage Boilerplate repository will be used.
- Existing authentication functionality will be reused rather than rebuilt.
- Login Page styling work must remain styling-only and must not alter existing authentication logic.
- Team members will provide the correct name, role, photo and short blurb required for their Team Page profile.
- A placeholder avatar may be used if a team member photo is unavailable.
- UX will create the visual design based on these requirements.
- Development must not begin until the UX design has been reviewed and validated by the BA.
- All work must follow the team's Git feature branch and Pull Request workflow.
- Task-specific deliverables must be stored in the Git repository and linked from Microsoft Planner.

## 11. Dependencies

- BA requirements must be completed before UX design begins.
- UX design must be completed before BA design validation begins.
- UX design must be validated by the BA before development begins.
- Team members must provide their required profile information before the Team Page is finalised.
- Development depends on the existing authentication functionality in the Garage Boilerplate remaining operational.
- Each role must complete and hand off their assigned Planner task before the next task begins.
- The latest approved and merged work must be pulled from `main` before the next role begins their task.

## 12. Requirements Traceability Summary

| User Story | Related Requirements | Acceptance Criteria |
|---|---|---|
| US-01 – Login Page | FR-01 to FR-07 | AC 1–5 |
| US-02 – Team Page and Redirect | FR-08 to FR-16 | AC 6–14 |
| Team Page Field Rules | Section 5 | AC 9–12 |
| Edge Cases | Section 6 | AC 5–7, 10, 12, 14 |
| Quality Requirements | NFR-01 to NFR-05 | AC 14–16 |

## 13. Handoff to UX

UX should use this requirements document as the basis for the next sprint task.

UX should create designs for:

1. The styled Login Page.
2. The Team Page layout.
3. Team member profile/card presentation.
4. Placeholder-avatar treatment where required.
5. Different member blurb lengths.
6. Responsive behaviour for smaller screens.
7. Appropriate accessibility and visual consistency considerations.

The Login Page design must preserve all existing login fields, controls and authentication behaviour. The Login Page development task is styling-only and should not require changes to existing authentication logic.

The Team Page design must provide clear space for each team member's photo or placeholder avatar, name, assigned role and short blurb.

Once the UX design is completed, it must be handed back to the BA for validation against these requirements before development begins.