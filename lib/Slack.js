var Slack = require('slack-node');

SlackAPI = function(token, username, emoji) {
	return {
		token: token,
		username: username,
		emoji: emoji,
		slack: new Slack(token),
		postMessage: function(channel, text) {
			var app = app;
			this.slack.api('chat.postMessage', {
				username: this.username,
				icon_emoji: this.emoji,
				text: text,
				channel: channel
  		}, function(err, response) {
				// console.log(response);
  		});
		}
  }
}

module.exports = SlackAPI;
