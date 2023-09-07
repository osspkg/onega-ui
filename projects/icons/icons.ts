export const Icons = [
  {% for glyph in glyphs %}
  {icon: '{{ glyph.name }}', css: '{{ className }} {{ className }}-{{ glyph.name }}'},{% endfor %}
];

