let support_count = 0;

const introduce_btn = document.getElementById('introduce-btn');
const school_btn = document.getElementById('school-btn');
const support_btn = document.getElementById('support-btn');

let sections = [
	document.getElementById('section-introduce'),
	document.getElementById('section-school'),
	document.getElementById('section-support')
]

function show_section(target) {
	sections.forEach(section => {
		if(section === target) {
			section.hidden = false;
		} else
			section.hidden = true;
	});
}

introduce_btn.addEventListener('click', function() {
	show_section(sections[0]);
});

school_btn.addEventListener('click', function() {
	show_section(sections[1]);
});

support_btn.addEventListener('click', function() {
	show_section(sections[2]);
});

const support_add_btn = document.getElementById('support-add-btn');
const support_cnt = document.getElementById('support-cnt');

support_add_btn.addEventListener('click', function() {
	support_count++;
	support_cnt.textContent = `support count : ${support_count}`;
});