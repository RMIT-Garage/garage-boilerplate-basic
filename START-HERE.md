# Implementation: participant brief

Welcome. This session tests whether our white-paper module is clear and usable.
We are testing the document, not you. Work as you normally would with Claude Code.
You may think aloud as you work; this is optional.

## Your task

Implement the notes-delete feature described in `notes-delete-spec.md`, supplied
in this repository's root. Use the approved specification as your requirements
and the Implementation module as your working guide.

The specification comes from the preceding Planning session, or from a
separately prepared and approved fallback. Before beginning, the facilitator
must confirm its Gate 1 approval and identify the approver. If the specification
or approval is missing, tell the facilitator and wait for it; do not invent a
replacement specification.

## What to read

- [Implementation](https://group-19-nbn-sdlc.vercel.app/modules/implementation)
- `notes-delete-spec.md` in this repository.
- The risk-tier document referenced by the module:
  [white-paper/governance/research.md](https://github.com/thomasTA27/GROUP-19-NBN-SDLC/blob/main/white-paper/governance/research.md)

Keep the module available while you work. Use its own instructions and prompts,
along with the repository's existing context files and project documentation.

## Your workspace

- Repository: [nbn-usability-implementation](https://github.com/Sajad-Ali-Dev/nbn-usability-implementation)
- Environment: the prepared Windows VM, with VS Code and Claude Code.
- Application: [http://localhost:3000](http://localhost:3000), when running.

The facilitator supplies application test access separately. Report environment
problems so they can be fixed outside the task time. If you need a decision
about a specification conflict, contact the facilitator, who acts as the Gate 1
owner for this mock project.

## Session scope

Use the module to work through:

- Step 0: baseline and controls, including the agent and model version.
- Step 1: a work-package plan, with at most two files per work package.
- The Steps 1 to 3 loop, through its exit condition where time permits.

The loop includes its own checks and the requirement to write your commit
message yourself before asking the agent to check it.

Read the module's final verification checklist, items (a) to (g), but do not run
that final checklist as a separate exercise in this session. You will discuss
what its items require during the debrief. Publishing a PR, merging and
deployment are outside this session; the study team handles GitHub publication.

## What to save

Keep the implementation and any tests in the repository. Save the work-package
plan and session records as `implementation-session.md` in the repository root,
or link clearly named supporting files from it. Retain the baseline output,
known failures, missing controls, loop findings and any specification change
requests. Preserve your handwritten commit message and the agent's assessment.

Keep notes intended for PR caveats under a `Caveats` heading in the session
record, ready to transfer into the PR description. Do not include passwords,
API keys or environment-file values.

## Session timing

The session lasts 60 minutes. After introduction and handoff, Step 0 has a
15-minute timebox, followed by up to 25 minutes for the plan and loop. A short
questionnaire and debrief follow. The facilitator will announce the transitions
and stop time.

If you are unfinished, save the current work and describe where you stopped.
Unfinished work is a useful result. Leave your Claude session available at the
end so the facilitator can record usage information.