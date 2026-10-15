// OpenClaw runtime entry. OpenClaw requires package.json openclaw.extensions to name a code
// file; this plugin is skills-only (skills load from openclaw.plugin.json "skills"), so the
// entry registers nothing. Plain CommonJS object: no build step, no openclaw dependency.
module.exports = {
  id: "digital-marketing-pro",
  name: "Digital Marketing Pro",
  description: "Skills-only plugin; skills load from ./skills via openclaw.plugin.json.",
  register() {},
};
