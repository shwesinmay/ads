# NoPicAds

This user script helps you

* skip ads' count down page
* remove overlays over pictures
* prevent windows pop up

Forked from [RedirectionHelper] writen by [SuYS].

Stable version will upload to [here][1].

[![Build Status][2]][3]


## Compatibility With Other Userscripts/Add-Ons/Extensions

By disabling some features, you could resolve conflicts with
other userscripts/add-ons/extentions ... etc.

To doing this, you could open [this page][4] to adjust configurations.

* Image Aligning (default: on)

    With this option on, image will align to screen center and have a dark
    background, just like the theme used in Mozilla Firefox.
    If you turn this off, NoPicAds will not adjust that for you.

* Image Redirect (default: on)

    With this option on, NoPicAds will directly open the image by browser if
    current site is a image hosting site.
    If you turn this off, NoPicAds will only works on link shortener sites.

If you still have problem, you could adjust userscripts' execution order.


## How To Build

Please install [Node.js] and [npm], then run:

```
npm install -g grunt-cli
npm install
grunt
```

Combined userscript will be `dest/nopicads.user.js`, which could install on
browser.

For more information, please see [Wiki].


## Supported Sites

* adfly
    * adf.ly
    * chathu.apkmania.co
    * go.phpnulledscripts.com
    * j.gs
    * q.gs
    * u.bb
* linkbucks
    * allanalpass.com
    * amy.gs
    * any.gs
    * cash4files.com
    * deb.gs
    * drstickyfingers.com
    * dyo.gs
    * fapoff.com
    * filesonthe.net
    * freean.us
    * freegaysitepass.com
    * galleries.bz
    * goneviral.com
    * hornywood.tv
    * linkbabes.com
    * linkbucks.com
    * linkgalleries.net
    * linkseer.net
    * megaline.co
    * miniurls.co
    * picbucks.com
    * picturesetc.net
    * poontown.net
    * qqc.co
    * qvvo.com
    * realfiles.net
    * rqq.co
    * seriousdeals.net
    * seriousfiles.com
    * seriousurls.com
    * sexpalace.gs
    * theseblogs.com
    * thesefiles.com
    * theseforums.com
    * thesegalleries.com
    * thosegalleries.com
    * tinybucks.net
    * tinylinks.co
    * tnabucks.com
    * tubeviral.com
    * uberpicz.com
    * ubervidz.com
    * ubucks.net
    * ugalleries.net
    * ultrafiles.net
    * urlbeat.net
    * urlpulse.net
    * whackyvidz.com
    * youfap.me
    * yyv.co
    * zff.co
    * zxxo.net
* Mihalism Multi Host
    * dwimg.com
    * freeuploadimages.org
    * gallery.jpavgod.com
    * hentai-hosting.com
    * hostpornpics.net
    * hostzi.com
    * howtohemorrhoidscure.com
    * imagecurl.com
    * imagecurl.org
    * imagepremium.com
    * javimage.us
    * miragepics.com
    * nixhelp.de
    * pornpicuploader.com
    * preview.jpavgod.com
    * shareimage.ro
* reklama
    * comicalpic.net
    * croftimage.com
    * gallerycloud.net
    * hotimages.eu
    * imagedecode.com
    * imageontime.com
    * imgserve.net
    * zeljeimage.com
    * zonezeedimage.com
* imageporter
    * imagecarry.com
    * imagedunk.com
    * imageporter.com
    * imageswitch.com
    * piclambo.net
    * picleet.com
    * picturedip.com
    * pictureturn.com
    * pixroute.com
    * yankoimages.net
* CF Image Host
    * d69.in
    * ghanaimages.co
    * images.woh.to
    * imgjav.tk
    * imgurban.info
    * imgwiev.tk
    * thasnasty.com
    * x45x.info
* imgonion
    * imagecorn.com
    * imagefolks.com
    * imagepicsa.com
    * imgcandy.net
    * imgcloud.co
    * imgcorn.com
    * imgmoney.com
    * imgnext.com
    * imgonion.com
    * imgrill.com
    * imgtube.net
    * pixup.us
* picfox
    * amateurfreak.org
    * euro-pic.eu
    * freeimage.us
    * gratisimage.dk
    * images.maxigame.by
    * picfox.org
* imgchili
    * imgchili.com
    * imgchili.net
* imgdino
    * imgdino.com
    * imgtiger.com
* hanimes
    * adultmove.info
    * h-animes.info
* abload
    * abload.de
    * fastpic.ru
    * imagebanana.com
    * imageup.ru
* bc.vc
    * adcrun.ch
    * adli.pw
    * bc.vc
    * biaiai.com
    * bih.cc
    * budurl.ru
    * fly2url.com
    * link.tl
    * raksoyun.com
    * short.pk
    * shortit.in
    * ssl.gs
    * tr5.in
    * ultry.net
    * wwy.me
    * xip.ir
    * youlinking.com
    * zpoz.net
* coinurl
    * coinurl.com
    * cur.lv
* lnxlu
    * lnx.lu
    * url.fm
    * z.gs
* lnkco
    * lnk.co
    * rdlnk.co
    * reducelnk.com
* urlcash
    * bat5.com
    * celebclk.com
    * clb1.com
    * detonating.com
    * eightteen.com
    * looble.net
    * peekatmygirlfriend.com
    * pornyhost.com
    * smilinglinks.com
    * urlcash.com
    * urlcash.org
    * urlcash.net
    * urlgalleries.com
    * xxxs.org
* imagesnake
    * freebunker.com
    * imagefruit.com
    * imagesnake.com
* imagetwist
    * imagecherry.com
    * imagenpic.com
    * imagetwist.com
    * imgpo.st
* b4he
    * b4he.com
    * fastpics.net
    * freeimgup.com
    * fullimg.com
    * ifap.co
* emptypix
    * emptypix.com
    * flickimg.com
    * fotohosting.net
* fotoo
    * fotoo.pl
    * fotoszok.pl
    * hornyimage.com
    * imagestime.com
* eropix
    * eropix.me
    * freakimage.com
    * hostpic.org
* imagevenue
    * imagevenue.com
    * hotchyx.com
    * freeporndumpster.com
    * hostingfailov.com
* imgfantasy
    * imgfantasy.com
    * imagedomino.com
* else
    * 1be.biz
    * 1pics.ru
    * 2i.sk
    * 2imgs.com
    * 3ra.be
    * 4fun.tw
    * 4owl.info
    * adfoc.us
    * adlock.in
    * adultf.ly
    * adv.li
    * ah-informatique.com
    * alabout.com
    * alafs.com
    * anonpic.com
    * bayimg.com
    * beeimg.com
    * bild.me
    * bilder-hochladen.net
    * bilder-space.de
    * bilder-upload.eu
    * bildr.no
    * bilurl.com
    * blackcatpix.com
    * bridgeurl.com
    * casimages.com
    * cf.ly
    * cl.my
    * cli.gs
    * comyonet.com
    * cubeupload.com
    * cyberpics.net
    * depic.me
    * digitalfrenzy.net
    * directupload.net
    * dumppix.com
    * durl.me
    * filedump.net
    * fotolink.su
    * fotosik.pl
    * freeimagehosting.net
    * funkyimg.com
    * gkurl.us
    * go2.me
    * goimagehost.com
    * hostingpics.net
    * hotimg.com
    * hotshorturl.com
    * ibunker.us
    * ichan.org
    * ifotos.pl
    * iiiii.in
    * ima.so
    * image18.org
    * image2you.ru
    * imagearn.com
    * imagebam.com
    * imageban.net
    * imageban.ru
    * imagehosting.gr
    * imagehousing.com
    * imagenetz.de
    * imageno.com
    * imagepix.org
    * imagescream.com
    * imageshack.us
    * imageshost.ru
    * imageupper.com
    * imagevau.eu
    * imagezilla.net
    * imagik.fr
    * img.acianetmedia.com
    * img.deli.sh
    * img1.imagilive.com
    * imgah.com
    * imgbabes.com
    * imgbar.net
    * imgnip.com
    * imgpony.com
    * ity.im
    * javelite.tk
    * lienscash.com
    * lnk.in
    * madlink.sk
    * nsfw.in
    * nutshellurl.com
    * p.pw
    * pic-upload.de
    * pics-money.ru
    * picshare.geenza.com
    * pixhost.org
    * pixhub.eu
    * qrrro.com
    * ref.so
    * reffbux.com
    * richlink.com
    * riurl.com
    * robo.us
    * screenlist.ru
    * seomafia.net
    * sexyimg.com
    * stash-coins.com
    * subirimagenes.com
    * thinfi.com
    * tinyarrows.com
    * tinypic.com
    * turboimagehost.com
    * ulmt.in
    * unfake.it
    * url.ie
    * urlgator.com
    * urlms.com
    * urlz.so
    * viidii.com
    * vvcap.net
    * x.pixfarm.net
    * yep.it
    * yfrog.com
    * zo.mu
    * zpag.es


[1]: http://userscripts.org/scripts/show/154858
[2]: https://travis-ci.org/legnaleurc/nopicads.png?branch=master,develop
[3]: https://travis-ci.org/legnaleurc/nopicads
[4]: http://legnaleurc.github.io/nopicads/configure.html
[Node.js]: http://nodejs.org/
[npm]: https://npmjs.org/
[RedirectionHelper]: http://userscripts.org/scripts/show/69797
[SuYS]: http://userscripts.org/users/SuYS
[Wiki]: https://github.com/legnaleurc/nopicads/wiki
