const ImgTbl0 = new Proxy({"src":"/_astro/ParedEspiral.DqweNiWj.jpg","width":768,"height":466,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Jordi/Documents/web/calendaris/src/assets/images/pared/ParedEspiral.jpg";
							}
							
							return target[name];
						}
					});

export { ImgTbl0 as default };
