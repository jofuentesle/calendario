const calendarImg = new Proxy({"src":"/_astro/calendarImg.p1a88GKM.jpg","width":4000,"height":6000,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Jordi/Documents/web/calendaris/src/assets/images/calendarImg.jpg";
							}
							
							return target[name];
						}
					});

export { calendarImg as default };
