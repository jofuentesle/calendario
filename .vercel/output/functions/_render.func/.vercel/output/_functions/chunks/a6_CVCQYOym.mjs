const a6 = new Proxy({"src":"/_astro/a6.CFgw2UGa.png","width":180,"height":180,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Jordi/Documents/web/calendaris/src/assets/images/forms/a6.png";
							}
							
							return target[name];
						}
					});

export { a6 as default };
