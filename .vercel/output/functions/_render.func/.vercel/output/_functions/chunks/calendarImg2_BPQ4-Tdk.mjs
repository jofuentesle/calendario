const calendarImg2 = new Proxy({"src":"/_astro/calendarImg2.CC0jKy2-.jpg","width":640,"height":981,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Jordi/Documents/web/calendaris/src/assets/images/calendarImg2.jpg";
							}
							
							return target[name];
						}
					});

export { calendarImg2 as default };
