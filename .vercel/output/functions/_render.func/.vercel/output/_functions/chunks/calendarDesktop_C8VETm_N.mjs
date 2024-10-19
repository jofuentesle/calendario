const ImgTb3 = new Proxy({"src":"/_astro/calendarDesktop.u1RlaVUK.png","width":450,"height":600,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Jordi/Documents/web/calendaris/src/assets/images/calendarios/calendarDesktop.png";
							}
							
							return target[name];
						}
					});

export { ImgTb3 as default };
