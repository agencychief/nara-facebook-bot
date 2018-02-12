/**
 * The textual script used by the bot to interact with users.
 */

'use strict';

const script = {
	//
	// general
	//
	'default': 'Sorry, I didn\'t understand that. For more info, tap the menu below for more options.',
	'greeting': 'Hello {{user_first_name}}! Hit the "Get Started" button below.',
	'get_started': 'Want to help make history accessible? Tag the type of writing you see in our documents. You can also ask questions about the National Archives.',
	'menu': {
		'tag':    'Tag a document',
		'facts':  'Fun The Archives Facts',
		'ask':    'Ask the Archives a question',
		'jokes':  'Tell a joke',
		'photos': 'Show me interesting photos'
	},
	'quick_menu': {
		'tag':    'Tag a document',
		'ask':    'Ask a question',
	},
	//
	// tagging
	//
	'tag_start': 'Let\'s go! I’m retrieving a document from the virtual stacks...',
	'tag_image_options': {
		'big':   'View larger size',
		'learn': 'Learn more'
	},
	'tag_prompt': {
		'message': 'Tag it! Select what kind of writing you see in the document.',
		'options': {
			'handwritten': 'Handwritten',
			'typed':       'Typed',
			'mixed':       'Both',
			'none':        'No writing',
			'skip':        'No idea'
		}
	},
	'tag_error': 'Something went wrong. Open the menu to try again or choose another option.',
	'tag_acknowledgment': {
		'handwritten': 'Tagged as handwritten.',
		'typed': 'Tagged as typed.',
		'mixed': 'Tagged as containing typed and handwritten text.',
		'none': 'Tagged as containing no writing.',
		'skip': 'No problem! Skipping this one.'
	},
	'tag_reply_first': {
		'message': 'Congrats on your first tag! Every tag you provide makes American history more accessible.',
		'options': {
			'new':   'Tag another document',
			'stop':  'Stop tagging',
		},
		'followup': {
			'new': 'You got it! Heading back to the virtual stacks to retrieve the next document...',
			'stop': 'That was fun! FYI, our citizen archivist program invites you to tag and transcribe more documents. Find out more at https://www.archives.gov/citizen-archivist'
		}
	},
	'tag_reply': [
		{
			'message': 'Good eye! Isn’t this fun? Want to tag another?',
			'options': {
				'new':   'Tag another document',
				'stop':  'Stop tagging'
			},
			'followup': {
				'new': 'You got it! Let me find you a good one...',
				'stop': 'That was fun! FYI, our citizen archivist program invites you to tag and transcribe more documents. Find out more at https://www.archives.gov/citizen-archivist'
			}
		},
		{
			'message': 'You’re on a roll! Only 38,999,999 more to go. (Just kidding!) Want to tag some more?',
			'options': {
				'new':   'Let\'s keep moving',
				'stop':  'Stop tagging'
			},
			'followup': {
				'new': 'Grabbing another document for you...',
				'stop': 'Every bit counts! FYI, our citizen archivist program invites you to tag and transcribe more documents. Find out more at https://www.archives.gov/citizen-archivist'
			}
		}
	],
	'tag_intermission': {
		'message': 'You just did ROUND_COUNT documents in a row. How are you feeling?',
		'options': {
			'new': 'Keep going',
			'stop': 'I need a break'
		},
		'followup': {
			'new': 'I like your attitude. Grabbing another document for you...',
			'stop': 'Me too! FYI, our citizen archivist program invites you to tag and transcribe more documents. Find out more at https://www.archives.gov/citizen-archivist'
		}
	},
	'tag_stop': 'That was fun! FYI, our citizen archivist program invites you to tag and transcribe more documents. Find out more at https://www.archives.gov/citizen-archivist',
	'tag_stop_prompts': {
		'facts':  'Fun Facts',
		'ask':    'Ask a question',
		'photos': 'Interesting photos'
	},
	//
	// extras
	//
	'facts': [
		'In true pop culture fashion, the most requested photo from The Archives is of Nixon and The King.',
		'The National Archives Building in downtown Washington, DC, is built above an underground stream, the Tiber Creek.',
		'The Archives was established in 1934 by President Franklin Roosevelt, but you could say it started with the birth of our great nation. Our documents date back to 1775.',
		'We\'re more than the Declaration of Independence (my eye is on you, Nicolas Cage wannabe). There are just about 10 billion (BILLION) pages of textual records. To read that many pages, you\'d have to read the entire Harry Potter series 3,197,953 times!',
		'Our most searched inquiry is asking about UFOs.'
	],
	'facts_reply': {
		'message': 'Want another?',
		'options': {
			'continue': 'Yes',
		}
	},
	'ask': [
		{
			'q': 'What is The Archives',
			'a': 'We are country\'s official record keeper. Along with making sure you have access to essential documents and preserving artifacts that tell the story of our history, we keep our nation\'s most precious documents safe from people like Nicolas Cage.',
		},
		{
			'q': 'How do I reach The Archives?',
			'a': 'Call us! (866) 272-6272',
		}
	],
	'ask_temp': 'Ask a question section placeholder.',
	'jokes': [
		{
			'q': 'How would you look up Lincoln\'s location in Pennsylvania?',
			'options': {
				'a1': 'No idea',
				'a2': 'Why\'s he in PA?'
			},
			'a1': 'He\'s at the Gettysburg Address.',
			'a2': 'I think it\'s time to go back to 5th grade.'
		},
		{
			'q': 'Why did Edison invent the light bulb?',
			'options': {
				'a1': 'No idea',
			},
			'a': 'So that he could see at night, were you expecting a joke?'
		},
		{
			'q': 'The year is 1924, where do you go for a drink?',
			'options': {
				'a1': 'No idea',
				'a2': 'At Gatsby\'s?'
			},
			'a1': 'I don\'t know either, but if you figure it out, speakeasy about it.',
			'a2': 'Great, I\'m coming with you.'
		}
	],
	'jokes_reply': {
		'message': 'Want to hear another joke?',
		'options': {
			'continue': 'Yes',
		}
	},
	'photos_temp': 'Photos section placeholder.',
	'quit': {
		'stop': [
			'Leaving us already? Join us again soon! Visit the Archives blog to find more images, and select an option from the menu to start up again.',
		],
		'break': 'Me too! Select an option from the menu to start up again.',
	}
};

module.exports = script;
