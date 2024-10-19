const Img2 = new Proxy({"src":"/_astro/ParedEspiral1.r9T3ElA-.jpg","width":768,"height":466,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Jordi/Documents/web/calendaris/src/assets/images/pared/ParedEspiral1.jpg";
							}
							
							return target[name];
						}
					});

export { Img2 as default };
