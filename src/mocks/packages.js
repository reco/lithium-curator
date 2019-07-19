export default = {
  packages = [
    {
      title: 'Hero +3 Secondary',
      name: 'hero',
      packageFields: [
        {
          type: 'string',
          name: 'Headline'
        },
        {
          "type": "checkbox",
          "field": "showAuthor",
          "displayName": "Show Author"
        }
      ],
      contentFields: [
        {
          type: 'string',
          name: 'Headline',
          value: 'This is an amazing Headline'
        },
        {
          type: 'text',
          name: 'Story',
          value: 'This is an amazing story with alot of facy content.'
        }
      ]
    }
  ]
}
