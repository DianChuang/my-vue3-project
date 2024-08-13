import globals from 'globals'
import pluginJs from '@eslint/js'
import pluginVue, { rules } from 'eslint-plugin-vue'

import eslintConfigPrettier from 'eslint-config-prettier'

export default [
	{
		files: ['**/*.{js,mjs,cjs,vue}'],
		rules: {
			// 禁止未使用的变量
			'no-unused-vars': 'error',
			// 禁止使用未声明的变量，除非在 /*global */ 注释中提及
			'no-undef': 'error',
			// 禁止debugger
			'no-debugger': 'error',
			// 箭头函数体周围需要大括号
			'arrow-body-style': ['error', 'always'],
			// 不允许末尾有分号
			'vue/no-setup-props-destructure': ['off'],
			semi: [2, 'never'],
		},
	},
	{ languageOptions: { globals: globals.browser } },
	pluginJs.configs.recommended,
	...pluginVue.configs['flat/essential'],
	eslintConfigPrettier,
]
