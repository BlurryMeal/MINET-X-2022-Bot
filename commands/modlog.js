const Auditlog = require("discord-auditlog");
// will send all event to #audit-logs channel
// will send movement (join/leave) to #in-out channel if the channel exist
Auditlog(bot);