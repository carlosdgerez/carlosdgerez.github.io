| Skill | Level |
| ---- | ---- |
{% assign skills = site.data.skills.technical | sort: "title" -%}
{% for skill in skills -%}
| {{skill.title}} | {{skill.level}} |
{% endfor %}


[
This code snippet is part of a table definition in Markdown. The table has two columns: "Skill" and "Level".
The table header and separator rows are defined first:

| Skill | Level |
| ---- | ---- |

Next, the code uses Liquid syntax to assign a sorted list of technical skills from a data file (site.data.skills.technical) to a variable named skills:

{% assign skills = site.data.skills.technical | sort: "title" -%}

The for loop iterates over each item in the skills array. For each skill, it creates a new row in the table, displaying the skill's title and level:

{% for skill in skills -%}
| {{skill.title}} | {{skill.level}} |
{% endfor %}

The {{skill.title}} and {{skill.level}} are placeholders that Liquid will replace with the actual values from the skills data. The loop ends with the  endfor  tag, which signifies the end of the iteration.

In summary, this code dynamically generates a Markdown table of technical skills and their levels by iterating over a sorted list of skills from a data source.
-->

| Skill | Level |
| ---- | ---- |
{% assign skills = site.data.skills.technical | sort: "title" -%}
{% for skill in skills -%}
| {{skill.title}} | {{skill.level}} |
{% endfor %} ]: #