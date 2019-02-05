'use strict';

const Parser = require('../lib/parser');
const Auction = require('../lib/auction');

describe('Parser', () => {
  describe('getAllAuctions', () => {
    test('with incorrect html', () => {
      expect(Array.isArray(Parser.getAllAuctions("<html></html>"))).toBe(true);
    });

    test('returns array of parsed auctions', () => {
      expect(Array.isArray(Parser.getAllAuctions(allAuctionsHTML))).toBe(true);
      expect(Parser.getAllAuctions(allAuctionsHTML)).toHaveLength(5);
      Parser.getAllAuctions(allAuctionsHTML).forEach(auction => {
        expect(auction).toBeInstanceOf(Auction);
      });
    });
  });
});

const allAuctionsHTML = `<div>
    <div data-box-name="items container" data-prototype-id="layout.container" data-prototype-version="7.0" data-skin-class-name="" data-implementation-version="4.3.0" data-analytics-category="layout.container" data-analytics-tags=""><a name="items-container"></a>
        <div class="_26e29_3TEPn v2144 _26e29_1bLR9 opbox-sheet-wrapper ">
            <div class="_26e29_2IhX3 opbox-sheet _26e29_2fPDv card " style="background: white;">
                <div data-box-name="items-v3" data-prototype-id="allegro.listing" data-prototype-version="3.9" data-skin-class-name="" data-implementation-version="5.13.1" data-analytics-enabled="" data-analytics-category="allegro.listing" data-analytics-tags="" data-seen="true" data-visible-for="1209263"><a name="items-v3"></a>
                    <div class="opbox-listing--base">
                        <div class="_1e83564">
                            <section class="_8c8b9d3 ef0c899">
                                <div class="ef0ac6a">Oferty sponsorowane<div class="e4f64fd">
                                        <div class="_8abaeee"><i class="_5cb7b6d _2921b06"></i>
                                            <div class="_006a24b"></div>
                                        </div>
                                    </div>
                                </div>
                                <section class="cb528e8">
                                    <article data-analytics-enabled="true" data-item="true" data-analytics-view-value="7708124115" data-analytics-view-custom-page="1" data-analytics-view-custom-index0="0" data-analytics-view-label="showSponsoredItems" data-analytics-view-custom-analyticsid="4d2f30c0-57ab-4fdb-963b-cc360ba959ef" class="_8d855a8" data-visible-for="14566022" data-seen="true">
                                    </article>
                                    <article data-analytics-enabled="true" data-item="true" data-analytics-view-value="7748611225" data-analytics-view-custom-page="1" data-analytics-view-custom-index0="1" data-analytics-view-label="showSponsoredItems" data-analytics-view-custom-analyticsid="11a018bd-da25-4d8e-b063-86a3ea6d5397" class="_8d855a8" data-visible-for="14567772" data-seen="true">
                                    </article>
                                </section>
                            </section>
                            <section class="_8c8b9d3">
                                <div class="ef0ac6a">
                                    <h2>Lista promowanych ofert</h2>
                                </div>
                                <section class="cb528e8">
                                    <article data-analytics-enabled="true" data-item="true" data-analytics-view-value="7770345909" data-analytics-view-custom-page="1" data-analytics-view-custom-index0="2" class="_8d855a8" data-visible-for="14590786" data-seen="true">
                                        <div class="a3ad614 ">
                                            <div class="_3e011d0 ">
                                                <div>
                                                    <div class="_639de09">
                                                        <div class="af753af "><a href="https://allegro.pl/oferta/macbook-pro-11-1-i5-2x2-4ghz-8gb-13-2013r-ic9-7770345909" class="_2bc857f"><img src="https://7.allegroimg.com/s128/0337ef/a99f39bc4a3eb638b3d9cb68f117" alt=""></a></div>
                                                    </div>
                                                    <div class="cf453b3 ">
                                                        <div class="ed33e3a">
                                                            <div class="_6d2cfc2">
                                                                <div class="_8a95023">
                                                                    <div class="_80e5785"><i class="_8601b27 _630649f "></i><a class="_935b2ad">OBSERWUJ</a></div>
                                                                </div>
                                                            </div>
                                                            <div class="_8243f1d">
                                                                <div class="dabb2d4">
                                                                    <div class="_2d0443a">
                                                                        <div class="e80a5ea"><a href="https://allegro.pl/oferta/macbook-pro-11-1-i5-2x2-4ghz-8gb-13-2013r-ic9-7770345909">
                                                                                <ul style="margin-left: 0px;">
                                                                                    <li class="_212486d"><img src="https://7.allegroimg.com/s360/0337ef/a99f39bc4a3eb638b3d9cb68f117"></li>
                                                                                    <li class="_212486d"><img src="https://5.allegroimg.com/s360/03328c/667729b44e979e7e58b85cc1a805"></li>
                                                                                    <li class="_212486d"><img src="https://3.allegroimg.com/s360/03b10a/b161bd6b4badab4d138cdd213f13"></li>
                                                                                    <li class="_212486d"><img src="https://d.allegroimg.com/s360/03092e/1ca6b6304307a8263b03b90dfe6d"></li>
                                                                                    <li class="_212486d"><img src="https://f.allegroimg.com/s360/03f2a6/84a5f0f64666b9aba5ba21c2ae4f"></li>
                                                                                    <li class="_212486d"><img src="https://5.allegroimg.com/s360/0354a8/6391fa8a42c48927cabbb3369a85"></li>
                                                                                    <li class="_212486d"><img src="https://2.allegroimg.com/s360/03e7b6/77b9f1734278bcf3952128635172"></li>
                                                                                    <li class="_212486d"><img src="https://9.allegroimg.com/s360/03ccc5/afa3e4624218b2968064c497b759"></li>
                                                                                    <li class="_212486d"><img src="https://8.allegroimg.com/s360/03e357/3a226fad4c0c8caf1663485e4fa8"></li>
                                                                                    <li class="_212486d"><img src="https://3.allegroimg.com/s360/03eb7b/9eb35f4f4abba5b1cb7cbac29773"></li>
                                                                                    <li class="_212486d"><img src="https://0.allegroimg.com/s360/03f545/a3ae17174417ba5634592c8a73d0"></li>
                                                                                </ul>
                                                                            </a><span class="_16181b0 ad2c4ae" style="display: none;"></span><span class="_16181b0 _5cc64a2" style="display: block;"></span></div>
                                                                    </div>
                                                                    <div class="_115444c">
                                                                        <div class="afb66ad">
                                                                            <div>
                                                                                <ul class="gallery__thumbnails" style="margin-left: 0px;">
                                                                                    <li><span class="d70381a
                                        d9d307b"><img src="https://7.allegroimg.com/s64/0337ef/a99f39bc4a3eb638b3d9cb68f117" alt=""></span></li>
                                                                                    <li><span class="
                                        d9d307b"><img src="https://5.allegroimg.com/s64/03328c/667729b44e979e7e58b85cc1a805" alt=""></span></li>
                                                                                    <li><span class="
                                        d9d307b"><img src="https://3.allegroimg.com/s64/03b10a/b161bd6b4badab4d138cdd213f13" alt=""></span></li>
                                                                                    <li><span class="
                                        d9d307b"><img src="https://d.allegroimg.com/s64/03092e/1ca6b6304307a8263b03b90dfe6d" alt=""></span></li>
                                                                                    <li><span class="
                                        d9d307b"><img src="https://f.allegroimg.com/s64/03f2a6/84a5f0f64666b9aba5ba21c2ae4f" alt=""></span></li>
                                                                                    <li><span class="
                                        d9d307b"><img src="https://5.allegroimg.com/s64/0354a8/6391fa8a42c48927cabbb3369a85" alt=""></span></li>
                                                                                    <li><span class="
                                        d9d307b"><img src="https://2.allegroimg.com/s64/03e7b6/77b9f1734278bcf3952128635172" alt=""></span></li>
                                                                                    <li><span class="
                                        d9d307b"><img src="https://9.allegroimg.com/s64/03ccc5/afa3e4624218b2968064c497b759" alt=""></span></li>
                                                                                    <li><span class="
                                        d9d307b"><img src="https://8.allegroimg.com/s64/03e357/3a226fad4c0c8caf1663485e4fa8" alt=""></span></li>
                                                                                    <li><span class="
                                        d9d307b"><img src="https://3.allegroimg.com/s64/03eb7b/9eb35f4f4abba5b1cb7cbac29773" alt=""></span></li>
                                                                                    <li><span class="
                                        d9d307b"><img src="https://0.allegroimg.com/s64/03f545/a3ae17174417ba5634592c8a73d0" alt=""></span></li>
                                                                                </ul>
                                                                            </div>
                                                                        </div><i class="cec1644" style="display: none;"></i><i class="_628ad4f" style="display: block;"></i>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="_9ecb2cc">
                                                                <h2 class="ebc9be2  "><a href="https://allegro.pl/oferta/macbook-pro-11-1-i5-2x2-4ghz-8gb-13-2013r-ic9-7770345909" title="">MACBOOK PRO 11.1 i5 2x2.4GHz 8GB 13' 2013R IC9</a></h2>
                                                                <div class="a5729fe _1349ac8">
                                                                    <div class="ac272c7"><a href="https://allegro.pl/uzytkownik/digitalspzoo">digitalspzoo</a><span>firma</span></div>
                                                                </div>
                                                                <div class="_8790b22"><span class="cc5390e ">2 dni do końca</span>
                                                                    <div class="_80e0985">
                                                                        <div class="_906bb92"><span class="_16ff71a"><span class="_611a83b">255<span>,</span><span class="_7c9589f">00</span><span class="da28f5a"> zł</span></span></span></div>
                                                                    </div>
                                                                </div>
                                                                <div class="a5729fe e25a513"><span class="_41ddd69">12 osób licytuje</span></div>
                                                                <div class="a5729fe _1f2c60e">Lokalizacja: Szczecin</div>
                                                                <div class="a5729fe _79022c3 ">
                                                                    <div class="_0765291"><span class="c2c3fdb "><strong>97,7%</strong><i>poleca sprzedawcę</i></span></div>
                                                                    <div class="a1583a1">
                                                                        <div class="ef149af  f2260fa"><i>280,00 zł</i><i> z dostawą</i></div>
                                                                    </div>
                                                                </div>
                                                                <div class="availability-info"><strong>1</strong> dostępna sztuka</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="_737cd7b">
                                                    <div class="_0e3c58d">
                                                        <h2 class="ebc9be2  "><a href="https://allegro.pl/oferta/macbook-pro-11-1-i5-2x2-4ghz-8gb-13-2013r-ic9-7770345909" title="">MACBOOK PRO 11.1 i5 2x2.4GHz 8GB 13' 2013R IC9</a></h2>
                                                        <div class="_7e08ebc a5de709 ">
                                                            <dl><dt>Stan</dt>
                                                                <dd><span class="">Używany</span></dd><dt>Wielkość matrycy</dt>
                                                                <dd><span class="">13" - 13.9"</span></dd><dt>Seria procesora</dt>
                                                                <dd><span class="">Intel Core i5</span></dd><dt>Typ dysku twardego</dt>
                                                                <dd><span class="">brak</span></dd>
                                                            </dl>
                                                        </div>
                                                    </div>
                                                    <div class="f6aa2b7"><span class="cc5390e ">2 dni do końca</span>
                                                        <div class="_25c6d6f">
                                                            <div class="_906bb92"><span class="_16ff71a"><span class="_611a83b">255<span>,</span><span class="_7c9589f">00</span><span class="da28f5a">
                                                                            <!-- -->zł</span></span></span></div>
                                                        </div>
                                                        <div class="_3e5bef3">
                                                            <div class="ef149af  "><i>280,00 zł</i><i> z dostawą</i></div>
                                                        </div>
                                                    </div>
                                                    <div class="_98e67bc">
                                                        <div class="f07108f"><span class="_41ddd69">12 osób licytuje</span></div>
                                                    </div>
                                                    <div class="ba7072d"></div>
                                                    <div class="c8a06c9"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                    <article data-analytics-enabled="true" data-item="true" data-analytics-view-value="7462454462" data-analytics-view-custom-page="1" data-analytics-view-custom-index0="3" class="_8d855a8" data-visible-for="14592577" data-seen="true">
                                        <div class="a3ad614 ">
                                            <div class="_3e011d0 _197da65">
                                                <div>
                                                    <div class="_639de09">
                                                        <div class="af753af "><a href="https://allegro.pl/oferta/apple-macbook-air-13-mqd32ze-a-i5-8gb-128ssd-7462454462" class="_2bc857f"><img src="https://6.allegroimg.com/s128/03f4e8/d5138c6c49e5a8f5ba7192dd87e6" alt=""></a></div>
                                                    </div>
                                                    <div class="cf453b3 ">
                                                        <div class="ed33e3a">
                                                            <div class="_6d2cfc2">
                                                                <div class="_8a95023">
                                                                    <div class="_80e5785"><i class="_8601b27 _630649f "></i><a class="_935b2ad">OBSERWUJ</a></div>
                                                                </div>
                                                            </div>
                                                            <div class="_8243f1d">
                                                                <div class="dabb2d4">
                                                                    <div class="_2d0443a">
                                                                        <div class="e80a5ea"><a href="https://allegro.pl/oferta/apple-macbook-air-13-mqd32ze-a-i5-8gb-128ssd-7462454462">
                                                                                <ul style="margin-left: 0px;">
                                                                                    <li class="_212486d"><img src="https://6.allegroimg.com/s360/03f4e8/d5138c6c49e5a8f5ba7192dd87e6"></li>
                                                                                    <li class="_212486d"><img src="https://5.allegroimg.com/s360/03ca11/0decdc454218bb1c4c0005173e15"></li>
                                                                                </ul>
                                                                            </a><span class="_16181b0 ad2c4ae" style="display: none;"></span><span class="_16181b0 _5cc64a2" style="display: block;"></span></div>
                                                                    </div>
                                                                    <div class="_115444c">
                                                                        <div class="afb66ad">
                                                                            <div>
                                                                                <ul class="gallery__thumbnails" style="margin-left: 0px;">
                                                                                    <li><span class="d70381a
                                        d9d307b"><img src="https://6.allegroimg.com/s64/03f4e8/d5138c6c49e5a8f5ba7192dd87e6" alt=""></span></li>
                                                                                    <li><span class="
                                        d9d307b"><img src="https://5.allegroimg.com/s64/03ca11/0decdc454218bb1c4c0005173e15" alt=""></span></li>
                                                                                </ul>
                                                                            </div>
                                                                        </div><i class="cec1644" style="display: none;"></i><i class="_628ad4f" style="display: none;"></i>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="_9ecb2cc">
                                                                <h2 class="ebc9be2 a998029 "><a href="https://allegro.pl/oferta/apple-macbook-air-13-mqd32ze-a-i5-8gb-128ssd-7462454462" title="">Apple Macbook Air 13' MQD32ZE/A i5 8GB 128SSD</a></h2>
                                                                <div class="a5729fe _1349ac8">
                                                                    <div class="ac272c7"><a href="https://allegro.pl/uzytkownik/PCpremium">PCpremium</a><span>firma</span></div>
                                                                </div>
                                                                <div class="_8790b22">
                                                                    <div class="_80e0985">
                                                                        <div class="_906bb92"><span class="_16ff71a"><span class="_611a83b">3 749<span>,</span><span class="_7c9589f">00</span><span class="da28f5a"> zł</span></span></span></div>
                                                                    </div>
                                                                    <div class="_3ffbbd8 _2e66342"><span>kup teraz</span></div>
                                                                </div>
                                                                <div class="a5729fe e25a513"><span class="_41ddd69">150 osób kupiło</span></div>
                                                                <div class="a5729fe _1f2c60e">Lokalizacja: Poznań</div>
                                                                <div class="a5729fe _79022c3 ">
                                                                    <div class="_0765291"><span class="c2c3fdb "><strong>99,9%</strong><i>poleca sprzedawcę</i></span></div>
                                                                    <div class="a1583a1">
                                                                        <div class="ef149af _436696a f2260fa"><i>darmowa</i> <i>dostawa</i></div>
                                                                    </div>
                                                                </div><button class="_1b070f7">dodaj do koszyka</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="_737cd7b">
                                                    <div class="_0e3c58d">
                                                        <h2 class="ebc9be2 a998029 "><a href="https://allegro.pl/oferta/apple-macbook-air-13-mqd32ze-a-i5-8gb-128ssd-7462454462" title="">Apple Macbook Air 13' MQD32ZE/A i5 8GB 128SSD</a></h2>
                                                        <div class="_7e08ebc a5de709 ">
                                                            <dl><dt>Stan</dt>
                                                                <dd><span class="">Nowy</span></dd><dt>Wielkość matrycy</dt>
                                                                <dd><span class="">13" - 13.9"</span></dd><dt>Seria procesora</dt>
                                                                <dd><span class="">Intel Core i5</span></dd><dt>Typ dysku twardego</dt>
                                                                <dd><span class="">SSD</span></dd>
                                                            </dl>
                                                        </div>
                                                    </div>
                                                    <div class="f6aa2b7">
                                                        <div class="a8a9216">
                                                            <div class="_2540c63"><span style="background-color:#1BB826" class="_2582670">-21%</span><s class="_0788000">4799,00 zł</s></div>
                                                        </div>
                                                        <div class="_25c6d6f">
                                                            <div class="_906bb92"><span class="_16ff71a"><span class="_611a83b">3 749<span>,</span><span class="_7c9589f">00</span><span class="da28f5a">
                                                                            <!-- -->zł</span></span></span></div>
                                                        </div>
                                                        <div class="_3ffbbd8 _2e66342"><span>kup teraz</span></div>
                                                        <div class="a8a9216">
                                                            <div class="_2540c63"><span class="_0c7422a"><i>187,45
                                                                        <!-- -->
                                                                        <!-- -->zł</i>x
                                                                    <!-- -->20
                                                                    <!-- -->
                                                                    <!-- -->rat</span><span style="background-color:#00aeef" class="_2582670">raty zero</span><span class="_0788000">szczegóły w ofercie</span></div>
                                                        </div>
                                                        <div class="_3e5bef3">
                                                            <div class="ef149af _436696a "><i>darmowa</i> <i>dostawa</i></div>
                                                        </div>
                                                    </div>
                                                    <div class="_98e67bc">
                                                        <div class="f07108f"><span class="_41ddd69">150 osób kupiło</span></div>
                                                    </div>
                                                    <div class="ba7072d"><button class="eed0fc7">dodaj do koszyka</button></div>
                                                    <div class="c8a06c9"><button class="eed0fc7">do koszyka</button></div>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                    <script>
                                        document.body.scrollTop;
                                    </script>
                                    <article data-analytics-enabled="true" data-item="true" data-analytics-view-value="7770382446" data-analytics-view-custom-page="1" data-analytics-view-custom-index0="4" class="_8d855a8" data-visible-for="14932802" data-seen="true">
                                        <div class="a3ad614 ">
                                            <div class="_3e011d0 _197da65">
                                                <div>
                                                    <div class="_639de09">
                                                        <div class="af753af "><a href="https://allegro.pl/oferta/macbook-pro-15-i7-4x2-8ghz-512ssd-16gb-nvidia-yb18-7770382446" class="_2bc857f"><img data-src="https://7.allegroimg.com/s128/0337ef/a99f39bc4a3eb638b3d9cb68f117" alt="" src="https://7.allegroimg.com/s128/0337ef/a99f39bc4a3eb638b3d9cb68f117" class=" lazyloaded"></a></div>
                                                    </div>
                                                    <div class="cf453b3 " style="top: -204px; bottom: auto;">
                                                        <div class="ed33e3a">
                                                            <div class="_6d2cfc2">
                                                                <div class="_8a95023">
                                                                    <div class="_80e5785"><i class="_8601b27 _630649f"></i><a class="_935b2ad">OBSERWUJ</a></div>
                                                                </div>
                                                            </div>
                                                            <div class="_8243f1d">
                                                                <div class="dabb2d4">
                                                                    <div class="_2d0443a">
                                                                        <div class="e80a5ea"><a href="https://allegro.pl/oferta/macbook-pro-15-i7-4x2-8ghz-512ssd-16gb-nvidia-yb18-7770382446">
                                                                                <ul style="margin-left: 0px;">
                                                                                    <li class="_212486d"><img src="https://7.allegroimg.com/s360/0337ef/a99f39bc4a3eb638b3d9cb68f117"></li>
                                                                                    <li class="_212486d"><img src="https://b.allegroimg.com/s360/038cb8/a8e71945490cafb86da32306223b"></li>
                                                                                    <li class="_212486d"><img src="https://8.allegroimg.com/s360/039aad/58c0355a42fd9fd9448fcf6f6068"></li>
                                                                                    <li class="_212486d"><img src="https://b.allegroimg.com/s360/036c7c/b0d6cd624c15ae3f1d28522f13db"></li>
                                                                                    <li class="_212486d"><img src="https://1.allegroimg.com/s360/035442/c9048580418aa73707e29cf9a411"></li>
                                                                                    <li class="_212486d"><img src="https://5.allegroimg.com/s360/03c6f4/d3bcae90403a860ea9748faffa85"></li>
                                                                                    <li class="_212486d"><img src="https://e.allegroimg.com/s360/03da74/fbbecd094fdba193e6e8f6c7f8de"></li>
                                                                                    <li class="_212486d"><img src="https://7.allegroimg.com/s360/03c79f/7f8e11c94fb88b232ade2e8bc1d7"></li>
                                                                                    <li class="_212486d"><img src="https://3.allegroimg.com/s360/0337e7/f21024ec4ddca94871a385228583"></li>
                                                                                    <li class="_212486d"><img src="https://a.allegroimg.com/s360/0383de/7eec18d04fdcadd1510c3217163a"></li>
                                                                                    <li class="_212486d"><img src="https://1.allegroimg.com/s360/030e30/5738115142d38c5a09533e9b65f1"></li>
                                                                                    <li class="_212486d"><img src="https://9.allegroimg.com/s360/03d285/53f15dc44c3b9c720c99dc7c4a09"></li>
                                                                                    <li class="_212486d"><img src="https://6.allegroimg.com/s360/0364c8/1e5952f042aaa1ab0661471992f6"></li>
                                                                                </ul>
                                                                            </a><span class="_16181b0 ad2c4ae" style="display: none;"></span><span class="_16181b0 _5cc64a2" style="display: block;"></span></div>
                                                                    </div>
                                                                    <div class="_115444c">
                                                                        <div class="afb66ad">
                                                                            <div>
                                                                                <ul class="gallery__thumbnails" style="margin-left: 0px;">
                                                                                    <li><span class="d70381a
                                        d9d307b"><img src="https://7.allegroimg.com/s64/0337ef/a99f39bc4a3eb638b3d9cb68f117" alt=""></span></li>
                                                                                    <li><span class="
                                        d9d307b"><img src="https://b.allegroimg.com/s64/038cb8/a8e71945490cafb86da32306223b" alt=""></span></li>
                                                                                    <li><span class="
                                        d9d307b"><img src="https://8.allegroimg.com/s64/039aad/58c0355a42fd9fd9448fcf6f6068" alt=""></span></li>
                                                                                    <li><span class="
                                        d9d307b"><img src="https://b.allegroimg.com/s64/036c7c/b0d6cd624c15ae3f1d28522f13db" alt=""></span></li>
                                                                                    <li><span class="
                                        d9d307b"><img src="https://1.allegroimg.com/s64/035442/c9048580418aa73707e29cf9a411" alt=""></span></li>
                                                                                    <li><span class="
                                        d9d307b"><img src="https://5.allegroimg.com/s64/03c6f4/d3bcae90403a860ea9748faffa85" alt=""></span></li>
                                                                                    <li><span class="
                                        d9d307b"><img src="https://e.allegroimg.com/s64/03da74/fbbecd094fdba193e6e8f6c7f8de" alt=""></span></li>
                                                                                    <li><span class="
                                        d9d307b"><img src="https://7.allegroimg.com/s64/03c79f/7f8e11c94fb88b232ade2e8bc1d7" alt=""></span></li>
                                                                                    <li><span class="
                                        d9d307b"><img src="https://3.allegroimg.com/s64/0337e7/f21024ec4ddca94871a385228583" alt=""></span></li>
                                                                                    <li><span class="
                                        d9d307b"><img src="https://a.allegroimg.com/s64/0383de/7eec18d04fdcadd1510c3217163a" alt=""></span></li>
                                                                                    <li><span class="
                                        d9d307b"><img src="https://1.allegroimg.com/s64/030e30/5738115142d38c5a09533e9b65f1" alt=""></span></li>
                                                                                    <li><span class="
                                        d9d307b"><img src="https://9.allegroimg.com/s64/03d285/53f15dc44c3b9c720c99dc7c4a09" alt=""></span></li>
                                                                                    <li><span class="
                                        d9d307b"><img src="https://6.allegroimg.com/s64/0364c8/1e5952f042aaa1ab0661471992f6" alt=""></span></li>
                                                                                </ul>
                                                                            </div>
                                                                        </div><i class="cec1644" style="display: none;"></i><i class="_628ad4f" style="display: block;"></i>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="_9ecb2cc">
                                                                <h2 class="ebc9be2 a998029 "><a href="https://allegro.pl/oferta/macbook-pro-15-i7-4x2-8ghz-512ssd-16gb-nvidia-yb18-7770382446" title="">MACBOOK PRO 15 i7 4x2.8GHz 512SSD 16GB NVIDIA YB18</a></h2>
                                                                <div class="a5729fe _1349ac8">
                                                                    <div class="ac272c7"><a href="https://allegro.pl/uzytkownik/digitalspzoo">digitalspzoo</a><span>firma</span></div>
                                                                </div>
                                                                <div class="_8790b22"><span class="cc5390e ">2 dni do końca</span>
                                                                    <div class="_80e0985">
                                                                        <div class="_906bb92"><span class="_16ff71a"><span class="_611a83b">898<span>,</span><span class="_7c9589f">00</span><span class="da28f5a"> zł</span></span></span></div>
                                                                    </div>
                                                                </div>
                                                                <div class="a5729fe e25a513"><span class="_41ddd69">9 osób licytuje</span></div>
                                                                <div class="a5729fe _1f2c60e">Lokalizacja: Szczecin</div>
                                                                <div class="a5729fe _79022c3 ">
                                                                    <div class="_0765291"><span class="c2c3fdb "><strong>97,7%</strong><i>poleca sprzedawcę</i></span></div>
                                                                    <div class="a1583a1">
                                                                        <div class="ef149af  f2260fa"><i>923,00 zł</i><i> z dostawą</i></div>
                                                                    </div>
                                                                </div>
                                                                <div class="availability-info"><strong>1</strong> dostępna sztuka</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="_737cd7b">
                                                    <div class="_0e3c58d">
                                                        <h2 class="ebc9be2 a998029 "><a href="https://allegro.pl/oferta/macbook-pro-15-i7-4x2-8ghz-512ssd-16gb-nvidia-yb18-7770382446" title="">MACBOOK PRO 15 i7 4x2.8GHz 512SSD 16GB NVIDIA YB18</a></h2>
                                                        <div class="_7e08ebc a5de709 ">
                                                            <dl><dt>Stan</dt>
                                                                <dd><span class="">Używany</span></dd><dt>Wielkość matrycy</dt>
                                                                <dd><span class="">15" - 15.9"</span></dd><dt>Seria procesora</dt>
                                                                <dd><span class="">Intel Core i7</span></dd><dt>Typ dysku twardego</dt>
                                                                <dd><span class="">SSD</span></dd>
                                                            </dl>
                                                        </div>
                                                    </div>
                                                    <div class="f6aa2b7"><span class="cc5390e ">2 dni do końca</span>
                                                        <div class="_25c6d6f">
                                                            <div class="_906bb92"><span class="_16ff71a"><span class="_611a83b">898<span>,</span><span class="_7c9589f">00</span><span class="da28f5a">
                                                                            <!-- -->zł</span></span></span></div>
                                                        </div>
                                                        <div class="_3e5bef3">
                                                            <div class="ef149af  "><i>923,00 zł</i><i> z dostawą</i></div>
                                                        </div>
                                                    </div>
                                                    <div class="_98e67bc">
                                                        <div class="f07108f"><span class="_41ddd69">9 osób licytuje</span></div>
                                                    </div>
                                                    <div class="ba7072d"></div>
                                                    <div class="c8a06c9"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                    <script>
                                        document.body.scrollTop;
                                    </script>
                                    <article data-analytics-enabled="true" data-item="true" data-analytics-view-value="7769649299" data-analytics-view-custom-page="1" data-analytics-view-custom-index0="21" class="_8d855a8" data-seen="true" data-visible-for="7427">
                                        <div class="a3ad614 ">
                                            <div class="_3e011d0 ">
                                                <div>
                                                    <div class="_639de09">
                                                        <div class="af753af "><a href="https://allegro.pl/oferta/macbook-pro-15-11-4-i7-3-4ghz-16gb-240gb-ssd-2015r-7769649299" class="_2bc857f"><img data-src="https://6.allegroimg.com/s128/03c949/83a91f474b9ebab75bcc90a45c36" alt="" src="https://6.allegroimg.com/s128/03c949/83a91f474b9ebab75bcc90a45c36" class=" lazyloaded"></a></div>
                                                    </div>
                                                    <div class="cf453b3 ">
                                                        <div class="ed33e3a">
                                                            <div class="_6d2cfc2">
                                                                <div class="_8a95023">
                                                                    <div class="_80e5785"><i class="_8601b27 _630649f "></i><a class="_935b2ad">OBSERWUJ</a></div>
                                                                </div>
                                                            </div>
                                                            <div class="_8243f1d">
                                                                <div class="dabb2d4">
                                                                    <div class="_2d0443a">
                                                                        <div class="e80a5ea"><a href="https://allegro.pl/oferta/macbook-pro-15-11-4-i7-3-4ghz-16gb-240gb-ssd-2015r-7769649299">
                                                                                <ul style="margin-left: 0px;">
                                                                                    <li class="_212486d"><img src="https://6.allegroimg.com/s360/03c949/83a91f474b9ebab75bcc90a45c36"></li>
                                                                                    <li class="_212486d"><img src="https://4.allegroimg.com/s360/01fbc1/75050f99492ab85fd6b9a0d9c0b4"></li>
                                                                                    <li class="_212486d"><img src="https://a.allegroimg.com/s360/039897/255785174d1c9956a0083eea65da"></li>
                                                                                    <li class="_212486d"><img src="https://6.allegroimg.com/s360/039fc2/b572838845819e46642b34a98e66"></li>
                                                                                    <li class="_212486d"><img src="https://5.allegroimg.com/s360/03018e/aac9c161445fac6daad36ae6f8e5"></li>
                                                                                    <li class="_212486d"><img src="https://b.allegroimg.com/s360/03dbeb/3dcb9a184ab3a3fce9ba12d5f2fb"></li>
                                                                                </ul>
                                                                            </a><span class="_16181b0 ad2c4ae" style="display: none;"></span><span class="_16181b0 _5cc64a2" style="display: block;"></span></div>
                                                                    </div>
                                                                    <div class="_115444c">
                                                                        <div class="afb66ad">
                                                                            <div>
                                                                                <ul class="gallery__thumbnails" style="margin-left: 0px;">
                                                                                    <li><span class="d70381a
                                        d9d307b"><img src="https://6.allegroimg.com/s64/03c949/83a91f474b9ebab75bcc90a45c36" alt=""></span></li>
                                                                                    <li><span class="
                                        d9d307b"><img src="https://4.allegroimg.com/s64/01fbc1/75050f99492ab85fd6b9a0d9c0b4" alt=""></span></li>
                                                                                    <li><span class="
                                        d9d307b"><img src="https://a.allegroimg.com/s64/039897/255785174d1c9956a0083eea65da" alt=""></span></li>
                                                                                    <li><span class="
                                        d9d307b"><img src="https://6.allegroimg.com/s64/039fc2/b572838845819e46642b34a98e66" alt=""></span></li>
                                                                                    <li><span class="
                                        d9d307b"><img src="https://5.allegroimg.com/s64/03018e/aac9c161445fac6daad36ae6f8e5" alt=""></span></li>
                                                                                    <li><span class="
                                        d9d307b"><img src="https://b.allegroimg.com/s64/03dbeb/3dcb9a184ab3a3fce9ba12d5f2fb" alt=""></span></li>
                                                                                </ul>
                                                                            </div>
                                                                        </div><i class="cec1644" style="display: none;"></i><i class="_628ad4f" style="display: block;"></i>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="_9ecb2cc">
                                                                <h2 class="ebc9be2  "><a href="https://allegro.pl/oferta/macbook-pro-15-11-4-i7-3-4ghz-16gb-240gb-ssd-2015r-7769649299" title="">MacBook PRO 15 11.4 i7-3.4Ghz 16GB 240GB SSD 2015r</a></h2>
                                                                <div class="a5729fe _1349ac8">
                                                                    <div class="ac272c7"><a href="https://allegro.pl/uzytkownik/dell2000">dell2000</a><span>firma</span></div>
                                                                </div>
                                                                <div class="_8790b22">
                                                                    <div class="_80e0985">
                                                                        <div class="_906bb92"><span class="_16ff71a"><span class="_611a83b">4 400<span>,</span><span class="_7c9589f">00</span><span class="da28f5a"> zł</span></span></span></div>
                                                                    </div>
                                                                    <div class="_3ffbbd8 _2e66342"><span>kup teraz</span></div>
                                                                </div>
                                                                <div class="a5729fe e25a513"></div>
                                                                <div class="a5729fe _1f2c60e">Lokalizacja: Wrocław</div>
                                                                <div class="a5729fe _79022c3 ">
                                                                    <div class="_0765291"><span class="c2c3fdb "><strong>98,7%</strong><i>poleca sprzedawcę</i></span></div>
                                                                    <div class="a1583a1">
                                                                        <div class="ef149af  f2260fa"><i>4 430,00 zł</i><i> z dostawą</i></div>
                                                                    </div>
                                                                </div><button class="_1b070f7">dodaj do koszyka</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="_737cd7b">
                                                    <div class="_0e3c58d">
                                                        <h2 class="ebc9be2  "><a href="https://allegro.pl/oferta/macbook-pro-15-11-4-i7-3-4ghz-16gb-240gb-ssd-2015r-7769649299" title="">MacBook PRO 15 11.4 i7-3.4Ghz 16GB 240GB SSD 2015r</a></h2>
                                                        <div class="_7e08ebc a5de709 ">
                                                            <dl><dt>Stan</dt>
                                                                <dd><span class="">Używany</span></dd><dt>Wielkość matrycy</dt>
                                                                <dd><span class="">15" - 15.9"</span></dd><dt>Seria procesora</dt>
                                                                <dd><span class="">Intel Core i7</span></dd><dt>Typ dysku twardego</dt>
                                                                <dd><span class="">SSD</span></dd>
                                                            </dl>
                                                        </div>
                                                    </div>
                                                    <div class="f6aa2b7">
                                                        <div class="_25c6d6f">
                                                            <div class="_906bb92"><span class="_16ff71a"><span class="_611a83b">4 400<span>,</span><span class="_7c9589f">00</span><span class="da28f5a">
                                                                            <!-- -->zł</span></span></span></div>
                                                        </div>
                                                        <div class="_3ffbbd8 _2e66342"><span>kup teraz</span></div>
                                                        <div class="a8a9216">
                                                            <div class="_2540c63"><span class="_0c7422a"><i>220,00
                                                                        <!-- -->
                                                                        <!-- -->zł</i>x
                                                                    <!-- -->20
                                                                    <!-- -->
                                                                    <!-- -->rat</span><span style="background-color:#00aeef" class="_2582670">raty zero</span><span class="_0788000">szczegóły w ofercie</span></div>
                                                        </div>
                                                        <div class="_3e5bef3">
                                                            <div class="ef149af  "><i>4 430,00 zł</i><i> z dostawą</i></div>
                                                        </div>
                                                    </div>
                                                    <div class="_98e67bc">
                                                        <div class="f07108f"><span class="_41ddd69"></span></div>
                                                    </div>
                                                    <div class="ba7072d"><button class="eed0fc7">dodaj do koszyka</button></div>
                                                    <div class="c8a06c9"><button class="eed0fc7">do koszyka</button></div>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                    <article data-analytics-enabled="true" data-item="true" data-analytics-view-value="7462254284" data-analytics-view-custom-page="1" data-analytics-view-custom-index0="61" class="_8d855a8" data-visible-for="141843" data-seen="true">
                                        <div class="a3ad614 ">
                                            <div class="_3e011d0 ">
                                                <div>
                                                    <div class="_639de09">
                                                        <div class="af753af "><a href="https://allegro.pl/oferta/macbook-pro-13-i5-8gb-256gb-iris-655-space-2018-7462254284" class="_2bc857f"><img data-src="https://6.allegroimg.com/s128/034cd5/a1988d044a60906541591f1746e6" alt="" src="https://6.allegroimg.com/s128/034cd5/a1988d044a60906541591f1746e6" class=" lazyloaded"></a></div>
                                                        <div class="e4cacd0"><span class="_66395d6">dostępne warianty</span></div>
                                                        <div class="fb3fe21"><span class="c225353">WARIANTY</span></div>
                                                    </div>
                                                    <div class="cf453b3 ">
                                                        <div class="ed33e3a">
                                                            <div class="_6d2cfc2">
                                                                <div class="_8a95023">
                                                                    <div class="_80e5785"><i class="_8601b27 _630649f "></i><a class="_935b2ad">OBSERWUJ</a></div>
                                                                </div>
                                                            </div>
                                                            <div class="_8243f1d">
                                                                <div class="dabb2d4">
                                                                    <div class="_2d0443a">
                                                                        <div class="e80a5ea"><a href="https://allegro.pl/oferta/macbook-pro-13-i5-8gb-256gb-iris-655-space-2018-7462254284">
                                                                                <ul style="margin-left: 0px;">
                                                                                    <li class="_212486d"><img src="https://6.allegroimg.com/s360/034cd5/a1988d044a60906541591f1746e6"></li>
                                                                                    <li class="_212486d"><img src="https://7.allegroimg.com/s360/03f5a4/ce45a7314a788907c6fc8e6c9da7"></li>
                                                                                    <li class="_212486d"><img src="https://c.allegroimg.com/s360/03624a/bbd6992c47f5aaf9ff01f1ecef7c"></li>
                                                                                    <li class="_212486d"><img src="https://4.allegroimg.com/s360/038dd1/05f3e33c4ccb8424e6976117af84"></li>
                                                                                    <li class="_212486d"><img src="https://d.allegroimg.com/s360/039954/93ee38df43369d7e06e64c9c9d3d"></li>
                                                                                    <li class="_212486d"><img src="https://3.allegroimg.com/s360/035bb0/a88e34794971820c64a899a77943"></li>
                                                                                    <li class="_212486d"><img src="https://c.allegroimg.com/s360/030ccc/063707144404bdc8d11cbfc187dc"></li>
                                                                                    <li class="_212486d"><img src="https://4.allegroimg.com/s360/030e88/93e2367b40d59d6b39252de16594"></li>
                                                                                    <li class="_212486d"><img src="https://9.allegroimg.com/s360/036fa4/e0662cac4c11a057cd6a0260dd79"></li>
                                                                                    <li class="_212486d"><img src="https://f.allegroimg.com/s360/0341d1/c26982824c56997715624fbf3e3f"></li>
                                                                                </ul>
                                                                            </a><span class="_16181b0 ad2c4ae" style="display: none;"></span><span class="_16181b0 _5cc64a2" style="display: block;"></span></div>
                                                                    </div>
                                                                    <div class="_115444c">
                                                                        <div class="afb66ad">
                                                                            <div>
                                                                                <ul class="gallery__thumbnails" style="margin-left: 0px;">
                                                                                    <li><span class="d70381a
                                        d9d307b"><img src="https://6.allegroimg.com/s64/034cd5/a1988d044a60906541591f1746e6" alt=""></span></li>
                                                                                    <li><span class="
                                        d9d307b"><img src="https://7.allegroimg.com/s64/03f5a4/ce45a7314a788907c6fc8e6c9da7" alt=""></span></li>
                                                                                    <li><span class="
                                        d9d307b"><img src="https://c.allegroimg.com/s64/03624a/bbd6992c47f5aaf9ff01f1ecef7c" alt=""></span></li>
                                                                                    <li><span class="
                                        d9d307b"><img src="https://4.allegroimg.com/s64/038dd1/05f3e33c4ccb8424e6976117af84" alt=""></span></li>
                                                                                    <li><span class="
                                        d9d307b"><img src="https://d.allegroimg.com/s64/039954/93ee38df43369d7e06e64c9c9d3d" alt=""></span></li>
                                                                                    <li><span class="
                                        d9d307b"><img src="https://3.allegroimg.com/s64/035bb0/a88e34794971820c64a899a77943" alt=""></span></li>
                                                                                    <li><span class="
                                        d9d307b"><img src="https://c.allegroimg.com/s64/030ccc/063707144404bdc8d11cbfc187dc" alt=""></span></li>
                                                                                    <li><span class="
                                        d9d307b"><img src="https://4.allegroimg.com/s64/030e88/93e2367b40d59d6b39252de16594" alt=""></span></li>
                                                                                    <li><span class="
                                        d9d307b"><img src="https://9.allegroimg.com/s64/036fa4/e0662cac4c11a057cd6a0260dd79" alt=""></span></li>
                                                                                    <li><span class="
                                        d9d307b"><img src="https://f.allegroimg.com/s64/0341d1/c26982824c56997715624fbf3e3f" alt=""></span></li>
                                                                                </ul>
                                                                            </div>
                                                                        </div><i class="cec1644" style="display: none;"></i><i class="_628ad4f" style="display: block;"></i>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="_9ecb2cc">
                                                                <h2 class="ebc9be2  "><a href="https://allegro.pl/oferta/macbook-pro-13-i5-8gb-256gb-iris-655-space-2018-7462254284" title="">MacBook Pro 13 i5 8GB 256GB Iris 655 Space 2018</a></h2>
                                                                <div class="a5729fe _1349ac8">
                                                                    <div class="de7a445">od <div class="fbf1c33">
                                                                            <div class="_8abaeee"><i class="_5cb7b6d _5bc16e3"></i>
                                                                                <div class="_006a24b"></div>
                                                                            </div>
                                                                        </div> Super Sprzedawcy</div>
                                                                    <div class="ac272c7"><a href="https://allegro.pl/uzytkownik/lantre_pl">lantre_pl</a><span>firma</span></div>
                                                                </div>
                                                                <div class="_8790b22">
                                                                    <div class="_80e0985">
                                                                        <div class="_906bb92"><span class="_16ff71a"><span class="_611a83b">7 949<span>,</span><span class="_7c9589f">00</span><span class="da28f5a"> zł</span></span></span></div>
                                                                    </div>
                                                                    <div class="_3ffbbd8 _2e66342"><span>kup teraz</span></div>
                                                                </div>
                                                                <div class="a5729fe e25a513">
                                                                    <div class="a97f873">
                                                                        <div class="_2ff9410 c0cbdd2">
                                                                            <div class="_8abaeee"><i class="_5cb7b6d _22defca"></i>
                                                                                <div class="_006a24b"></div>
                                                                            </div>
                                                                        </div><span class="_0bbb176">otrzymasz 12 monet</span>
                                                                    </div><span class="_41ddd69">1 osoba kupiła</span>
                                                                </div>
                                                                <div class="a5729fe _1f2c60e">Lokalizacja: Raszyn</div>
                                                                <div class="a5729fe _79022c3 ">
                                                                    <div class="_0765291"><span class="c2c3fdb "><strong>100,0%</strong><i>poleca sprzedawcę</i></span></div>
                                                                    <div class="a1583a1">
                                                                        <div class="ef149af _436696a f2260fa"><i>darmowa</i> <i>dostawa</i></div>
                                                                    </div>
                                                                </div>
                                                                <div class="_483161d">
                                                                    <div class="_9250be1">
                                                                        <div><span class="_902956c">Pojemność dysku</span>
                                                                            <div class="dba5287"><i class="a4d9c5b df90fe8 c3d01c7"></i>
                                                                                <div class="a654af0">
                                                                                    <ul style="transform: translateX(0px);">
                                                                                        <li class="faf1344 _60f4ab5"><a href="https://allegro.pl/macbook-pro-13-i5-8gb-256gb-iris-655-space-2018-i7462254284.html">256</a></li>
                                                                                        <li class="faf1344"><a href="https://allegro.pl/macbook-pro-13-i5-8gb-512gb-iris-655-space-2018-i7464682931.html">512</a></li>
                                                                                        <li class="faf1344"><a href="https://allegro.pl/macbook-pro-13-i5-8gb-1tb-iris-655-space-2018-i7465572259.html">1000</a></li>
                                                                                        <li class="faf1344"><a href="https://allegro.pl/macbook-pro-13-i5-8gb-2tb-iris-655-space-2018-i7465616391.html">2000</a></li>
                                                                                    </ul>
                                                                                </div><i class="a4d9c5b df90fe8 _3117551"></i>
                                                                            </div>
                                                                        </div>
                                                                        <div><span class="_902956c">Wielkość pamięci RAM</span>
                                                                            <div class="dba5287"><i class="a4d9c5b df90fe8 c3d01c7"></i>
                                                                                <div class="a654af0">
                                                                                    <ul style="transform: translateX(0px);">
                                                                                        <li class="faf1344 _60f4ab5"><a href="https://allegro.pl/macbook-pro-13-i5-8gb-256gb-iris-655-space-2018-i7462254284.html">8 GB</a></li>
                                                                                        <li class="faf1344"><a href="https://allegro.pl/macbook-pro-13-i5-16gb-256gb-iris-655-space-2018-i7464536346.html">16 GB</a></li>
                                                                                    </ul>
                                                                                </div><i class="a4d9c5b df90fe8 _3117551"></i>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div><button class="_1b070f7">dodaj do koszyka</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="_737cd7b">
                                                    <div class="_0e3c58d">
                                                        <h2 class="ebc9be2  "><a href="https://allegro.pl/oferta/macbook-pro-13-i5-8gb-256gb-iris-655-space-2018-7462254284" title="">MacBook Pro 13 i5 8GB 256GB Iris 655 Space 2018</a></h2>
                                                        <div class="de7a445">od <div class="fbf1c33">
                                                                <div class="_8abaeee"><i class="_5cb7b6d _5bc16e3"></i>
                                                                    <div class="_006a24b"></div>
                                                                </div>
                                                            </div> Super Sprzedawcy</div>
                                                        <div class="_7e08ebc a5de709 ">
                                                            <dl><dt>Stan</dt>
                                                                <dd><span class="">Nowy</span></dd><dt>Wielkość matrycy</dt>
                                                                <dd><span class="">13" - 13.9"</span></dd><dt>Seria procesora</dt>
                                                                <dd><span class="">Intel Core i5</span></dd><dt>Typ dysku twardego</dt>
                                                                <dd><span class="">SSD</span></dd>
                                                            </dl>
                                                        </div>
                                                    </div>
                                                    <div class="f6aa2b7">
                                                        <div class="_25c6d6f">
                                                            <div class="_906bb92"><span class="_16ff71a"><span class="_611a83b">7 949<span>,</span><span class="_7c9589f">00</span><span class="da28f5a">
                                                                            <!-- -->zł</span></span></span></div>
                                                        </div><span class="aa749f7">
                                                            <div class="_8abaeee"><i class="_5cb7b6d _6ea12f8"></i>
                                                                <div class="_006a24b"></div>
                                                            </div>
                                                        </span>
                                                        <div class="_3ffbbd8 _2e66342"><span>kup teraz</span></div>
                                                        <div class="a8a9216">
                                                            <div class="_2540c63"><span class="_0c7422a"><i>397,45
                                                                        <!-- -->
                                                                        <!-- -->zł</i>x
                                                                    <!-- -->20
                                                                    <!-- -->
                                                                    <!-- -->rat</span><span style="background-color:#00aeef" class="_2582670">raty zero</span><span class="_0788000">szczegóły w ofercie</span></div>
                                                        </div>
                                                        <div class="_3e5bef3">
                                                            <div class="ef149af _436696a "><i>darmowa</i> <i>dostawa</i></div>
                                                        </div>
                                                    </div>
                                                    <div class="_98e67bc">
                                                        <div class="a97f873">
                                                            <div class="_2ff9410 c0cbdd2">
                                                                <div class="_8abaeee"><i class="_5cb7b6d _22defca"></i>
                                                                    <div class="_006a24b"></div>
                                                                </div>
                                                            </div><span class="_0bbb176">otrzymasz
                                                                <!-- -->
                                                                <!-- -->12 monet</span>
                                                        </div>
                                                        <div class="f07108f"><span class="_41ddd69">1 osoba kupiła</span></div>
                                                    </div>
                                                    <div class="ba7072d"><button class="eed0fc7">dodaj do koszyka</button></div>
                                                    <div class="c8a06c9"><button class="eed0fc7">do koszyka</button></div>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                </section>
                            </section>
                            <section class="_8c8b9d3 ef0c899">
                                <div class="ef0ac6a">Oferty sponsorowane<div class="e4f64fd">
                                        <div class="_8abaeee"><i class="_5cb7b6d _2921b06"></i>
                                            <div class="_006a24b"></div>
                                        </div>
                                    </div>
                                </div>
                                <section class="cb528e8">
                                    <article data-analytics-enabled="true" data-item="true" data-analytics-view-value="7687953527" data-analytics-view-custom-page="1" data-analytics-view-custom-index0="62" data-analytics-view-label="showSponsoredItems" data-analytics-view-custom-analyticsid="67a85411-1b7b-4f43-b5a3-c54473bdf039" class="_8d855a8" data-seen="true" data-visible-for="144722">
                                    </article>
                                    <article data-analytics-enabled="true" data-item="true" data-analytics-view-value="7731476313" data-analytics-view-custom-page="1" data-analytics-view-custom-index0="63" data-analytics-view-label="showSponsoredItems" data-analytics-view-custom-analyticsid="cfb2d72d-10f8-46ac-bf95-8ed31255a7d1" class="_8d855a8" data-seen="true" data-visible-for="144367">
                                    </article>
                                </section>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`;
const singleAuctionHTML =
  '<article data-analytics-enabled="true" data-item="true" data-analytics-view-value="7473249846" data-analytics-view-custom-page="1" data-analytics-view-custom-index0="54" class="_8d855a8" data-visible-for="557" data-seen="true"><div class="a3ad614 "><div class="_3e011d0 "><div><div class="_639de09"><div class="af753af "><a href="https://allegro.pl/oferta/macbook-pro-15-i9-4-8ghz-r560x-2018-32gb-1tb-ssd-7473249846" class="_2bc857f"><img data-src="https://8.allegroimg.com/s128/034a55/5e639f15494f9765b1df14f8d128" alt="" src="https://8.allegroimg.com/s128/034a55/5e639f15494f9765b1df14f8d128" class=" lazyloaded"></a></div><div class="_2a4a340 e822ea5 _0c760bc"><img data-src="https://seller-extras.allegrostatic.com/seller-extras-49/listing-logotype_4553828_7bbdc2d3-cc29-42ea-a54b-1d029bf9641c" src="https://assets.allegrostatic.com/metrum/placeholder/placeholder-2447b7d18a.svg" class="lazyload _6a162b0"><span class="_4e7c4ae"></span></div><div class="e4cacd0"><span class="_66395d6">dostępne warianty</span></div><div class="fb3fe21"><span class="c225353">WARIANTY</span></div></div></div><div class="_737cd7b"><div class="_0e3c58d"><div class="_2a4a340 _5c47b21 _0d1a4ec"><img data-src="https://seller-extras.allegrostatic.com/seller-extras-49/listing-logotype_4553828_7bbdc2d3-cc29-42ea-a54b-1d029bf9641c" src="https://seller-extras.allegrostatic.com/seller-extras-49/listing-logotype_4553828_7bbdc2d3-cc29-42ea-a54b-1d029bf9641c" class="_6a162b0 lazyloaded"><span class="_4e7c4ae"></span></div><h2 class="ebc9be2  "><a href="https://allegro.pl/oferta/macbook-pro-15-i9-4-8ghz-r560x-2018-32gb-1tb-ssd-7473249846" title="">MacBook Pro 15 i9 4.8GHz R560X 2018 32GB 1TB SSD</a></h2><div class="de7a445">od <div class="fbf1c33"><div class="_8abaeee"><i class="_5cb7b6d _5bc16e3"></i><div class="_006a24b"></div></div></div> Super Sprzedawcy</div><div class="_7e08ebc a5de709 "><dl><dt>Stan</dt><dd><span class="">Nowy</span></dd><dt>Wielkość matrycy</dt><dd><span class="">15" - 15.9"</span></dd><dt>Seria procesora</dt><dd><span class="">Intel Core i9</span></dd><dt>Typ dysku twardego</dt><dd><span class="">SSD</span></dd></dl></div></div><div class="f6aa2b7"><div class="_25c6d6f"><div class="_906bb92"><span class="_16ff71a"><span class="_611a83b">17 299<span>,</span><span class="_7c9589f">00</span><span class="da28f5a"> <!-- -->zł</span></span></span></div></div><span class="aa749f7"><div class="_8abaeee"><i class="_5cb7b6d _6ea12f8"></i><div class="_006a24b"></div></div></span><div class="_3ffbbd8 _2e66342"><span>kup teraz</span></div><div class="a8a9216"><div class="_2540c63"><span class="_0c7422a"><i>864,95<!-- --> <!-- -->zł</i>x <!-- -->20<!-- --> <!-- -->rat</span><span style="background-color:#00aeef" class="_2582670">raty zero</span><span class="_0788000">szczegóły w ofercie</span></div></div><div class="_3e5bef3"><div class="ef149af _436696a "><i>darmowa</i> <i>dostawa</i></div></div></div><div class="_98e67bc"><div class="a97f873"><div class="_2ff9410 c0cbdd2"><div class="_8abaeee"><i class="_5cb7b6d _22defca"></i><div class="_006a24b"></div></div></div><span class="_0bbb176">otrzymasz<!-- --> <!-- -->12 monet</span></div><div class="f07108f"><span class="_41ddd69">2 osoby kupiły</span></div></div><div class="ba7072d"><button class="eed0fc7">dodaj do koszyka</button></div><div class="c8a06c9"><button class="eed0fc7">do koszyka</button></div></div></div></div></article>';
