const ImgTbl = new Proxy({"src":"/_astro/SobremesaHome.B7OHViOF.jpg","width":768,"height":466,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Jordi/Documents/web/calendaris/src/assets/images/mesa/SobremesaHome.jpg";
							}
							
							return target[name];
						}
					});

export { ImgTbl as default };
