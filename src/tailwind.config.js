tailwind.config = {
	theme: {
		fontFamily: {
			'sans': ['Hanken Grotesk', 'sans-serif']
		},
		extend: {
			colors: {
				'primary': {
					'red': 'hsl(0, 100%, 67%)',
					'orange': 'hsl(39, 100%, 56%)',
					'teal': 'hsl(166, 100%, 37%)',
					'blue': 'hsl(234, 85%, 45%)',
				},
				'gradient': {
					'slate-blue': 'hsl(252, 100%, 67%)', //background
					'royal-blue': 'hsl(241, 81%, 54%)', //background
					'violet-blue': 'hsla(256, 72%, 46%, 1)', //circle
					'persian-blue': 'hsla(241, 72%, 46%, 0)', //circle
				},
				'neutral': {
					'white': 'hsl(0, 0%, 100%)',
					'pale-blue': 'hsl(221, 100%, 96%)',
					'pale-lavender': 'hsl(241, 100%, 89%)',
					'gray-blue': 'hsl(224, 30%, 27%)',
				}
			}
		}
	}
}