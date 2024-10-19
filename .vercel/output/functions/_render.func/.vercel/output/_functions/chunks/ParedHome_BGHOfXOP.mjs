const ParedHome = new Proxy({"src":"/_astro/ParedHome.IeL8kpRA.jpg","width":768,"height":466,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Jordi/Documents/web/calendaris/src/assets/images/pared/ParedHome.jpg";
							}
							
							return target[name];
						}
					});

export { ParedHome as default };
