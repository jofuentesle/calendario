const slide2_2 = new Proxy({"src":"/_astro/slide2_2.DdaNSKRc.jpg","width":1800,"height":541,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Jordi/Documents/web/calendaris/src/assets/images/calendarios/slide2_2.jpg";
							}
							
							return target[name];
						}
					});

export { slide2_2 as default };
