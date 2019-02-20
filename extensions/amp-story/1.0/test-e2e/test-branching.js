/**
 * Copyright 2019 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



describes.endtoend('AMP Story Branching', {
}, async env => {
  /** The total number of pages in the story */
  const PAGE_COUNT= 3;
  const pageWidth = 800;
  const pageHeight = 600;
  let controller;
  let ampDriver;

  function prop(el, name) {
    return controller.getElementProperty(el, name);
  }

  beforeEach(async() => {
    controller = env.controller;
    ampDriver = env.ampDriver;

    await controller.navigateTo('http://localhost:8000/test/manual/amp-story/helloworld.html');
    await ampDriver.toggleExperiment('amp-story-branching', true);

    await controller.setWindowRect({
      width: pageWidth,
      height: pageHeight,
    });
    await controller.navigateTo(
        'http://localhost:8000/test/manual/amp-story/helloworld.html');
  });

  it('should render the first page of the story', async() => {
    const el = await controller.findElement('#cover');

    await expect(prop(el, 'active')).to.not.be.null;
    await controller.takeScreenshot('screenshots/active-page.png');
  });

  it('should have an opacity mask with the sidebar, positioned correctly',
    aync () => {});

  it('should set the correct analytics variables upon manual navigation',
    aync () => {});

  it('should set the correct analytics variables upon auto-advance Media',
    aync () => {});

  it('should set the correct analytics variables upon auto-advance Time',
    aync () => {});

  it('should set the correct analytics variables upon auto-advance ads',
    aync () => {});
});
