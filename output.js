const _0x9f5b01 = _0xfa96;
(function (_0x3f75ab, _0x2857bc) {
  const _0x5cf194 = _0xfa96,
    _0x477f9e = _0x3f75ab();
  while (!![]) {
    try {
      const _0x16bd1f =
        (-parseInt("1HztKfB") / (0x1dfa + 0x1 * 0x155f + -0x1 * 0x3358)) *
          (parseInt("192144iXQjQs") / (-0x1ed3 + 0x1 * -0x3f5 + 0x22ca)) +
        (-parseInt("762951OfKxHU") / (-0x26cf * 0x1 + -0x4a9 * -0x8 + 0x18a)) *
          (parseInt("4YkCspC") / (-0x22ca + -0x13 * -0xce + 0x1 * 0x1384)) +
        (parseInt("481655UesGKk") / (0xafd + -0x40a * -0x2 + -0xd4 * 0x17)) *
          (parseInt("24bZJPLn") / (0x134 * -0x4 + -0x8f7 + 0xdcd)) +
        -parseInt("505085GBjIcd") / (0x659 + -0x1f6e + 0x1 * 0x191c) +
        parseInt("254992JNPSLr") / (0x1dbc + -0x517 * 0x1 + -0x189d) +
        (parseInt("1031013dsSReW") / (-0x7 * -0x293 + 0x8cf + -0x1acb)) *
          (parseInt("10BaeyXe") / (-0x2f6 + 0x767 * -0x1 + 0xa67)) +
        parseInt("1035815ZHBatd") / (-0x2681 + -0x7ad + 0x2e39);
      if (_0x16bd1f === _0x2857bc) break;
      else _0x477f9e["push"](_0x477f9e["shift"]());
    } catch (_0x4e3d41) {
      _0x477f9e["push"](_0x477f9e["shift"]());
    }
  }
})(_0x4827, 0x1 * -0x13bec + -0x565 * -0x29 + 0x17 * 0x26a9);
const playerInstance = jwplayer("player");
let dualSubtitlesEnabled = ![],
  mainSubtitleTrack = null,
  secondarySubtitleTrack = null,
  subtitleTracks = [],
  introSkipped = ![],
  autoSkipIntroFromParent = ![],
  currentConfigSub = {
    color: "white",
    size: "70",
    opacity: "100",
    font: "Arial",
  },
  currentPosition = 0x5 * 0x77b + 0x2279 + -0x47e0;
const params = new URLSearchParams(window["location"]["search"]),
  isLive = params["has"]("isLive");
let isHost = ![],
  isSyncing = ![],
  lastSyncTime = -0x9a0 + 0x1a * 0x12a + 0x4 * -0x529,
  lastSyncServerTs = 0x23b1 * 0x1 + -0x4 * -0xa3 + 0x263d * -0x1,
  lastSnapshotTime = 0x10d * -0x13 + -0x1 * 0xa2a + 0x1e21,
  lastHostPlaybackState = null;
function sendMessageToParent(_0x3f61c5, _0x3cb7a1 = {}) {
  const _0x56c3f8 = _0x9f5b01,
    _0xaf5d2b = {
      LWcEU: function (_0x5e6b9b, _0x28d652) {
        return _0x5e6b9b !== _0x28d652;
      },
    };
  window["parent"] &&
    _0xaf5d2b["LWcEU"](window["parent"], window) &&
    window["parent"]["postMessag" + "e"](
      { type: _0x3f61c5, ..._0x3cb7a1, timestamp: Date["now"]() },
      "*",
    );
}
function handleMessageFromParent(_0x7f7b80) {
  const _0xf8e1e7 = _0x9f5b01,
    _0x848cea = {
      PDTaK: function (_0x57584f, _0x85c490, _0x8a3d98) {
        return _0x57584f(_0x85c490, _0x8a3d98);
      },
      qykby: function (_0x273a8e, _0x497f5) {
        return _0x273a8e !== _0x497f5;
      },
      fBRTM: "playing",
      IZRrj: function (_0x1d3a3b, _0x31ffdc) {
        return _0x1d3a3b(_0x31ffdc);
      },
      DtPmJ: "object",
      XPYmY: "SYNC_TIME",
      HTWEV: function (_0x735b09, _0x2f7d54) {
        return _0x735b09 !== _0x2f7d54;
      },
      LyUmK: "START",
      WGSuG: function (_0x5d8452, _0x48dbaa) {
        return _0x5d8452 === _0x48dbaa;
      },
      sicJQ: "idle",
      DNYNJ: function (_0x3fcb98, _0xbeb506) {
        return _0x3fcb98 === _0xbeb506;
      },
      ZGeMZ: "buffering",
      wmFwH: "ready",
      FMCpz: "Lỗi khi ST" + "ART:",
      HGpMm: "SYNC_PLAYB" + "ACK",
      TrumD: function (_0x51f583, _0x3952dd) {
        return _0x51f583 === _0x3952dd;
      },
      QLfLm: "GET_PLAYBA" + "CK_STATE",
      vdzSM: function (_0x6a4c36) {
        return _0x6a4c36();
      },
      QoNAT: "PLAYER_ACT" + "ION",
      JjrTY: "SET_HOST",
      JJAXY: function (_0x124895, _0x3711e1) {
        return _0x124895(_0x3711e1);
      },
      OxPpE: function (_0x48e2d0) {
        return _0x48e2d0();
      },
      NchmP: "CHANGE_EPI" + "SODE",
      HURNR: "SEEK_TIME",
      rFrmu: function (_0x30ada1, _0x40f078) {
        return _0x30ada1 !== _0x40f078;
      },
      hLsRv: function (_0x169e3b, _0x36e34a, _0x9480d8) {
        return _0x169e3b(_0x36e34a, _0x9480d8);
      },
      NmTcz: "SKIP_INTRO",
    };
  if (
    !_0x7f7b80["data"] ||
    _0x848cea["qykby"](typeof _0x7f7b80["data"], _0x848cea["DtPmJ"])
  )
    return;
  const { type: _0x5747fd, ..._0x107cd8 } = _0x7f7b80["data"];
  switch (_0x5747fd) {
    case _0x848cea["XPYmY"]:
      _0x848cea["HTWEV"](_0x107cd8["time"], undefined) &&
        (currentPosition = _0x107cd8["time"]);
      break;
    case _0x848cea["LyUmK"]:
      try {
        const _0x297996 = playerInstance["getState"]();
        _0x848cea["WGSuG"](_0x297996, _0x848cea["sicJQ"]) ||
        _0x848cea["DNYNJ"](_0x297996, _0x848cea["ZGeMZ"])
          ? playerInstance["once"](_0x848cea["wmFwH"], () => {
              const _0x500987 = _0xf8e1e7;
              _0x848cea["PDTaK"](
                setTimeout,
                () => {
                  const _0x1a8b52 = _0x500987;
                  playerInstance["play"]();
                },
                -0x14b5 + -0x212d + 0x3646,
              );
            })
          : playerInstance["play"]();
      } catch (_0x4fa258) {
        (console["error"](_0x848cea["FMCpz"], _0x4fa258),
          _0x848cea["PDTaK"](
            setTimeout,
            () => {
              const _0x3c84fe = _0xf8e1e7;
              _0x848cea["qykby"](
                playerInstance["getState"](),
                _0x848cea["fBRTM"],
              ) && playerInstance["play"]();
            },
            -0x105a + 0x218d + 0x515 * -0x3,
          ));
      }
      break;
    case _0x848cea["HGpMm"]:
      !isHost &&
        _0x107cd8["state"] &&
        _0x848cea["qykby"](_0x107cd8["time"], undefined) &&
        (_0x848cea["DNYNJ"](playerInstance["getState"](), _0x848cea["sicJQ"]) ||
        _0x848cea["TrumD"](playerInstance["getState"](), _0x848cea["ZGeMZ"])
          ? playerInstance["once"](_0x848cea["wmFwH"], () => {
              const _0x1dc389 = _0xf8e1e7;
              _0x848cea["IZRrj"](handleSyncPlayback, _0x107cd8);
            })
          : _0x848cea["IZRrj"](handleSyncPlayback, _0x107cd8));
      break;
    case _0x848cea["QLfLm"]:
      isHost && _0x848cea["vdzSM"](sendPlaybackState);
      break;
    case _0x848cea["QoNAT"]:
      _0x107cd8["action"] &&
        !isHost &&
        _0x848cea["PDTaK"](
          handlePlayerAction,
          _0x107cd8["action"],
          _0x107cd8["time"],
        );
      break;
    case _0x848cea["JjrTY"]:
      isHost = _0x848cea["JJAXY"](Boolean, _0x107cd8["isHost"]);
      isHost
        ? _0x848cea["vdzSM"](startHostMode)
        : _0x848cea["OxPpE"](stopHostMode);
      break;
    case _0x848cea["NchmP"]:
      break;
    case _0x848cea["HURNR"]:
      _0x848cea["rFrmu"](_0x107cd8["data"], undefined) &&
        _0x848cea["hLsRv"](
          setTimeout,
          () => {
            const _0x223af0 = _0xf8e1e7;
            playerInstance["seek"](_0x107cd8["data"]);
          },
          -0x1 * -0xe16 + 0x21ca + -0x2f7c,
        );
      break;
    case _0x848cea["NmTcz"]:
      autoSkipIntroFromParent = !![];
      break;
    default:
      break;
  }
}
function handleSyncPlayback(_0x5226d1) {
  const _0x32009b = _0x9f5b01,
    _0x440f33 = {
      FKPDm: function (_0x38a867, _0x563ead) {
        return _0x38a867 !== _0x563ead;
      },
      EnDXU: "playing",
      ctCTH: function (_0x328d30, _0x542cd2, _0x75ed53) {
        return _0x328d30(_0x542cd2, _0x75ed53);
      },
      swDVj: function (_0x11d356, _0x23b703) {
        return _0x11d356 !== _0x23b703;
      },
      sSXex: function (_0x183ef0, _0x27268c) {
        return _0x183ef0 !== _0x27268c;
      },
      IGyZe: "idle",
      oMhoC: "buffering",
      rAUVk: "Lỗi khi pl" + "ay:",
      fOWZi: "ready",
      Sjctb: function (_0x26b415, _0x2bb076) {
        return _0x26b415 === _0x2bb076;
      },
      hNLbc: function (_0x5d6a36, _0x4e71f8) {
        return _0x5d6a36 === _0x4e71f8;
      },
      YSeRN: function (_0x130ba7, _0x320587) {
        return _0x130ba7 === _0x320587;
      },
      xTIrE: function (_0x1c516a, _0xbe4f1) {
        return _0x1c516a / _0xbe4f1;
      },
      iZFvZ: function (_0x343813, _0x4db380) {
        return _0x343813 - _0x4db380;
      },
      TwtQZ: function (_0x21c11c, _0x722902) {
        return _0x21c11c === _0x722902;
      },
      oEhLj: function (_0x541436, _0x84fb20) {
        return _0x541436 + _0x84fb20;
      },
      jSobF: function (_0x465cad, _0x4d6cbd) {
        return _0x465cad - _0x4d6cbd;
      },
      spkJG: function (_0x4e76ed, _0x3aacf9) {
        return _0x4e76ed > _0x3aacf9;
      },
      WLrob: function (_0x2077b6, _0x296044) {
        return _0x2077b6 === _0x296044;
      },
      cEERN: function (_0x2bfdba, _0x10a9a5, _0x1432ea) {
        return _0x2bfdba(_0x10a9a5, _0x1432ea);
      },
      IkFxh: "paused",
      SOBCs: "Lỗi khi sy" + "nc playbac" + "k:",
    };
  if (isSyncing) return;
  const {
    state: _0x2a52b5,
    time: _0x3b1c13,
    serverTs: _0x873167,
    clientTs: _0x29b6e0,
  } = _0x5226d1;
  if (!_0x2a52b5 || _0x440f33["YSeRN"](_0x3b1c13, undefined)) return;
  ((lastHostPlaybackState = {
    state: _0x2a52b5,
    time: _0x3b1c13,
    serverTs: _0x873167 || Date["now"](),
    clientTs: _0x29b6e0 || Date["now"](),
  }),
    (isSyncing = !![]),
    (lastSyncTime = _0x3b1c13),
    (lastSyncServerTs = _0x873167 || Date["now"]()));
  try {
    const _0x181609 = Date["now"](),
      _0x23e931 = _0x873167
        ? _0x440f33["xTIrE"](
            _0x440f33["iZFvZ"](_0x181609, _0x873167),
            -0x305 + 0x5f0 + 0x17 * 0xb,
          )
        : -0xb * -0x344 + -0x1c0 + -0x222c;
    let _0x4519ad = _0x3b1c13;
    _0x440f33["TwtQZ"](_0x2a52b5, _0x440f33["EnDXU"]) &&
      _0x873167 &&
      (_0x4519ad = _0x440f33["oEhLj"](_0x3b1c13, _0x23e931));
    const _0x579f23 =
        playerInstance["getPositio" + "n"]() || 0xd * -0x15d + 0xeb4 + 0x305,
      _0x1f731f = Math["abs"](_0x440f33["jSobF"](_0x4519ad, _0x579f23));
    _0x440f33["spkJG"](
      _0x1f731f,
      0xa49 * 0x1 + 0x155 * -0xd + 0x6 * 0x12c + 0.5,
    ) && playerInstance["seek"](_0x4519ad);
    const _0x3ceab5 = playerInstance["getState"]();
    if (
      _0x440f33["WLrob"](_0x2a52b5, _0x440f33["EnDXU"]) &&
      _0x440f33["swDVj"](_0x3ceab5, _0x440f33["EnDXU"])
    )
      _0x440f33["cEERN"](
        setTimeout,
        () => {
          const _0x45b768 = _0x32009b,
            _0x20e0c8 = {
              vUDUx: function (_0x2a9d2e, _0x5c7474) {
                const _0x54fb0b = _0xfa96;
                return _0x440f33["FKPDm"](_0x2a9d2e, _0x5c7474);
              },
              rvtRS: _0x440f33["EnDXU"],
              txmbv: function (_0x481822, _0x1f88bd, _0xb22793) {
                const _0x3702b5 = _0x45b768;
                return _0x440f33["ctCTH"](_0x481822, _0x1f88bd, _0xb22793);
              },
            },
            _0x554aad = playerInstance["getState"]();
          if (
            _0x440f33["swDVj"](_0x554aad, _0x440f33["EnDXU"]) &&
            _0x440f33["sSXex"](_0x554aad, _0x440f33["IGyZe"]) &&
            _0x440f33["FKPDm"](_0x554aad, _0x440f33["oMhoC"])
          )
            try {
              playerInstance["play"]();
            } catch (_0x50dc32) {
              (console["error"](_0x440f33["rAUVk"], _0x50dc32),
                playerInstance["once"](_0x440f33["fOWZi"], () => {
                  const _0x1d95d3 = _0x45b768;
                  _0x20e0c8["txmbv"](
                    setTimeout,
                    () => {
                      const _0x353b9c = _0x1d95d3;
                      _0x20e0c8["vUDUx"](
                        playerInstance["getState"](),
                        _0x20e0c8["rvtRS"],
                      ) && playerInstance["play"]();
                    },
                    0x3 * 0xbee + -0x3a2 + -0x1fc4,
                  );
                }));
            }
          else
            (_0x440f33["Sjctb"](_0x554aad, _0x440f33["IGyZe"]) ||
              _0x440f33["hNLbc"](_0x554aad, _0x440f33["oMhoC"])) &&
              playerInstance["once"](_0x440f33["fOWZi"], () => {
                const _0x444daf = _0x45b768;
                _0x20e0c8["txmbv"](
                  setTimeout,
                  () => {
                    const _0x355433 = _0x444daf;
                    _0x20e0c8["vUDUx"](
                      playerInstance["getState"](),
                      _0x20e0c8["rvtRS"],
                    ) && playerInstance["play"]();
                  },
                  -0x269 * -0x1 + -0x10e6 + 0xf45,
                );
              });
        },
        -0x5 * -0x8b + -0x3 * -0xa61 + 0x53 * -0x66,
      );
    else
      _0x440f33["YSeRN"](_0x2a52b5, _0x440f33["IkFxh"]) &&
        _0x440f33["FKPDm"](_0x3ceab5, _0x440f33["IkFxh"]) &&
        playerInstance["pause"]();
  } catch (_0x54aac9) {
    console["error"](_0x440f33["SOBCs"], _0x54aac9);
  } finally {
    _0x440f33["ctCTH"](
      setTimeout,
      () => {
        isSyncing = ![];
      },
      -0x1 * 0x755 + -0x1 * 0x1019 + 0x17d2,
    );
  }
}
function handlePlayerAction(_0x428b50, _0x26fc40) {
  const _0x399121 = _0x9f5b01,
    _0x3e84a2 = {
      SbBxM: "play",
      ouDbj: function (_0xd2f1d, _0x47fdf5) {
        return _0xd2f1d !== _0x47fdf5;
      },
      GTtyC: "playing",
      GIxaF: "pause",
      XbIzb: function (_0x14ccae, _0x265485) {
        return _0x14ccae !== _0x265485;
      },
      fyxvN: "paused",
      HWBlg: "seek",
      QTIQZ: "Lỗi khi th" + "ực hiện ac" + "tion:",
    };
  if (isHost) return;
  try {
    switch (_0x428b50) {
      case _0x3e84a2["SbBxM"]:
        _0x3e84a2["ouDbj"](playerInstance["getState"](), _0x3e84a2["GTtyC"]) &&
          playerInstance["play"]();
        break;
      case _0x3e84a2["GIxaF"]:
        _0x3e84a2["XbIzb"](playerInstance["getState"](), _0x3e84a2["fyxvN"]) &&
          playerInstance["pause"]();
        break;
      case _0x3e84a2["HWBlg"]:
        _0x3e84a2["ouDbj"](_0x26fc40, undefined) &&
          playerInstance["seek"](_0x26fc40);
        break;
    }
  } catch (_0x216c49) {
    console["error"](_0x3e84a2["QTIQZ"], _0x216c49);
  }
}
function sendPlaybackState() {
  const _0xc9854b = _0x9f5b01,
    _0x50ba1a = {
      DBcWM: function (_0x48e3ef, _0x43186b, _0x5aa158) {
        return _0x48e3ef(_0x43186b, _0x5aa158);
      },
      dBROY: "PLAYBACK_S" + "TATE_RESPO" + "NSE",
      IhMxc: function (_0x231796, _0x210cfe) {
        return _0x231796 === _0x210cfe;
      },
      UIIjU: "playing",
      DWPKy: "paused",
      wGDZk: "Lỗi khi gử" + "i playback" + " state:",
    };
  if (!isHost) return;
  try {
    const _0x5428b4 = playerInstance["getState"](),
      _0x1d1c89 =
        playerInstance["getPositio" + "n"]() ||
        0x2315 * 0x1 + 0x1b65 * 0x1 + -0x3e7a;
    _0x50ba1a["DBcWM"](sendMessageToParent, _0x50ba1a["dBROY"], {
      state: _0x50ba1a["IhMxc"](_0x5428b4, _0x50ba1a["UIIjU"])
        ? _0x50ba1a["UIIjU"]
        : _0x50ba1a["DWPKy"],
      time: _0x1d1c89,
      duration:
        playerInstance["getDuratio" + "n"]() ||
        -0x2125 * -0x1 + 0xa7e + -0x2ba3,
    });
  } catch (_0x3401e2) {
    console["error"](_0x50ba1a["wGDZk"], _0x3401e2);
  }
}
function sendPlayerActionFromIframe(_0x39a6d6, _0x5ac3b0) {
  const _0x2aa124 = _0x9f5b01,
    _0x1c8299 = {
      XAbIX: function (_0x1dcc37, _0x353bdc, _0x3405ab) {
        return _0x1dcc37(_0x353bdc, _0x3405ab);
      },
      IJEck: "PLAYER_ACT" + "ION_FROM_I" + "FRAME",
    };
  if (!isHost) return;
  _0x1c8299["XAbIX"](sendMessageToParent, _0x1c8299["IJEck"], {
    action: _0x39a6d6,
    time: _0x5ac3b0,
  });
}
function startHostMode() {
  isHost = !![];
}
function stopHostMode() {
  isHost = ![];
}
window["addEventLi" + "stener"]("message", handleMessageFromParent);
const CONFIG = (function () {
    const _0x521a9c = _0x9f5b01,
      _0x21286a = {
        HBVGi: function (_0x8e021b, _0xb5386e) {
          return _0x8e021b(_0xb5386e);
        },
        ZBiaA: "#rp-player",
        AzyqG: function (_0x6f7760, _0x181e3) {
          return _0x6f7760(_0x181e3);
        },
        pFauM: "data-mx",
      };
    try {
      const _0x26d42c = _0x21286a["HBVGi"]($, _0x21286a["ZBiaA"])
          ["data"]("mx")
          ["split"]("")
          ["reverse"]()
          ["join"](""),
        _0x1bca14 = _0x21286a["HBVGi"](atob, _0x26d42c);
      return (
        _0x21286a["AzyqG"]($, _0x21286a["ZBiaA"])["removeAttr"](
          _0x21286a["pFauM"],
        ),
        JSON["parse"](_0x1bca14)
      );
    } catch (_0x2e5dad) {
      return {
        introStart: null,
        introEnd: null,
        outroStart: null,
        outroEnd: null,
        thumbs: null,
        subtitles: [],
      };
    }
  })(),
  file = hexXorDecrypt(episode["encrypted_" + "url"], "mySecretKe" + "y2024"),
  arrayColor = [
    { label: "Trắng", color: "white" },
    { label: "Vàng", color: "yellow" },
    { label: "Xanh dương", color: "blue" },
    { label: "Xanh lá", color: "green" },
    { label: "Tím", color: "purple" },
  ],
  arraySize = [
    { label: "32pt", size: "32" },
    { label: "24pt", size: "24" },
    { label: "20pt", size: "20" },
    { label: "18pt", size: "18" },
    { label: "16pt", size: "16" },
    { label: "14pt", size: "14" },
    { label: "12pt", size: "12" },
  ],
  arrayOpacity = [
    { label: "100%", opacity: "100" },
    { label: "75%", opacity: "75" },
    { label: "50%", opacity: "50" },
    { label: "25%", opacity: "25" },
    { label: "0%", opacity: "0" },
  ],
  arrayFont = [
    { label: "Arial", font: "Arial" },
    { label: "Courier", font: "Courier" },
    { label: "Georgia", font: "Georgia" },
    { label: "Impact", font: "Impact" },
    { label: "Lucida Con" + "sole", font: "Lucida Con" + "sole" },
    { label: "Tahoma", font: "Tahoma" },
    { label: "Times New " + "Roman", font: "Times New " + "Roman" },
    { label: "Trebuchet " + "MS", font: "Trebuchet " + "MS" },
    { label: "Verdana", font: "Verdana" },
  ],
  arraySizeFont = [
    { label: "150%", size: "150" },
    { label: "120%", size: "120" },
    { label: "100%", size: "100" },
    { label: "75%", size: "75" },
    { label: "70%", size: "70" },
    { label: "50%", size: "50" },
  ],
  arrayBackground = [
    { label: "Đen", background: "#000000" },
    { label: "Xám Đậm", background: "#323232" },
    { label: "Xanh Hải Q" + "uân", background: "#03047d" },
    { label: "Nâu Ấm", background: "#592c07" },
    { label: "Tím Nhạt", background: "#4a027f" },
    { label: "Xanh Olive" + " Đậm", background: "#243224" },
    { label: "Than Chì", background: "#37454e" },
    { label: "Xanh Biển " + "Sâu", background: "#0d5555" },
    { label: "Xám nhạt", background: "#f0f0f0" },
    { label: "Vàng Hổ Ph" + "ách", background: "#fdcb36" },
  ];
async function loadCuesFromFile(_0x3fdeee) {
  const _0x1e0ce6 = _0x9f5b01,
    _0x1c10c7 = {
      suyqA: function (_0xad8aa0, _0x54d7ca) {
        return _0xad8aa0(_0x54d7ca);
      },
      nSJKk: function (_0x4c6607, _0x2315ab) {
        return _0x4c6607(_0x2315ab);
      },
      Dwxgu: "Error load" + "ing subtit" + "le file:",
    };
  if (!_0x3fdeee || !_0x3fdeee["vtt_url"]) return [];
  try {
    const _0x5de5ac = await _0x1c10c7["suyqA"](fetch, _0x3fdeee["vtt_url"]),
      _0x4164e7 = await _0x5de5ac["text"]();
    return _0x1c10c7["nSJKk"](parseVTT, _0x4164e7);
  } catch (_0x448a99) {
    return (console["error"](_0x1c10c7["Dwxgu"], _0x448a99), []);
  }
}
function parseVTT(_0xdb1cff) {
  const _0x152ac7 = _0x9f5b01,
    _0x12b85c = {
      uwHxR: function (_0x47ae99, _0x3450e0) {
        return _0x47ae99 < _0x3450e0;
      },
      tkJbD: "-->",
      kNvNC: function (_0x255075, _0x1e7b3f) {
        return _0x255075 < _0x1e7b3f;
      },
      FOQvh: function (_0x2801a2, _0x57d576) {
        return _0x2801a2 !== _0x57d576;
      },
      DxfMB: function (_0x5e5b19, _0x30202b) {
        return _0x5e5b19 + _0x30202b;
      },
    },
    _0x4b03c6 = [],
    _0xd6c6b6 = _0xdb1cff["split"]("\x0a");
  let _0x123cda = 0xd0f + 0x3 * -0x11 + -0xcdc;
  while (
    _0x12b85c["uwHxR"](_0x123cda, _0xd6c6b6["length"]) &&
    !_0xd6c6b6[_0x123cda]["includes"](_0x12b85c["tkJbD"])
  ) {
    _0x123cda++;
  }
  while (_0x12b85c["uwHxR"](_0x123cda, _0xd6c6b6["length"])) {
    if (_0xd6c6b6[_0x123cda]["includes"](_0x12b85c["tkJbD"])) {
      const [_0x49c11f, _0x2d5cd0] = _0xd6c6b6[_0x123cda]["split"](
        _0x12b85c["tkJbD"],
      )["map"]((_0x39d355) => parseTimeString(_0x39d355["trim"]()));
      _0x123cda++;
      let _0x2ba372 = "";
      while (
        _0x12b85c["kNvNC"](_0x123cda, _0xd6c6b6["length"]) &&
        _0x12b85c["FOQvh"](_0xd6c6b6[_0x123cda]["trim"](), "")
      ) {
        ((_0x2ba372 += _0x12b85c["DxfMB"](_0xd6c6b6[_0x123cda], "\x0a")),
          _0x123cda++);
      }
      _0x2ba372 &&
        _0x4b03c6["push"]({
          startTime: _0x49c11f,
          endTime: _0x2d5cd0,
          text: _0x2ba372["trim"](),
        });
    }
    _0x123cda++;
  }
  return _0x4b03c6;
}
function parseTimeString(_0x338c67) {
  const _0x2d092f = _0x9f5b01,
    _0x5f1d65 = {
      vzCsU: function (_0x99723f, _0xdd410) {
        return _0x99723f === _0xdd410;
      },
      lRWQT: function (_0x1cac9e, _0x3052f5) {
        return _0x1cac9e + _0x3052f5;
      },
      snpDA: function (_0x1d4dac, _0x4a856e) {
        return _0x1d4dac + _0x4a856e;
      },
      rfjnT: function (_0xf50611, _0x36a50f) {
        return _0xf50611 * _0x36a50f;
      },
      apyGB: function (_0x31d0d1, _0x3f729d) {
        return _0x31d0d1(_0x3f729d);
      },
      XaPfM: function (_0x2a953c, _0x125511) {
        return _0x2a953c === _0x125511;
      },
      GaTVs: function (_0x2d826f, _0x5462e7) {
        return _0x2d826f(_0x5462e7);
      },
    },
    _0x630bdf = _0x338c67["split"](":");
  let _0x2311ab = -0xcc6 + -0x6b3 + 0x1379;
  if (_0x5f1d65["vzCsU"](_0x630bdf["length"], 0x1edd + 0x8d3 + -0x27ad))
    _0x2311ab = _0x5f1d65["lRWQT"](
      _0x5f1d65["snpDA"](
        _0x5f1d65["rfjnT"](
          _0x5f1d65["apyGB"](
            parseInt,
            _0x630bdf[0x38d + -0xb74 * 0x2 + 0x135b],
          ),
          0x2 * 0x14f + 0x1970 + -0xdfe,
        ),
        _0x5f1d65["rfjnT"](
          _0x5f1d65["apyGB"](parseInt, _0x630bdf[0x997 + 0x54a + 0xe * -0x110]),
          0x237c * 0x1 + 0x0 + 0x2f * -0xc0,
        ),
      ),
      _0x5f1d65["apyGB"](parseFloat, _0x630bdf[0x136b + -0x1d2 + 0x5dd * -0x3]),
    );
  else
    _0x5f1d65["XaPfM"](
      _0x630bdf["length"],
      -0x20b1 + -0x5b1 * -0x1 + -0xd81 * -0x2,
    ) &&
      (_0x2311ab = _0x5f1d65["snpDA"](
        _0x5f1d65["rfjnT"](
          _0x5f1d65["GaTVs"](parseInt, _0x630bdf[0x20cb + 0x1395 + -0x3460]),
          -0x13b5 + 0x1 * -0x1183 + -0x6 * -0x63e,
        ),
        _0x5f1d65["apyGB"](
          parseFloat,
          _0x630bdf[0x1 * -0x1be + -0xdf7 + -0x7db * -0x2],
        ),
      ));
  return _0x2311ab;
}
let secondaryCues = [];
async function updateDualSubtitles() {
  const _0x51e582 = _0x9f5b01,
    _0xbff1d4 = {
      qQRsG: function (_0x380795, _0x46385f) {
        return _0x380795 > _0x46385f;
      },
      jpxlv: function (_0x447fcb, _0x4208fa) {
        return _0x447fcb(_0x4208fa);
      },
      SXqfE: ".jw-text-t" + "rack-displ" + "ay",
      uKrjQ: "top",
      Nrhyn: function (_0x12c7d8, _0x30e431) {
        return _0x12c7d8 - _0x30e431;
      },
      OjNni: function (_0x1cbc34, _0x30e09d) {
        return _0x1cbc34(_0x30e09d);
      },
      EdItk: function (_0x24077a, _0x3322b9) {
        return _0x24077a(_0x3322b9);
      },
      ZJrns: function (_0x2b983b, _0x118ea1) {
        return _0x2b983b + _0x118ea1;
      },
      Hvaxz: function (_0x3e0f59, _0x132fc7) {
        return _0x3e0f59(_0x132fc7);
      },
      aQPPQ: ".jw-text-t" + "rack-cue",
      hviEp: "<br>",
    };
  if (!dualSubtitlesEnabled) return;
  const _0x25c979 = playerInstance["getPositio" + "n"]();
  if (
    _0xbff1d4["qQRsG"](
      secondaryCues["length"],
      0x10d6 + -0x122 * -0x5 + -0x1680,
    )
  ) {
    const _0x106f4b = secondaryCues["find"](
      (_0x4b70fa) =>
        _0x25c979 >= _0x4b70fa["startTime"] &&
        _0x25c979 <= _0x4b70fa["endTime"],
    );
    if (_0x106f4b) {
      const _0x3958b7 = _0xbff1d4["jpxlv"]($, _0xbff1d4["SXqfE"])["css"](
          _0xbff1d4["uKrjQ"],
        ),
        _0x37e384 = _0xbff1d4["Nrhyn"](
          _0xbff1d4["OjNni"](parseInt, _0x3958b7["replace"]("px", "")),
          -0x212f + 0x33e + 0x1e37,
        );
      (_0xbff1d4["EdItk"]($, _0xbff1d4["SXqfE"])["css"](
        _0xbff1d4["uKrjQ"],
        _0xbff1d4["ZJrns"](_0x37e384, "px"),
      ),
        _0xbff1d4["Hvaxz"]($, _0xbff1d4["aQPPQ"])["append"](
          "<br><span " +
            'lang="su" ' +
            'style="col' +
            "or: " +
            currentConfigSub["color"] +
            ("; font-siz" + "e: ") +
            currentConfigSub["size"] +
            ("%; opacity" + ":\x20") +
            currentConfigSub["opacity"] +
            ("%; font-fa" + "mily: ") +
            currentConfigSub["font"] +
            ';">' +
            _0x106f4b["text"]["replace"](/\n/g, _0xbff1d4["hviEp"]) +
            "</span>",
        ));
    }
  }
}
($(document)["on"]("click", "#sub-off", function () {
  const _0x16f187 = _0x9f5b01,
    _0x57936b = {
      MDNkU: "0|4|3|6|1|" + "5|2",
      bpTXz: function (_0x16da98, _0x499728) {
        return _0x16da98(_0x499728);
      },
      QrvLa: ".jw-main-c" + "aption-men" + "u",
      UJLkS: "active",
      ZwCza: ".sub-toggl" + "e-tabs .it" + "em",
      GrwLs: function (_0x5a06aa, _0x41e212) {
        return _0x5a06aa(_0x41e212);
      },
      kTadW: ".jw-sub-ca" + "ption-menu",
    },
    _0x1b5046 = _0x57936b["MDNkU"]["split"]("|");
  let _0x507d51 = 0x9 * -0x3a1 + 0x706 + 0x1 * 0x19a3;
  while (!![]) {
    switch (_0x1b5046[_0x507d51++]) {
      case "0":
        _0x57936b["bpTXz"]($, _0x57936b["QrvLa"])["removeClas" + "s"](
          _0x57936b["UJLkS"],
        );
        continue;
      case "1":
        playerInstance["setCurrent" + "Captions"](
          -0x4c5 + 0x1 * 0x2515 + -0x2050,
        );
        continue;
      case "2":
        secondaryCues = [];
        continue;
      case "3":
        _0x57936b["bpTXz"]($, _0x57936b["ZwCza"])["removeClas" + "s"](
          _0x57936b["UJLkS"],
        );
        continue;
      case "4":
        _0x57936b["GrwLs"]($, _0x57936b["kTadW"])["removeClas" + "s"](
          _0x57936b["UJLkS"],
        );
        continue;
      case "5":
        dualSubtitlesEnabled = ![];
        continue;
      case "6":
        _0x57936b["GrwLs"]($, this)["addClass"](_0x57936b["UJLkS"]);
        continue;
    }
    break;
  }
}),
  $(document)["on"]("click", "#sub-on", function () {
    const _0x26485a = _0x9f5b01,
      _0x124fb6 = {
        OqaYi: function (_0x1f4dfb, _0x480c86) {
          return _0x1f4dfb(_0x480c86);
        },
        cMyrU: ".sub-uploa" + "d",
        khXOg: "d-none",
        xRDfH: ".sub-sbs",
        hVMku: function (_0x4cffc0, _0x312898) {
          return _0x4cffc0(_0x312898);
        },
        ztVgL: ".jw-main-c" + "aption-men" + "u",
        EVevP: "active",
        SGEPI: ".jw-sub-ca" + "ption-menu",
        ujsUL: ".sub-toggl" + "e-tabs .it" + "em",
        ySJPu: function (_0x5dd466, _0xd5586c) {
          return _0x5dd466(_0xd5586c);
        },
        kZNUS: function (_0x597228, _0x6fb62d) {
          return _0x597228(_0x6fb62d);
        },
        bWkcB:
          ".jw-main-c" + "aption-men" + "u .dropdow" + "n-item.act" + "ive",
        BIETC: "data",
        ZtfXp: function (_0x149bc5, _0x1c0e34) {
          return _0x149bc5 !== _0x1c0e34;
        },
        SDLtk: function (_0x178114, _0x26cb04) {
          return _0x178114 > _0x26cb04;
        },
      };
    (_0x124fb6["OqaYi"]($, _0x124fb6["cMyrU"])["addClass"](_0x124fb6["khXOg"]),
      _0x124fb6["OqaYi"]($, _0x124fb6["xRDfH"])["removeClas" + "s"](
        _0x124fb6["khXOg"],
      ),
      _0x124fb6["hVMku"]($, _0x124fb6["ztVgL"])["addClass"](_0x124fb6["EVevP"]),
      _0x124fb6["hVMku"]($, _0x124fb6["SGEPI"])["removeClas" + "s"](
        _0x124fb6["EVevP"],
      ),
      _0x124fb6["OqaYi"]($, _0x124fb6["ujsUL"])["removeClas" + "s"](
        _0x124fb6["EVevP"],
      ),
      _0x124fb6["ySJPu"]($, this)["addClass"](_0x124fb6["EVevP"]),
      (dualSubtitlesEnabled = ![]));
    const _0x31914a = _0x124fb6["kZNUS"]($, _0x124fb6["bWkcB"])["attr"](
      _0x124fb6["BIETC"],
    );
    if (_0x124fb6["ZtfXp"](_0x31914a, undefined))
      playerInstance["setCurrent" + "Captions"](
        _0x124fb6["kZNUS"](parseInt, _0x31914a),
      );
    else
      _0x124fb6["SDLtk"](
        subtitleTracks["length"],
        -0x4 * 0x6e8 + -0xd95 * 0x1 + 0x2935,
      ) &&
        playerInstance["setCurrent" + "Captions"](
          -0x166f + 0x2 * -0x1082 + 0x3774,
        );
  }),
  $(document)["on"]("click", "#sub-up", function () {
    const _0x4d8c7f = _0x9f5b01,
      _0x495d1f = {
        naIUT: function (_0x4e389e, _0x2530ed) {
          return _0x4e389e(_0x2530ed);
        },
        ukrEE: ".sub-sbs",
        gXfXZ: "d-none",
        JjzHj: ".sub-toggl" + "e-tabs .it" + "em",
        oDssq: "active",
        BMJMY: function (_0x1af2ca, _0x32657a) {
          return _0x1af2ca(_0x32657a);
        },
        eJPXi: ".sub-uploa" + "d",
        dDNNg: function (_0x49e6bd, _0x1176fb) {
          return _0x49e6bd(_0x1176fb);
        },
        Xpdgu:
          ".jw-main-c" + "aption-men" + "u .dropdow" + "n-item.act" + "ive",
        robxS: "data",
        GCubn: function (_0x12e588, _0xdf4b44) {
          return _0x12e588 !== _0xdf4b44;
        },
        KsJyw: function (_0x5a066f, _0x101992) {
          return _0x5a066f(_0x101992);
        },
        jVEYJ: function (_0x50db82, _0x553769) {
          return _0x50db82 > _0x553769;
        },
      };
    (_0x495d1f["naIUT"]($, _0x495d1f["ukrEE"])["addClass"](_0x495d1f["gXfXZ"]),
      _0x495d1f["naIUT"]($, _0x495d1f["JjzHj"])["removeClas" + "s"](
        _0x495d1f["oDssq"],
      ),
      _0x495d1f["BMJMY"]($, this)["addClass"](_0x495d1f["oDssq"]),
      _0x495d1f["naIUT"]($, _0x495d1f["eJPXi"])["removeClas" + "s"](
        _0x495d1f["gXfXZ"],
      ),
      (dualSubtitlesEnabled = ![]));
    const _0x13f8df = _0x495d1f["dDNNg"]($, _0x495d1f["Xpdgu"])["attr"](
      _0x495d1f["robxS"],
    );
    if (_0x495d1f["GCubn"](_0x13f8df, undefined))
      playerInstance["setCurrent" + "Captions"](
        _0x495d1f["KsJyw"](parseInt, _0x13f8df),
      );
    else
      _0x495d1f["jVEYJ"](
        subtitleTracks["length"],
        -0x1262 + -0x2107 + 0x3369,
      ) &&
        playerInstance["setCurrent" + "Captions"](0x11 * -0xcc + 0x5ed + 0x7a0);
  }),
  $(document)["on"]("click", ".btn-uploa" + "d-form", async function () {
    const _0xd6699f = _0x9f5b01,
      _0x305c03 = {
        lpFGn: function (_0x320363, _0x56f4c0) {
          return _0x320363 < _0x56f4c0;
        },
        NpNcY: function (_0x1ed1f5, _0xd3fbae, _0x452933) {
          return _0x1ed1f5(_0xd3fbae, _0x452933);
        },
        NenVE: function (_0x4d7e77, _0x23a3ab, _0x256cd9) {
          return _0x4d7e77(_0x23a3ab, _0x256cd9);
        },
        twPxO: function (_0x3430aa, _0x568e94) {
          return _0x3430aa > _0x568e94;
        },
        rbhoQ: "Lỗi khi re" + "store:",
        UOjZl: function (_0x1f6070, _0x78947b) {
          return _0x1f6070 === _0x78947b;
        },
        UjWFF: "vtt",
        Ctpws: "text/vtt",
        iAzwq: "text/plain",
        ZmrmG: "subtitles",
        BnWww: "custom",
        BHruP: "playing",
        IOPXC: "playlistIt" + "em",
        UpCJz: function (_0x36f531, _0x477c89) {
          return _0x36f531(_0x477c89);
        },
        BXhgR: "#sub-on",
        HyPwi: "Lỗi khi tả" + "i lên phụ " + "đề:",
        lbKOu: "Có lỗi xảy" + " ra khi tả" + "i lên phụ " + "đề",
        loIQV: function (_0xf37a45, _0x22dee5) {
          return _0xf37a45(_0x22dee5);
        },
        qgKTX: "Lỗi khi đọ" + "c file",
        xrMHX: function (_0x385af9, _0x42ce25) {
          return _0x385af9(_0x42ce25);
        },
        GBqIn: "#formFile",
        DXEgx: "#formName",
        AEpvZ: function (_0x424458, _0x4df0fc) {
          return _0x424458(_0x4df0fc);
        },
        UFXIZ: "Vui lòng c" + "họn file p" + "hụ đề",
        EvvFD: function (_0x2d0564, _0x3ce31c) {
          return _0x2d0564 !== _0x3ce31c;
        },
        JeJUB: function (_0x1b3d04, _0x14bf80) {
          return _0x1b3d04 !== _0x14bf80;
        },
        uGfEn: "srt",
        nWAGy: "Chỉ chấp n" + "hận file ." + "vtt hoặc ." + "srt",
        kivrh: "UTF-8",
      },
      _0x2c414a = _0x305c03["xrMHX"]($, _0x305c03["GBqIn"])[
        -0x357 * 0x5 + 0x1f71 + 0x33 * -0x4a
      ],
      _0x485240 = _0x305c03["UpCJz"]($, _0x305c03["DXEgx"])["val"]()["trim"]();
    if (
      !_0x2c414a["files"] ||
      _0x305c03["UOjZl"](
        _0x2c414a["files"]["length"],
        -0x1251 + -0x25d2 + 0x7 * 0x805,
      )
    ) {
      _0x305c03["AEpvZ"](alert, _0x305c03["UFXIZ"]);
      return;
    }
    const _0x22e9e1 = _0x2c414a["files"][-0x268 * 0x10 + 0x1f82 + 0xb3 * 0xa],
      _0x40baf6 = _0x22e9e1["name"],
      _0xe776a4 = _0x40baf6["split"](".")["pop"]()["toLowerCas" + "e"]();
    if (
      _0x305c03["EvvFD"](_0xe776a4, _0x305c03["UjWFF"]) &&
      _0x305c03["JeJUB"](_0xe776a4, _0x305c03["uGfEn"])
    ) {
      _0x305c03["xrMHX"](alert, _0x305c03["nWAGy"]);
      return;
    }
    const _0x33fc1a = new FileReader();
    ((_0x33fc1a["onload"] = function (_0x2ddf7e) {
      const _0x1e9cb5 = _0xd6699f,
        _0x169d12 = {
          dLAcM: function (_0x36e18e, _0x5d20d3) {
            const _0x236580 = _0xfa96;
            return _0x305c03["twPxO"](_0x36e18e, _0x5d20d3);
          },
          eyGWb: function (_0x32c89c, _0x39f3ad) {
            const _0x10f64b = _0xfa96;
            return _0x305c03["lpFGn"](_0x32c89c, _0x39f3ad);
          },
          GpGjO: function (_0x39f04c, _0x49d686, _0x443c6c) {
            const _0xb2f6e6 = _0xfa96;
            return _0x305c03["NenVE"](_0x39f04c, _0x49d686, _0x443c6c);
          },
          XSlRg: function (_0x328b6c, _0x376059, _0x18a326) {
            const _0x5b5776 = _0xfa96;
            return _0x305c03["NenVE"](_0x328b6c, _0x376059, _0x18a326);
          },
          tckGE: _0x305c03["rbhoQ"],
        };
      try {
        const _0x1446a7 = _0x2ddf7e["target"]["result"],
          _0x3d44e0 = new Blob([_0x1446a7], {
            type: _0x305c03["UOjZl"](_0xe776a4, _0x305c03["UjWFF"])
              ? _0x305c03["Ctpws"]
              : _0x305c03["iAzwq"],
          }),
          _0xdc3538 = URL["createObje" + "ctURL"](_0x3d44e0),
          _0x3967e7 = _0x485240 || _0x40baf6["replace"](/\.[^/.]+$/, ""),
          _0x1382ed = playerInstance["getConfig"](),
          _0x3623e1 = _0x1382ed["tracks"] || [],
          _0x5b3b22 = _0x3623e1["find"](
            (_0x37d25b) =>
              _0x37d25b["kind"] === "subtitles" &&
              _0x37d25b["file"] === _0xdc3538,
          );
        if (_0x5b3b22) {
          const _0x5eb0f1 = _0x3623e1["indexOf"](_0x5b3b22);
          playerInstance["setCurrent" + "Captions"](_0x5eb0f1);
        } else {
          const _0x5022e3 = {
              file: _0xdc3538,
              kind: _0x305c03["ZmrmG"],
              label: _0x3967e7,
              srclang: _0x305c03["BnWww"],
              default: ![],
            },
            _0x35c12d = { ..._0x1382ed, tracks: [..._0x3623e1, _0x5022e3] },
            _0x123227 =
              playerInstance["getPositio" + "n"]() ||
              -0x376 * -0x1 + 0x1ec1 + 0x13 * -0x1cd,
            _0x474a1a = _0x305c03["UOjZl"](
              playerInstance["getState"](),
              _0x305c03["BHruP"],
            );
          playerInstance["load"](_0x35c12d);
          let _0x1edfd1 = ![];
          const _0x3ccba0 = () => {
            const _0x4fd7a1 = _0x1e9cb5,
              _0xd59615 = {
                jTJzo: function (_0x16e37c, _0x3ca258) {
                  const _0x517dc2 = _0xfa96;
                  return _0x305c03["lpFGn"](_0x16e37c, _0x3ca258);
                },
                oEGzO: function (_0x406cf7, _0x42ee04, _0x26bb2c) {
                  const _0x4a74c0 = _0xfa96;
                  return _0x305c03["NpNcY"](_0x406cf7, _0x42ee04, _0x26bb2c);
                },
              };
            if (_0x1edfd1) return;
            ((_0x1edfd1 = !![]),
              _0x305c03["NenVE"](
                setTimeout,
                () => {
                  const _0x3d0017 = _0x4fd7a1;
                  try {
                    const _0x3a8e97 = playerInstance["getDuratio" + "n"]();
                    if (
                      _0x3a8e97 &&
                      _0x169d12["dLAcM"](
                        _0x123227,
                        -0x1a40 + 0xec * -0x1 + 0x1b2c,
                      ) &&
                      _0x169d12["eyGWb"](_0x123227, _0x3a8e97)
                    )
                      (playerInstance["seek"](_0x123227),
                        _0x474a1a &&
                          _0x169d12["GpGjO"](
                            setTimeout,
                            () => {
                              const _0x2f0cfb = _0x3d0017;
                              playerInstance["play"]();
                            },
                            0xd * -0x2ce + 0x1 * -0x166b + 0x3ba9,
                          ));
                    else {
                      if (
                        _0x169d12["dLAcM"](
                          _0x123227,
                          0x1662 + -0x7ba + 0x10c * -0xe,
                        )
                      )
                        _0x169d12["XSlRg"](
                          setTimeout,
                          () => {
                            const _0x312bb4 = _0x3d0017,
                              _0x3fbb26 = playerInstance["getDuratio" + "n"]();
                            _0x3fbb26 &&
                              _0xd59615["jTJzo"](_0x123227, _0x3fbb26) &&
                              (playerInstance["seek"](_0x123227),
                              _0x474a1a &&
                                _0xd59615["oEGzO"](
                                  setTimeout,
                                  () => {
                                    const _0x26204c = _0x312bb4;
                                    playerInstance["play"]();
                                  },
                                  0x1 * -0x2701 + 0x1e5 * 0x7 + 0x1a86,
                                ));
                          },
                          -0x53e + -0x2393 + -0x1 * -0x2ac5,
                        );
                      else _0x474a1a && playerInstance["play"]();
                    }
                  } catch (_0x473a31) {
                    console["error"](_0x169d12["tckGE"], _0x473a31);
                  }
                },
                -0x1f4a + -0x1 * -0x2168 + 0x2 * -0x15,
              ));
          };
          playerInstance["once"](_0x305c03["IOPXC"], _0x3ccba0);
        }
        _0x305c03["UpCJz"]($, _0x305c03["BXhgR"])["click"]();
      } catch (_0x394f5b) {
        (console["error"](_0x305c03["HyPwi"], _0x394f5b),
          _0x305c03["UpCJz"](alert, _0x305c03["lbKOu"]));
      }
    }),
      (_0x33fc1a["onerror"] = function () {
        const _0x46a206 = _0xd6699f;
        _0x305c03["loIQV"](alert, _0x305c03["qgKTX"]);
      }),
      _0x33fc1a["readAsText"](_0x22e9e1, _0x305c03["kivrh"]));
  }),
  $(document)["on"]("click", "#sub-dual", async function () {
    const _0x26d83d = _0x9f5b01,
      _0x267bad = {
        DRfIJ: "7|0|5|6|4|" + "1|3|2",
        iGWLN: function (_0x2f89ab, _0x513a5f) {
          return _0x2f89ab(_0x513a5f);
        },
        uoIMn: ".sub-sbs",
        WNzkh: "d-none",
        nrWoU: "active",
        KKSdz: function (_0x431abe) {
          return _0x431abe();
        },
        CeGxP: ".sub-toggl" + "e-tabs .it" + "em",
        HvNNk: ".jw-main-c" + "aption-men" + "u",
        YrSfL: function (_0x668378, _0x28f1f1) {
          return _0x668378(_0x28f1f1);
        },
        zXSwy: ".jw-sub-ca" + "ption-menu",
        edBNc: ".sub-uploa" + "d",
      },
      _0x5d5e5a = _0x267bad["DRfIJ"]["split"]("|");
    let _0x43f8c2 = -0x23 * -0xdc + 0x2 * -0x439 + 0x27 * -0x8e;
    while (!![]) {
      switch (_0x5d5e5a[_0x43f8c2++]) {
        case "0":
          _0x267bad["iGWLN"]($, _0x267bad["uoIMn"])["removeClas" + "s"](
            _0x267bad["WNzkh"],
          );
          continue;
        case "1":
          _0x267bad["iGWLN"]($, this)["addClass"](_0x267bad["nrWoU"]);
          continue;
        case "2":
          _0x267bad["KKSdz"](updateDualSubtitles);
          continue;
        case "3":
          dualSubtitlesEnabled = !![];
          continue;
        case "4":
          _0x267bad["iGWLN"]($, _0x267bad["CeGxP"])["removeClas" + "s"](
            _0x267bad["nrWoU"],
          );
          continue;
        case "5":
          _0x267bad["iGWLN"]($, _0x267bad["HvNNk"])["addClass"](
            _0x267bad["nrWoU"],
          );
          continue;
        case "6":
          _0x267bad["YrSfL"]($, _0x267bad["zXSwy"])["addClass"](
            _0x267bad["nrWoU"],
          );
          continue;
        case "7":
          _0x267bad["iGWLN"]($, _0x267bad["edBNc"])["addClass"](
            _0x267bad["WNzkh"],
          );
          continue;
      }
      break;
    }
  }));
async function getSubtitleTracks(_0x432edf) {
  const _0x179c8c = _0x9f5b01,
    _0x2e2e94 = {
      FgUWr: function (_0x2fc7f6, _0x5bc52e) {
        return _0x2fc7f6(_0x5bc52e);
      },
      xyaSW: "#EXT-X-MED" + "IA:",
      uBKRV: "TYPE=SUBTI" + "TLES",
      vQCyM: function (_0x23f57e, _0x2ec59e) {
        return _0x23f57e && _0x2ec59e;
      },
    },
    _0x47a9f1 = await _0x2e2e94["FgUWr"](fetch, _0x432edf),
    _0x1715c7 = await _0x47a9f1["text"](),
    _0x810e14 = _0x1715c7["split"]("\x0a"),
    _0x3ced1 = [];
  for (const _0x3e2afc of _0x810e14) {
    if (
      _0x3e2afc["startsWith"](_0x2e2e94["xyaSW"]) &&
      _0x3e2afc["includes"](_0x2e2e94["uBKRV"])
    ) {
      const _0x295706 = _0x3e2afc["match"](/NAME="([^"]+)"/),
        _0x1a26cb = _0x3e2afc["match"](/URI="([^"]+)"/);
      _0x2e2e94["vQCyM"](_0x295706, _0x1a26cb) &&
        _0x3ced1["push"]({
          label: _0x295706[-0x1d8e + 0x1 * -0x109d + 0x7b2 * 0x6],
          file: _0x1a26cb[0xb * 0xfe + -0x69a + -0x44f],
        });
    }
  }
  return _0x3ced1;
}
($(document)["on"]("change", "#formFile", function () {
  const _0x44c843 = _0x9f5b01,
    _0x4925e3 = {
      GDKWW: function (_0x1ac999, _0x20df33) {
        return _0x1ac999(_0x20df33);
      },
      Oznnu: "#formName",
    },
    _0x323b91 = this["files"][0x1c6d + -0x3a4 + -0x18c9];
  if (!_0x323b91) return;
  const _0x29f289 = _0x323b91["name"],
    _0x3e4bfa = _0x29f289["replace"](/\.[^/.]+$/, "");
  _0x4925e3["GDKWW"]($, _0x4925e3["Oznnu"])["val"](_0x3e4bfa);
}),
  $(document)["on"](
    "click",
    ".jw-sub-ca" + "ption-menu" + ".active .d" + "ropdown-it" + "em",
    async function () {
      const _0x5cef68 = _0x9f5b01,
        _0xdc1a38 = {
          zVFOd: function (_0x41c2a9, _0x1f3018) {
            return _0x41c2a9(_0x1f3018);
          },
          UiXVe: function (_0x4520cc, _0x39c5fe) {
            return _0x4520cc(_0x39c5fe);
          },
          haydU: "data",
          aBWsH: function (_0x4e2003, _0x5e0f09) {
            return _0x4e2003(_0x5e0f09);
          },
          sCrrN: ".jw-sub-ca" + "ption-menu" + " .dropdown" + "-item",
          JzSry: "active",
          IvJdX: "#sub-dual",
          jIoCV: function (_0x10b23f, _0x142b21) {
            return _0x10b23f - _0x142b21;
          },
          otIGf: function (_0x1fc963) {
            return _0x1fc963();
          },
        },
        _0x3a4287 = _0xdc1a38["zVFOd"](
          parseInt,
          _0xdc1a38["UiXVe"]($, this)["attr"](_0xdc1a38["haydU"]),
        );
      (_0xdc1a38["aBWsH"]($, _0xdc1a38["sCrrN"])["removeClas" + "s"](
        _0xdc1a38["JzSry"],
      ),
        _0xdc1a38["UiXVe"]($, this)["addClass"](_0xdc1a38["JzSry"]));
      if (
        _0xdc1a38["UiXVe"]($, _0xdc1a38["IvJdX"])["hasClass"](
          _0xdc1a38["JzSry"],
        )
      ) {
        const _0xf0931c =
          subtitleTracks[
            _0xdc1a38["jIoCV"](_0x3a4287, -0x1a41 + 0x122b * -0x1 + 0x2c6d)
          ];
        ((secondaryCues = await _0xdc1a38["aBWsH"](
          loadCuesFromFile,
          _0xf0931c,
        )),
          _0xdc1a38["otIGf"](updateDualSubtitles));
      }
    },
  ));
function fixVietnamese(_0x434716) {
  const _0x1580f7 = _0x9f5b01,
    _0x2c2ae7 = {
      FWOei: function (_0x76c76f, _0x32c154) {
        return _0x76c76f(_0x32c154);
      },
    };
  try {
    return _0x2c2ae7["FWOei"](
      decodeURIComponent,
      _0x2c2ae7["FWOei"](escape, _0x434716),
    );
  } catch {
    return _0x434716;
  }
}
let customControlsAdded = ![],
  isAdPlaying = ![];
(playerInstance["setup"]({
  file: file,
  width: "100%",
  height: "100%",
  aspectratio: "16:9",
  skin: { name: "pom" },
  autostart: !![],
  repeat: !![],
  playbackRateControls: !![],
  playbackRates: [
    0x2709 + 0x997 + -0x30a0 * 0x1 + 0.25,
    -0x2331 + 0x1f89 + 0x3a8 + 0.5,
    -0x4 * -0x985 + -0x628 * 0x6 + 0x1 * -0x124 + 0.75,
    -0x1e2e + -0x9e8 + 0x2817,
    0x2079 + 0x1 * 0x1611 + -0x3689 + 0.25,
    0xb0b + -0x20a1 + 0x1597 * 0x1 + 0.5,
    -0x1 * -0x1eef + -0xeaa + -0x1043,
  ],
  image: background,
  playsinline: !![],
  advertising: {
    client: "vast",
    tag: tag,
    autostart: "viewable",
    vpaidmode: "insecure",
    skipoffset: 0x5,
    admessage: "Quảng cáo " + "kết thúc s" + "au (xxs)",
    skipmessage: "Bỏ qua sau" + " xx giây",
    skiptext: "Bỏ qua",
    vpaidcontrols: !![],
  },
  tracks: [
    { file: CONFIG["thumbs"], kind: "thumbnails" },
    ...(CONFIG["subtitles"] &&
    CONFIG["subtitles"]["length"] > -0xf4f + 0x1e9b + -0xf4c
      ? CONFIG["subtitles"]["map"]((_0x456656, _0x5b9828) => ({
          file: _0x456656["vtt_url"],
          kind: "subtitles",
          label: fixVietnamese(_0x456656["name"]),
          srclang: _0x456656["code"] || "vi",
          default: _0x5b9828 === -0x2320 + 0x74 * -0x3a + -0x8 * -0x7ad,
        }))
      : []),
  ],
}),
  playerInstance["on"]("adPlay", function () {
    isAdPlaying = !![];
  }),
  playerInstance["on"]("adComplete", function () {
    const _0x4daa36 = _0x9f5b01,
      _0x548f0a = {
        xXhrP: function (_0x1f9450) {
          return _0x1f9450();
        },
        KPaZB: function (_0xd125c2, _0x1d6ede, _0x39bb47) {
          return _0xd125c2(_0x1d6ede, _0x39bb47);
        },
      };
    isAdPlaying = ![];
    _0x548f0a["KPaZB"](
      setTimeout,
      () => {
        const _0xd6a8fe = _0x4daa36;
        _0x548f0a["xXhrP"](addCustomControls);
      },
      -0x60d * 0x3 + -0x1 * 0x1b9b + 0x6 * 0x7b1,
    );
  }),
  playerInstance["on"]("adSkipped", function () {
    const _0x3f94ac = _0x9f5b01,
      _0x57c8d3 = {
        TxsTu: function (_0x325409) {
          return _0x325409();
        },
        QrKfw: function (_0x54c54f, _0x4f9508, _0x3fb65d) {
          return _0x54c54f(_0x4f9508, _0x3fb65d);
        },
      };
    ((isAdPlaying = ![]),
      _0x57c8d3["QrKfw"](
        setTimeout,
        () => {
          const _0x4481b6 = _0x3f94ac;
          _0x57c8d3["TxsTu"](addCustomControls);
        },
        0x1423 + -0x3f7 + -0x7e4 * 0x2,
      ));
  }));
const resumeData = "PlayerPosi" + "tion-" + episode["id"];
(playerInstance["on"]("ready", function () {
  const _0x533408 = _0x9f5b01,
    _0x34a2e6 = {
      VTAsk: function (_0x992c6, _0x46cf11) {
        return _0x992c6 === _0x46cf11;
      },
      HWcYK: "CONTINUE_W" + "ATCHING_DA" + "TA",
      pzcAw: function (_0x12c067, _0xff4536) {
        return _0x12c067 > _0xff4536;
      },
      kfONx: function (_0x5711d6, _0x296a50) {
        return _0x5711d6 < _0x296a50;
      },
      xWfMr: function (_0x4ffc55, _0x28a0a1) {
        return _0x4ffc55 > _0x28a0a1;
      },
      sOLFP: function (_0xd3b87f, _0x4111bb) {
        return _0xd3b87f > _0x4111bb;
      },
      OUfJM: function (_0x4cd4db, _0x1a9e46) {
        return _0x4cd4db - _0x1a9e46;
      },
      hnTwG: function (_0x521799, _0x3d84d9, _0x36998d) {
        return _0x521799(_0x3d84d9, _0x36998d);
      },
      HPtbd: function (_0x4b95b8, _0x5b96f0) {
        return _0x4b95b8(_0x5b96f0);
      },
      CrIHA: "#video_mas" + "k",
      eFkYX: "message",
      DGmJO: function (_0x4ff3b5, _0x5cf96b) {
        return _0x4ff3b5 == _0x5cf96b;
      },
      rRyqR: function (_0x43baf4, _0xa64e17) {
        return _0x43baf4 !== _0xa64e17;
      },
      GCOUV: "undefined",
      QTRUz: function (_0x304306, _0x4ef801) {
        return _0x304306 == _0x4ef801;
      },
      xdLVQ: function (_0x236549, _0x311c0b) {
        return _0x236549 == _0x311c0b;
      },
      tlUFZ: "null",
      FogeZ: "Your brows" + "er is too " + "old!",
      KVhyS: "play",
      WBlyQ: function (_0x1c053a, _0x3c786d) {
        return _0x1c053a > _0x3c786d;
      },
      gaaqe: function (_0x5a13fe, _0x3bbaeb) {
        return _0x5a13fe(_0x3bbaeb);
      },
      gMfMf: ".jw-time-c" + "ontainer",
      nbmEP: function (_0x5c8ee0) {
        return _0x5c8ee0();
      },
      uGEpo: ".jwplayer",
      MEuLn: ".item-next",
      ZWjkY: "d-none",
      XvBzT: function (_0x480972, _0x1afd3a) {
        return _0x480972(_0x1afd3a);
      },
      MXFTE: "data-bs-ti" + "tle",
      bMXDK: function (_0x5d9977, _0x3d6b9f) {
        return _0x5d9977 + _0x3d6b9f;
      },
      BqjmD: "Xem tập ",
      tcDjF: function (_0x2d2268, _0xfcf192) {
        return _0x2d2268(_0xfcf192);
      },
      GYdXK: ".p_b-right",
    };
  (_0x34a2e6["HPtbd"]($, _0x34a2e6["CrIHA"])["remove"](),
    playerInstance["setCaption" + "s"]({
      ...playerInstance["getConfig"]()["captions"],
      backgroundOpacity: 0x0,
    }));
  let _0x1fa3eb = -0x1 * -0xced + -0x1b68 + 0xe7b;
  window["addEventLi" + "stener"](_0x34a2e6["eFkYX"], function (_0x11f97b) {
    const _0x6d4400 = _0x533408;
    if (_0x34a2e6["VTAsk"](_0x11f97b["data"]["type"], _0x34a2e6["HWcYK"])) {
      const _0x4c4e53 = _0x11f97b["data"]["data"];
      _0x4c4e53["currentTim" + "e"] &&
        playerInstance &&
        _0x34a2e6["pzcAw"](
          _0x4c4e53["currentTim" + "e"],
          0x1034 + 0x211 * 0x2 + -0x2 * 0xa2b,
        ) &&
        _0x34a2e6["kfONx"](
          _0x4c4e53["currentTim" + "e"],
          _0x4c4e53["duration"],
        ) &&
        (_0x1fa3eb = _0x4c4e53["currentTim" + "e"]);
    }
  });
  !isLive &&
    (_0x34a2e6["DGmJO"](_0x1fa3eb, 0xf * 0x21f + 0x191a + -0x12f9 * 0x3) &&
      (_0x34a2e6["rRyqR"](typeof Storage, _0x34a2e6["GCOUV"])
        ? (_0x34a2e6["QTRUz"](localStorage[resumeData], "") ||
          _0x34a2e6["QTRUz"](localStorage[resumeData], _0x34a2e6["GCOUV"])
            ? (_0x1fa3eb = 0x1d95 + 0x19ba + 0x374f * -0x1)
            : _0x34a2e6["xdLVQ"](localStorage[resumeData], _0x34a2e6["tlUFZ"])
              ? (localStorage[resumeData] = -0x55 + -0x488 + 0x4dd)
              : (_0x1fa3eb = localStorage[resumeData]),
          (window["onunload"] = function () {
            const _0x180df4 = _0x533408;
            localStorage[resumeData] = playerInstance["getPositio" + "n"]();
          }))
        : console["log"](_0x34a2e6["FogeZ"])),
    playerInstance["once"](_0x34a2e6["KVhyS"], function () {
      const _0x2c6cd7 = _0x533408,
        _0x4bfeaa = {
          yIpQO: function (_0x56ba31, _0x34ac0a) {
            const _0x5e063f = _0xfa96;
            return _0x34a2e6["xWfMr"](_0x56ba31, _0x34ac0a);
          },
          nLKku: function (_0x301424, _0xee674e) {
            const _0x1ba480 = _0xfa96;
            return _0x34a2e6["sOLFP"](_0x301424, _0xee674e);
          },
          lrUXP: function (_0x5e31ff, _0x3a97ea) {
            const _0x143a3a = _0xfa96;
            return _0x34a2e6["OUfJM"](_0x5e31ff, _0x3a97ea);
          },
        };
      _0x34a2e6["hnTwG"](
        setTimeout,
        () => {
          const _0x2efa8f = _0x2c6cd7;
          _0x4bfeaa["yIpQO"](
            _0x1fa3eb,
            0xb54 + 0x1 * -0x1eab + -0x1393 * -0x1,
          ) &&
            _0x4bfeaa["nLKku"](
              Math["abs"](
                _0x4bfeaa["lrUXP"](
                  playerInstance["getDuratio" + "n"](),
                  _0x1fa3eb,
                ),
              ),
              -0x8 * 0x295 + -0xc18 + 0x20c5,
            ) &&
            playerInstance["seek"](_0x1fa3eb);
        },
        -0x128 + 0x3 * 0x75f + -0x1301,
      );
    }));
  if (
    _0x34a2e6["WBlyQ"](
      _0x34a2e6["gaaqe"]($, _0x34a2e6["gMfMf"])["length"],
      -0xdb6 + -0x117 * 0x7 + 0x1557,
    )
  )
    return;
  (!tag || _0x34a2e6["VTAsk"](tag, "")) &&
    _0x34a2e6["nbmEP"](addCustomControls);
  const _0xd187fa = _0x34a2e6["HPtbd"]($, _0x34a2e6["uGEpo"]),
    _0x4d6154 =
      "\n    <div " +
      'class="ski' +
      'p-buttons"' +
      ">\n      <a" +
      ' class="sk' +
      "ip-intro s" +
      'b-button" ' +
      'id="skip-i' +
      'ntro" href' +
      '="#" style' +
      '="display:' +
      ' none;">\n ' +
      "       Bỏ " +
      "qua giới t" +
      "hiệu\n     " +
      " </a>\n    " +
      "  <a href=" +
      '"#" class=' +
      '"sb-button' +
      " light ski" +
      'p-outro" i' +
      'd="skip-ou' +
      'tro" style' +
      '="display:' +
      ' none;">\n ' +
      "       <di" +
      'v class="b' +
      "g progress" +
      '" style="w' +
      'idth: 0%;"' +
      "></div>\n  " +
      "      <div" +
      ' class="li' +
      'ne-center"' +
      ">\n        " +
      "  <span>Tậ" +
      "p tiếp the" +
      "o</span>\n " +
      "         <" +
      "div class=" +
      '"inc-icon ' +
      'icon-14">\n' +
      "          " +
      "  <svg hei" +
      'ght="512" ' +
      'viewBox="0' +
      ' 0 24 24" ' +
      'width="512' +
      '" xmlns="h' +
      "ttp://www." +
      "w3.org/200" +
      '0/svg">\n  ' +
      "          " +
      "  <path fi" +
      'll="curren' +
      'tColor" d=' +
      '"m4.028 20' +
      ".882a1 1 0" +
      " 0 0 1.027" +
      "-.05l12-8a" +
      "1 1 0 0 0 " +
      "0-1.664l-1" +
      "2-8a1 1 0 " +
      "0 0 -1.555" +
      ".832v16a1 " +
      "1 0 0 0 .5" +
      "28.882zm1." +
      "472-15.013" +
      " 9.2 6.131" +
      "-9.2 6.131" +
      'z"></path>' +
      "\n         " +
      "     <path" +
      ' fill="cur' +
      'rentColor"' +
      ' d="m19.5 ' +
      "19a1 1 0 0" +
      " 0 1-1v-12" +
      "a1 1 0 0 0" +
      " -2 0v12a1" +
      " 1 0 0 0 1" +
      ' 1z"></pat' +
      "h>\n       " +
      "     </svg" +
      ">\n        " +
      "  </div>\n " +
      "       </d" +
      "iv>\n      " +
      "</a>\n    <" +
      "/div>\n  ";
  (_0xd187fa["append"](_0x4d6154),
    nextEpisode &&
      _0x34a2e6["rRyqR"](nextEpisode, _0x34a2e6["tlUFZ"]) &&
      (_0x34a2e6["gaaqe"]($, _0x34a2e6["MEuLn"])["removeClas" + "s"](
        _0x34a2e6["ZWjkY"],
      ),
      _0x34a2e6["XvBzT"]($, _0x34a2e6["MEuLn"])["attr"](
        _0x34a2e6["MXFTE"],
        _0x34a2e6["bMXDK"](_0x34a2e6["BqjmD"], nextEpisode["name"]),
      )),
    otherServer &&
      _0x34a2e6["rRyqR"](otherServer, _0x34a2e6["tlUFZ"]) &&
      !isLive &&
      _0x34a2e6["tcDjF"]($, _0x34a2e6["GYdXK"])["prepend"](
        "<div class" +
          '="item-btn' +
          " item-dub " +
          "jw-audio-b" +
          'utton" dat' +
          "a-bs-toggl" +
          'e="dropdow' +
          'n" data-bs' +
          "-auto-clos" +
          'e="outside' +
          '" aria-exp' +
          'anded="fal' +
          'se">\n     ' +
          " <div clas" +
          's="line-ce' +
          "nter jw-au" +
          'dio-label"' +
          " data-bs-t" +
          'oggle="too' +
          'ltip" data' +
          "-bs-custom" +
          '-class="cu' +
          "stom-toolt" +
          'ip" data-b' +
          "s-placemen" +
          't="top" da' +
          "ta-bs-titl" +
          'e="' +
          episode["server"] +
          ('">\n       ' +
            " <div clas" +
            's="inc-ico' +
            'n">\n      ' +
            "    <svg w" +
            'idth="40" ' +
            'height="41' +
            '" viewBox=' +
            '"0 0 40 41' +
            '" fill="no' +
            'ne" xmlns=' +
            '"http://ww' +
            "w.w3.org/2" +
            '000/svg">\n' +
            "          " +
            "  <path d=" +
            '"M20 37.16' +
            "67V31.8984" +
            '" stroke="' +
            "currentCol" +
            'or" stroke' +
            '-width="2.' +
            '5" stroke-' +
            'linecap="r' +
            'ound" stro' +
            "ke-linejoi" +
            'n="round">' +
            "</path>\n  " +
            "          " +
            "<path fill" +
            '-rule="eve' +
            'nodd" clip' +
            '-rule="eve' +
            'nodd" d="M' +
            "19.9996 25" +
            ".247C16.26" +
            "09 25.247 " +
            "13.2295 22" +
            ".2032 13.2" +
            "295 18.447" +
            "1V10.6351C" +
            "13.2295 6." +
            "87903 16.2" +
            "609 3.8335" +
            " 19.9996 3" +
            ".8335C23.7" +
            "4 3.8335 2" +
            "6.7698 6.8" +
            "7903 26.76" +
            "98 10.6351" +
            "V18.4471C2" +
            "6.7698 22." +
            "2032 23.74" +
            " 25.247 19" +
            ".9996 25.2" +
            '47Z" strok' +
            'e="current' +
            'Color" str' +
            "oke-width=" +
            '"2.5" stro' +
            "ke-linecap" +
            '="round" s' +
            "troke-line" +
            'join="roun' +
            'd"></path>' +
            "\n         " +
            "   <path d" +
            '="M33.3337' +
            " 18.501C33" +
            ".3337 25.8" +
            "99 27.365 " +
            "31.8971 19" +
            ".9995 31.8" +
            "971C12.635" +
            "6 31.8971 " +
            "6.66699 25" +
            ".899 6.666" +
            '99 18.501"' +
            ' stroke="c' +
            "urrentColo" +
            'r" stroke-' +
            'width="2.5' +
            '" stroke-l' +
            'inecap="ro' +
            'und" strok' +
            "e-linejoin" +
            '="round"><' +
            "/path>\n   " +
            "       </s" +
            "vg>\n      " +
            "  </div>\n " +
            "       <sp" +
            'an c=""></' +
            "span>\n    " +
            "  </div>\n " +
            "   </div>\n" +
            "    <ul cl" +
            'ass="dropd' +
            "own-menu p" +
            "layer-dm j" +
            ("w-audio-me" +
              'nu">\n     ' +
              " <li>\n    " +
              "    <a cla" +
              'ss="dropdo' +
              "wn-item ac" +
              'tive" href' +
              '="#" data=' +
              "\x22")) +
          episode["encrypted_" + "url"] +
          '" label="' +
          episode["server"] +
          ('">\n       ' + "   <span c" + 'lass="s-ti' + 'tle">') +
          episode["server"] +
          ("</span>\n  " +
            "        <d" +
            'iv class="' +
            'w-check"><' +
            'i class="f' +
            "a-solid fa" +
            '-check"></' +
            "i></div>\n " +
            "       </a" +
            ">\n      </" +
            "li>\n      " +
            "<li>\n     " +
            "   <a clas" +
            's="dropdow' +
            'n-item" hr' +
            'ef="#" dat' +
            'a="') +
          otherServer["encrypted_" + "url"] +
          '" label="' +
          otherServer["server"] +
          ('">\n       ' + "   <span c" + 'lass="s-ti' + 'tle">') +
          otherServer["server"] +
          ("</span>\n  " +
            "        <d" +
            'iv class="' +
            'w-check"><' +
            'i class="f' +
            "a-solid fa" +
            '-check"></' +
            "i></div>\n " +
            "       </a" +
            ">\n      </" +
            "li>\n    </" +
            "ul>"),
      ),
    _0x34a2e6["nbmEP"](initializeTooltips));
}),
  playerInstance["on"]("play", function () {
    const _0x3714be = _0x9f5b01,
      _0x31f0a3 = {
        FRMuJ: function (_0x4450f8, _0x255b7d) {
          return _0x4450f8(_0x255b7d);
        },
        UTWmm: ".item-play",
        ifJOY: "d-none",
        qSfPf: function (_0x2cdf9d, _0xce1fcb) {
          return _0x2cdf9d(_0xce1fcb);
        },
        FcVDq: ".item-paus" + "e",
        StPlE: function (_0x53e32e, _0x17fc4f) {
          return _0x53e32e && _0x17fc4f;
        },
        VuKMK: function (_0x492ed2, _0x185749) {
          return _0x492ed2(_0x185749);
        },
        rHDeO: "play",
      };
    (_0x31f0a3["FRMuJ"]($, _0x31f0a3["UTWmm"])["removeClas" + "s"](
      _0x31f0a3["ifJOY"],
    ),
      _0x31f0a3["qSfPf"]($, _0x31f0a3["FcVDq"])["addClass"](_0x31f0a3["ifJOY"]),
      _0x31f0a3["StPlE"](isHost, !isSyncing) &&
        isLive &&
        _0x31f0a3["VuKMK"](sendPlayerActionFromIframe, _0x31f0a3["rHDeO"]));
  }),
  playerInstance["on"]("pause", function () {
    const _0x178134 = _0x9f5b01,
      _0x22ed60 = {
        uRwam: function (_0x2477c1, _0x5ea784) {
          return _0x2477c1(_0x5ea784);
        },
        gcYOr: ".item-paus" + "e",
        hJvHX: "d-none",
        zCZyK: function (_0x22933a, _0x37a760) {
          return _0x22933a(_0x37a760);
        },
        YoQWr: ".item-play",
        wGqmp: function (_0x5d9ab6, _0x11ea48) {
          return _0x5d9ab6 && _0x11ea48;
        },
        CXUjm: function (_0x9f2591, _0x2d42e9) {
          return _0x9f2591(_0x2d42e9);
        },
        vjxQC: "pause",
      };
    (_0x22ed60["uRwam"]($, _0x22ed60["gcYOr"])["removeClas" + "s"](
      _0x22ed60["hJvHX"],
    ),
      _0x22ed60["zCZyK"]($, _0x22ed60["YoQWr"])["addClass"](_0x22ed60["hJvHX"]),
      _0x22ed60["wGqmp"](isHost, !isSyncing) &&
        isLive &&
        _0x22ed60["CXUjm"](sendPlayerActionFromIframe, _0x22ed60["vjxQC"]));
  }),
  $(document)["on"]("click", ".w2g-sync-" + "status", function () {
    const _0x111be6 = _0x9f5b01,
      _0x346f31 = {
        Jjyol: function (_0xd0eea2, _0xe9a689) {
          return _0xd0eea2(_0xe9a689);
        },
        UIlWd: function (_0x13e96c, _0x401fb6, _0x518c09) {
          return _0x13e96c(_0x401fb6, _0x518c09);
        },
        vlNEL: "REQUEST_SY" + "NC",
        OnnjT: function (_0x5554d6, _0x3c1afb) {
          return _0x5554d6 > _0x3c1afb;
        },
      };
    if (isHost) return;
    lastHostPlaybackState
      ? _0x346f31["Jjyol"](handleSyncPlayback, lastHostPlaybackState)
      : (_0x346f31["UIlWd"](sendMessageToParent, _0x346f31["vlNEL"], {}),
        _0x346f31["OnnjT"](
          currentPosition,
          0x25b8 + 0x161f * 0x1 + 0x1 * -0x3bd7,
        ) && playerInstance["seek"](currentPosition));
  }));
function addCustomControls() {
  const _0x497a03 = _0x9f5b01,
    _0x112ba8 = {
      NkElc: "Trắng",
      eQmaK: function (_0x47b633, _0x4664e6) {
        return _0x47b633 + _0x4664e6;
      },
      rfjXo: "100",
      NQpCU: "Arial",
      JRIHG: "#fff",
      uqkRJ: "none",
      YGyWS: "Đen",
      MjlsZ: "#000000",
      LhELF: function (_0x67513, _0x3a4d81) {
        return _0x67513 + _0x3a4d81;
      },
      ZvPSQ: function (_0x2fb9d1, _0x123f73) {
        return _0x2fb9d1(_0x123f73);
      },
      paeSl: ".jw-button" + "-container",
      IHRtK: ".jw-contro" + "lbar",
      RLoNN: ".jw-slider" + "-time",
      aOivm: "b_bar jw-c" + "hapter-sli" + "der-time",
      rOqdC: function (_0x3988ca, _0x4da5b8) {
        return _0x3988ca(_0x4da5b8);
      },
      UzCYg: function (_0xb691af, _0x57953b) {
        return _0xb691af === _0x57953b;
      },
      OmVyT: "Không viền",
      htKfi: "raised",
      zDTWS: "Bo viền",
      OtcsS: "Đổ bóng",
    },
    _0x498b1b = playerInstance["getConfig"]()["captions"],
    _0x229445 = arrayColor["find"](
      (_0x1e5796) => _0x1e5796["color"] === (_0x498b1b["color"] || "white"),
    ),
    _0x252343 = _0x229445 ? _0x229445["label"] : _0x112ba8["NkElc"],
    _0x4b30f9 = _0x112ba8["eQmaK"](_0x498b1b["fontSize"] || "14", "pt"),
    _0x48fa90 = _0x112ba8["eQmaK"](
      _0x498b1b["fontOpacit" + "y"] || _0x112ba8["rfjXo"],
      "%",
    ),
    _0x2ed221 = _0x498b1b["fontFamily"] || _0x112ba8["NQpCU"],
    _0x2cfd1f = _0x498b1b["color"] || _0x112ba8["JRIHG"],
    _0xd78c70 = _0x498b1b["edgeStyle"] || _0x112ba8["uqkRJ"],
    _0x165bf8 = arrayBackground["find"](
      (_0x3c6bd4) =>
        _0x3c6bd4["background"] ===
        (_0x498b1b["background" + "Color"] || "#000000"),
    ),
    _0x1f6b98 = _0x165bf8 ? _0x165bf8["label"] : _0x112ba8["YGyWS"],
    _0x392151 = _0x498b1b["background" + "Color"] || _0x112ba8["MjlsZ"],
    _0x3b7795 = _0x112ba8["LhELF"](
      _0x498b1b["background" + "Opacity"] || "0",
      "%",
    ),
    _0x3f9c84 = arrayColor["find"](
      (_0x8411d2) => _0x8411d2["color"] === (_0x498b1b["color"] || "white"),
    ),
    _0x1f0d76 = _0x3f9c84 ? _0x3f9c84["label"] : _0x112ba8["NkElc"],
    _0x51121e = _0x498b1b["color"] || _0x112ba8["JRIHG"];
  (_0x112ba8["ZvPSQ"]($, _0x112ba8["paeSl"])["remove"](),
    _0x112ba8["ZvPSQ"]($, _0x112ba8["IHRtK"])["prepend"](
      "<div class" +
        '="jw-time-' +
        "container " +
        "jw-icon-in" +
        "line jw-te" +
        "xt jw-rese" +
        't">\n      ' +
        "        <d" +
        'iv class="' +
        "jw-icon jw" +
        "-icon-inli" +
        "ne jw-text" +
        " jw-reset " +
        "jw-text-el" +
        'apsed" rol' +
        'e="timer">' +
        "00:00</div" +
        ">\n        " +
        "      <div" +
        ' class="jw' +
        '-text-div"' +
        "></div>\n  " +
        "          " +
        "  <div cla" +
        'ss="jw-ico' +
        "n jw-icon-" +
        "inline jw-" +
        "text jw-re" +
        "set jw-tex" +
        "t-countdow" +
        'n" role="t' +
        'imer">00:0' +
        "0</div>\n  " +
        "          " +
        "  <div cla" +
        'ss="jw-ico' +
        "n jw-icon-" +
        "inline jw-" +
        "text jw-re" +
        "set jw-tex" +
        "t-duration" +
        '" role="ti' +
        'mer">00:00' +
        "</div>\n   " +
        "         <" +
        "/div>",
    ),
    _0x112ba8["ZvPSQ"]($, _0x112ba8["RLoNN"])["addClass"](_0x112ba8["aOivm"]),
    _0x112ba8["rOqdC"]($, _0x112ba8["IHRtK"])["append"](
      "<div class" +
        '="b_func">' +
        "\n    <div " +
        'class="p_b' +
        "-left line" +
        "-center ga" +
        'p-4">\n    ' +
        "          " +
        "   <div cl" +
        'ass="item-' +
        "btn item-p" +
        "ause jw-bt" +
        "n-play d-n" +
        'one" data-' +
        "bs-toggle=" +
        '"tooltip" ' +
        "data-bs-cu" +
        "stom-class" +
        '="custom-t' +
        'ooltip" da' +
        "ta-bs-plac" +
        'ement="top' +
        '" data-bs-' +
        'title="Tạm' +
        ' dừng">\n  ' +
        "          " +
        "       <di" +
        'v class="i' +
        "nc-icon ic" +
        'on-large">' +
        "\n         " +
        "          " +
        "  <svg fil" +
        'l="none" h' +
        'eight="512' +
        '" viewBox=' +
        '"0 0 24 24' +
        '" width="5' +
        '12" xmlns=' +
        '"http://ww' +
        "w.w3.org/2" +
        '000/svg">\n' +
        "          " +
        "          " +
        "   <path d" +
        '="m10.8 15' +
        ".9 4.67-3." +
        "5c.27-.2.2" +
        "7-.6 0-.8l" +
        "-4.67-3.5c" +
        "-.33-.25-." +
        "8-.01-.8.4" +
        "v7c0 .41.4" +
        "7.65.8.4zm" +
        "1.2-13.9c-" +
        "5.52 0-10 " +
        "4.48-10 10" +
        "s4.48 10 1" +
        "0 10 10-4." +
        "48 10-10-4" +
        ".48-10-10-" +
        "10zm0 18c-" +
        "4.41 0-8-3" +
        ".59-8-8s3." +
        "59-8 8-8 8" +
        " 3.59 8 8-" +
        "3.59 8-8 8" +
        'z" fill="c' +
        "urrentColo" +
        'r"></path>' +
        "\n         " +
        "          " +
        "  </svg>\n " +
        "          " +
        "        </" +
        "div>\n     " +
        "          " +
        "  </div>\n " +
        "          " +
        "      <div" +
        ' class="it' +
        "em-btn ite" +
        "m-play jw-" +
        "btn-play d" +
        '-none" dat' +
        "a-bs-toggl" +
        'e="tooltip' +
        '" data-bs-' +
        "custom-cla" +
        'ss="custom' +
        '-tooltip" ' +
        "data-bs-pl" +
        'acement="t' +
        'op" data-b' +
        's-title="P' +
        'hát">\n    ' +
        "          " +
        "     <div " +
        'class="inc' +
        "-icon  ico" +
        ('n-large">\n' +
          "          " +
          "          " +
          " <svg fill" +
          '="none" he' +
          'ight="512"' +
          ' viewBox="' +
          '0 0 24 24"' +
          ' width="51' +
          '2" xmlns="' +
          "http://www" +
          ".w3.org/20" +
          '00/svg">\n ' +
          "          " +
          "          " +
          "  <path d=" +
          '"m10 16c.5' +
          "5 0 1-.45 " +
          "1-1v-6c0-." +
          "55-.45-1-1" +
          "-1s-1 .45-" +
          "1 1v6c0 .5" +
          "5.45 1 1 1" +
          "zm2-14c-5." +
          "52 0-10 4." +
          "48-10 10s4" +
          ".48 10 10 " +
          "10 10-4.48" +
          " 10-10-4.4" +
          "8-10-10-10" +
          "zm0 18c-4." +
          "41 0-8-3.5" +
          "9-8-8s3.59" +
          "-8 8-8 8 3" +
          ".59 8 8-3." +
          "59 8-8 8zm" +
          "2-4c.55 0 " +
          "1-.45 1-1v" +
          "-6c0-.55-." +
          "45-1-1-1s-" +
          "1 .45-1 1v" +
          "6c0 .55.45" +
          ' 1 1 1z" f' +
          'ill="curre' +
          'ntColor"><' +
          "/path>\n   " +
          "          " +
          "        </" +
          "svg>\n     " +
          "          " +
          "    </div>" +
          "\n         " +
          "        </" +
          "div>\n     " +
          "          " +
          "  <div cla" +
          'ss="line-c' +
          "enter gap-" +
          '2">\n      ' +
          "          " +
          "   <div cl" +
          'ass="item-' +
          "btn skip-1" +
          '0-prev" da' +
          "ta-bs-togg" +
          'le="toolti' +
          'p" data-bs' +
          "-custom-cl" +
          'ass="custo' +
          'm-tooltip"' +
          " data-bs-p" +
          'lacement="' +
          'top" data-' +
          'bs-title="' +
          '10s trước"' +
          ">\n        " +
          "          " +
          "   <div cl" +
          'ass="line-' +
          'center">\n ' +
          "          " +
          "          " +
          "  <div cla" +
          'ss="inc-ic' +
          'on">\n     ' +
          "          " +
          "          " +
          "<svg width" +
          '="396" hei' +
          'ght="430" ' +
          'viewBox="0' +
          " 0 396 430" +
          '" fill="no' +
          'ne" xmlns=' +
          '"http://ww' +
          "w.w3.org/2" +
          '000/svg">\n' +
          "          " +
          "          " +
          "       <g ") +
        ('fill="curr' +
          'entColor">' +
          "\n         " +
          "          " +
          "          " +
          '<path d="M' +
          "237.342 26" +
          ".3129C243." +
          "281 20.374" +
          "2 243.281 " +
          "10.7449 23" +
          "7.342 4.80" +
          "589C231.40" +
          "3 -1.13321" +
          " 221.773 -" +
          "1.13321 21" +
          "5.835 4.80" +
          "589L178.77" +
          "9 41.8615C" +
          "178.72 41." +
          "9187 178.6" +
          "61 41.9765" +
          " 178.603 4" +
          "2.0348C175" +
          ".633 45.00" +
          "44 174.148" +
          " 48.8971 1" +
          "74.149 52." +
          "7894C174.1" +
          "48 56.6821" +
          " 175.633 6" +
          "0.5748 178" +
          ".603 63.54" +
          "44C178.661" +
          " 63.6027 1" +
          "78.72 63.6" +
          "605 178.77" +
          "9 63.7178L" +
          "215.835 10" +
          "0.773C221." +
          "773 106.71" +
          "3 231.403 " +
          "106.713 23" +
          "7.342 100." +
          "773C243.28" +
          "1 94.8342 " +
          "243.281 85" +
          ".205 237.3" +
          "42 79.2663" +
          "L225.235 6" +
          "7.1593C254" +
          ".972 72.10" +
          "6 283 85.0" +
          "372 306.20" +
          "8 104.807C" +
          "336.452 13" +
          "0.57 356.5" +
          "32 166.263" +
          " 362.848 2" +
          "05.487C369" +
          ".165 244.7" +
          "11 361.305" +
          " 284.903 3" +
          "40.677 318" +
          ".858C320.0" +
          "5 352.813 " +
          "288.003 37" +
          "8.312 250." +
          "282 390.78" +
          "3C212.56 4" +
          "03.255 171" +
          ".63 401.88" +
          "5 134.828 " +
          "386.919C98" +
          ".0256 371." +
          "951 67.756" +
          "2 344.366 " +
          "49.4459 30" +
          "9.108C31.1" +
          "355 273.84" +
          "9 25.9816 " +
          "233.222 34" +
          ".9071 194." +
          "508C43.832" +
          "6 155.794 " +
          "66.2547 12" +
          "1.524 98.1" +
          "538 97.841" +
          "3C104.898 " +
          "92.8343 10" +
          "6.306 83.3" +
          "091 101.29" +
          "9 76.5649C" +
          "96.2924 69" +
          ".8212 86.7" +
          "666 68.413" +
          "5 80.0229 " +
          "73.4199C42" +
          ".3199 101." +
          "412 15.818") +
        ("1 141.916 " +
          "5.26888 18" +
          "7.674C-5.2" +
          "8085 233.4" +
          "32 0.81144" +
          "3 281.452 " +
          "22.4528 32" +
          "3.125C44.0" +
          "947 364.8 " +
          "79.8708 39" +
          "7.403 123." +
          "37 415.093" +
          "C166.868 4" +
          "32.784 215" +
          ".246 434.4" +
          "03 259.83 " +
          "419.662C30" +
          "4.414 404." +
          "921 342.29" +
          "2 374.783 " +
          "366.672 33" +
          "4.65C391.0" +
          "52 294.517" +
          " 400.343 2" +
          "47.012 392" +
          ".877 200.6" +
          "51C385.412" +
          " 154.291 3" +
          "61.679 112" +
          ".104 325.9" +
          "32 81.653C" +
          "297.666 57" +
          ".5743 263." +
          "349 42.078" +
          "4 227.007 " +
          "36.6477L23" +
          "7.342 26.3" +
          '129Z">\n   ' +
          "          " +
          "          " +
          "      </pa" +
          "th>\n      " +
          "          " +
          "          " +
          "   <path d" +
          '="M150.883' +
          " 149.325C1" +
          "50.883 131" +
          ".568 129.6" +
          "76 122.388" +
          " 116.729 1" +
          "34.54L90.9" +
          "877 158.70" +
          "1C84.8635 " +
          "164.449 84" +
          ".5588 174." +
          "073 90.306" +
          "9 180.197C" +
          "96.055 186" +
          ".321 105.6" +
          "8 186.626 " +
          "111.803 18" +
          "0.878L120." +
          "467 172.74" +
          "6V312.954C" +
          "120.467 32" +
          "1.354 127." +
          "276 328.16" +
          "2 135.675 " +
          "328.162C14" +
          "4.074 328." +
          "162 150.88" +
          "3 321.354 " +
          "150.883 31" +
          "2.954V149." +
          '325Z">\n   ' +
          "          " +
          "          " +
          "      </pa" +
          "th>\n      " +
          "          " +
          "          " +
          "   <path f" +
          'ill-rule="' +
          'evenodd" c' +
          'lip-rule="' +
          'evenodd" d' +
          '="M190.579' +
          " 187.772C1" +
          "90.579 159" +
          ".154 213.7" +
          "79 135.953" +
          " 242.398 1" +
          "35.953C271" +
          ".016 135.9" +
          "53 294.217" +
          " 159.154 2" +
          "94.217 187" +
          ".772V276.3" +
          "58C294.217") +
        (" 304.976 2" +
          "71.016 328" +
          ".176 242.3" +
          "98 328.176" +
          "C213.779 3" +
          "28.176 190" +
          ".579 304.9" +
          "76 190.579" +
          " 276.358V1" +
          "87.772ZM26" +
          "3.801 187." +
          "772V276.35" +
          "8C263.801 " +
          "288.178 25" +
          "4.218 297." +
          "761 242.39" +
          "8 297.761C" +
          "230.577 29" +
          "7.761 220." +
          "995 288.17" +
          "8 220.995 " +
          "276.358V18" +
          "7.772C220." +
          "995 175.95" +
          "2 230.577 " +
          "166.369 24" +
          "2.398 166." +
          "369C254.21" +
          "8 166.369 " +
          "263.801 17" +
          "5.952 263." +
          "801 187.77" +
          '2Z">\n     ' +
          "          " +
          "          " +
          "    </path" +
          ">\n        " +
          "          " +
          "         <" +
          "/g>\n      " +
          "          " +
          "         <" +
          "/svg>\n    " +
          "          " +
          "         <" +
          "/div>\n    " +
          "          " +
          "       </d" +
          "iv>\n      " +
          "          " +
          "   </div>\n" +
          "          " +
          "         <" +
          "div class=" +
          '"item-btn ' +
          "skip-10-ne" +
          'xt" data-b' +
          's-toggle="' +
          'tooltip" d' +
          "ata-bs-cus" +
          "tom-class=" +
          '"custom-to' +
          'oltip" dat' +
          "a-bs-place" +
          'ment="top"' +
          " data-bs-t" +
          'itle="10s ' +
          'sau">\n    ' +
          "          " +
          "       <di" +
          'v class="l' +
          "ine-center" +
          '">\n       ' +
          "          " +
          "      <div" +
          ' class="in' +
          'c-icon">\n ' +
          "          " +
          "          " +
          "    <svg w" +
          'idth="396"' +
          ' height="4' +
          '30" viewBo' +
          'x="0 0 396' +
          ' 430" fill' +
          '="none" xm' +
          'lns="http:' +
          "//www.w3.o" +
          "rg/2000/sv" +
          'g">\n      ' +
          "          " +
          "          " +
          ' <g fill="' +
          "currentCol" +
          'or">\n     ' +
          "          " +
          "          " +
          "    <path " +
          'd="M158.26' +
          "7 26.3129C") +
        ("152.327 20" +
          ".3742 152." +
          "327 10.744" +
          "9 158.267 " +
          "4.80589C16" +
          "4.206 -1.1" +
          "3321 173.8" +
          "35 -1.1332" +
          "1 179.774 " +
          "4.80589L21" +
          "6.829 41.8" +
          "615C216.88" +
          "9 41.9187 " +
          "216.947 41" +
          ".9765 217." +
          "005 42.034" +
          "8C219.975 " +
          "45.0044 22" +
          "1.46 48.89" +
          "71 221.46 " +
          "52.7894C22" +
          "1.46 56.68" +
          "21 219.975" +
          " 60.5748 2" +
          "17.005 63." +
          "5444C216.9" +
          "47 63.6027" +
          " 216.889 6" +
          "3.6605 216" +
          ".829 63.71" +
          "78L179.774" +
          " 100.773C1" +
          "73.835 106" +
          ".713 164.2" +
          "06 106.713" +
          " 158.267 1" +
          "00.773C152" +
          ".327 94.83" +
          "42 152.327" +
          " 85.205 15" +
          "8.267 79.2" +
          "663L170.37" +
          "4 67.1593C" +
          "140.637 72" +
          ".106 112.6" +
          "08 85.0372" +
          " 89.4001 1" +
          "04.807C59." +
          "1561 130.5" +
          "7 39.0766 " +
          "166.263 32" +
          ".7602 205." +
          "487C26.443" +
          "9 244.711 " +
          "34.3038 28" +
          "4.903 54.9" +
          "314 318.85" +
          "8C75.5589 " +
          "352.813 10" +
          "7.605 378." +
          "312 145.32" +
          "7 390.783C" +
          "183.048 40" +
          "3.255 223." +
          "978 401.88" +
          "5 260.781 " +
          "386.919C29" +
          "7.583 371." +
          "951 327.85" +
          "2 344.366 " +
          "346.163 30" +
          "9.108C364." +
          "473 273.84" +
          "9 369.627 " +
          "233.222 36" +
          "0.701 194." +
          "508C351.77" +
          "6 155.794 " +
          "329.354 12" +
          "1.524 297." +
          "455 97.841" +
          "3C290.711 " +
          "92.8343 28" +
          "9.303 83.3" +
          "091 294.31" +
          " 76.5649C2" +
          "99.316 69." +
          "8212 308.8" +
          "42 68.4135" +
          " 315.585 7" +
          "3.4199C353" +
          ".288 101.4" +
          "12 379.79 " +
          "141.916 39" +
          "0.34 187.6" +
          "74C400.889" +
          " 233.432 3" +
          "94.797 281" +
          ".452 373.1" +
          "56 323.125") +
        ("C351.514 3" +
          "64.8 315.7" +
          "38 397.403" +
          " 272.239 4" +
          "15.093C228" +
          ".74 432.78" +
          "4 180.363 " +
          "434.403 13" +
          "5.778 419." +
          "662C91.194" +
          "1 404.921 " +
          "53.3168 37" +
          "4.783 28.9" +
          "365 334.65" +
          "C4.55614 2" +
          "94.517 -4." +
          "73438 247." +
          "012 2.7311" +
          "9 200.651C" +
          "10.1968 15" +
          "4.291 33.9" +
          "297 112.10" +
          "4 69.6765 " +
          "81.653C97." +
          "9424 57.57" +
          "43 132.259" +
          " 42.0784 1" +
          "68.601 36." +
          "6477L158.2" +
          "67 26.3129" +
          'Z">\n      ' +
          "          " +
          "          " +
          "   </path>" +
          "\n         " +
          "          " +
          "          " +
          '<path d="M' +
          "150.883 14" +
          "9.325C150." +
          "883 131.56" +
          "8 129.676 " +
          "122.388 11" +
          "6.729 134." +
          "54L90.9877" +
          " 158.701C8" +
          "4.8635 164" +
          ".449 84.55" +
          "88 174.073" +
          " 90.3069 1" +
          "80.197C96." +
          "055 186.32" +
          "1 105.68 1" +
          "86.626 111" +
          ".803 180.8" +
          "78L120.467" +
          " 172.746V3" +
          "12.954C120" +
          ".467 321.3" +
          "54 127.276" +
          " 328.162 1" +
          "35.675 328" +
          ".162C144.0" +
          "74 328.162" +
          " 150.883 3" +
          "21.354 150" +
          ".883 312.9" +
          "54V149.325" +
          'Z">\n      ' +
          "          " +
          "          " +
          "   </path>" +
          "\n         " +
          "          " +
          "          " +
          "<path fill" +
          '-rule="eve' +
          'nodd" clip' +
          '-rule="eve' +
          'nodd" d="M' +
          "190.579 18" +
          "7.772C190." +
          "579 159.15" +
          "4 213.779 " +
          "135.953 24" +
          "2.398 135." +
          "953C271.01" +
          "6 135.953 " +
          "294.217 15" +
          "9.154 294." +
          "217 187.77" +
          "2V276.358C" +
          "294.217 30" +
          "4.976 271." +
          "016 328.17" +
          "6 242.398 " +
          "328.176C21" +
          "3.779 328." +
          "176 190.57" +
          "9 304.976 ") +
        ("190.579 27" +
          "6.358V187." +
          "772ZM263.8" +
          "01 187.772" +
          "V276.358C2" +
          "63.801 288" +
          ".178 254.2" +
          "18 297.761" +
          " 242.398 2" +
          "97.761C230" +
          ".577 297.7" +
          "61 220.995" +
          " 288.178 2" +
          "20.995 276" +
          ".358V187.7" +
          "72C220.995" +
          " 175.952 2" +
          "30.577 166" +
          ".369 242.3" +
          "98 166.369" +
          "C254.218 1" +
          "66.369 263" +
          ".801 175.9" +
          "52 263.801" +
          ' 187.772Z"' +
          ">\n        " +
          "          " +
          "          " +
          " </path>\n " +
          "          " +
          "          " +
          "      </g>" +
          "\n         " +
          "          " +
          "      </sv" +
          "g>\n       " +
          "          " +
          "      </di" +
          "v>\n       " +
          "          " +
          "    </div>" +
          "\n         " +
          "          " +
          "</div>\n   " +
          "          " +
          "    </div>" +
          "\n         " +
          "        <d" +
          'iv class="' +
          "item-volum" +
          'e ps-3">\n ' +
          "          " +
          "        <d" +
          'iv class="' +
          "iv-volume " +
          "line-cente" +
          'r gap-3">\n' +
          "          " +
          "          " +
          " <i class=" +
          '"fa-solid ' +
          "fa-volume-" +
          "high iv-ic" +
          "on btn-mut" +
          'ed" data-b' +
          's-toggle="' +
          'tooltip" d' +
          "ata-bs-cus" +
          "tom-class=" +
          '"custom-to' +
          'oltip" dat' +
          "a-bs-place" +
          'ment="top"' +
          " data-bs-t" +
          'itle="Tắt ' +
          'tiếng"></i' +
          ">\n        " +
          "          " +
          "   <div id" +
          '="volume" ' +
          'class="iv-' +
          'bar">\n    ' +
          "          " +
          "         <" +
          "div class=" +
          '"iv-load" ' +
          'style="wid' +
          'th: 100%;"' +
          "></div>\n  " +
          "          " +
          "         <" +
          "/div>\n    " +
          "          " +
          "     </div" +
          ">\n        " +
          "         <" +
          "/div>\n    " +
          "          " +
          " </div>\n  " +
          "          ") +
        ("   <div cl" +
          'ass="p_b-r' +
          "ight line-" +
          "center gap" +
          '-4">\n     ' +
          "          " +
          "\x20") +
        (isLive
          ? "<div class" +
            '="w2g-live' +
            '-status" s' +
            'tyle="disp' +
            "lay: none;" +
            '">\n       ' +
            "          " +
            "   <div cl" +
            'ass="w2g-d' +
            'ot"></div>' +
            "\n         " +
            "          " +
            " <span>Trự" +
            "c tiếp</sp" +
            "an>\n      " +
            "          " +
            "  </div>\n " +
            "          " +
            "       <di" +
            'v class="w' +
            "2g-sync-st" +
            'atus" styl' +
            'e="display' +
            ': flex;">\n' +
            "          " +
            "          " +
            '<i class="' +
            "fa-solid f" +
            "a-sync ico" +
            'n-sync"></' +
            "i>\n       " +
            "          " +
            "   <span>Đ" +
            "ồng bộ</sp" +
            "an>\n      " +
            "          " +
            "  </div>"
          : "") +
        ("\n         " +
          "        <d" +
          'iv class="' +
          "item-btn i" +
          "tem-next d" +
          '-none" dat' +
          "a-bs-toggl" +
          'e="tooltip' +
          '" data-bs-' +
          "custom-cla" +
          'ss="custom' +
          '-tooltip" ' +
          "data-bs-pl" +
          'acement="t' +
          'op" data-b' +
          's-title=""' +
          ">\n        " +
          "          " +
          " <div clas" +
          's="line-ce' +
          'nter">\n   ' +
          "          " +
          "        <d" +
          'iv class="' +
          'inc-icon">' +
          "\n         " +
          "          " +
          "    <svg h" +
          'eight="512' +
          '" viewBox=' +
          '"0 0 24 24' +
          '" width="5' +
          '12" xmlns=' +
          '"http://ww' +
          "w.w3.org/2" +
          '000/svg">\n' +
          "          " +
          "          " +
          "     <path" +
          ' fill="cur' +
          'rentColor"' +
          ' d="m4.028' +
          " 20.882a1 " +
          "1 0 0 0 1." +
          "027-.05l12" +
          "-8a1 1 0 0" +
          " 0 0-1.664" +
          "l-12-8a1 1" +
          " 0 0 0 -1." +
          "555.832v16" +
          "a1 1 0 0 0" +
          " .528.882z" +
          "m1.472-15." +
          "013 9.2 6." +
          "131-9.2 6." +
          '131z">\n   ' +
          "          " +
          "          " +
          "  </path>\n" +
          "          " +
          "          " +
          "     <path" +
          ' fill="cur' +
          'rentColor"' +
          ' d="m19.5 ' +
          "19a1 1 0 0" +
          " 0 1-1v-12" +
          "a1 1 0 0 0" +
          " -2 0v12a1" +
          " 1 0 0 0 1" +
          ' 1z"></pat' +
          "h>\n       " +
          "          " +
          "      </sv" +
          "g>\n       " +
          "          " +
          "    </div>" +
          "\n         " +
          "          " +
          "  <span>Tậ" +
          "p sau</spa" +
          "n>\n       " +
          "          " +
          "  </div>\n " +
          "          " +
          "      </di" +
          "v>\n\n      " +
          "          " +
          " <div clas" +
          's="item-bt' +
          "n item-sub" +
          " jw-captio" +
          "n-button d" +
          '-none" dat' +
          "a-bs-toggl" +
          'e="dropdow' +
          'n" data-bs' +
          "-auto-clos" +
          'e="outside' +
          '" aria-exp' +
          ('anded="fal' +
            'se">\n     ' +
            "          " +
            "     <div " +
            'class="lin' +
            'e-center" ' +
            "data-bs-to" +
            'ggle="tool' +
            'tip" data-' +
            "bs-custom-" +
            'class="cus' +
            "tom-toolti" +
            'p" data-bs' +
            "-placement" +
            '="top" dat' +
            "a-bs-title" +
            '="Phụ đề">' +
            "\n         " +
            "          " +
            "   <div cl" +
            'ass="inc-i' +
            'con">\n    ' +
            "          " +
            "          " +
            "<svg width" +
            '="40" heig' +
            'ht="41" vi' +
            'ewBox="0 0' +
            ' 40 41" fi' +
            'll="none" ' +
            'xmlns="htt' +
            "p://www.w3" +
            ".org/2000/" +
            'svg">\n    ' +
            "          " +
            "          " +
            "  <path d=" +
            '"M33.75 30' +
            ".5H6.25C5." +
            "25544 30.5" +
            " 4.30161 3" +
            "0.1049 3.5" +
            "9835 29.40" +
            "17C2.89509" +
            " 28.6984 2" +
            ".5 27.7446" +
            " 2.5 26.75" +
            "V9.25C2.5 " +
            "8.25544 2." +
            "89509 7.30" +
            "161 3.5983" +
            "5 6.59835C" +
            "4.30161 5." +
            "89509 5.25" +
            "544 5.5 6." +
            "25 5.5H33." +
            "75C34.7446" +
            " 5.5 35.69" +
            "84 5.89509" +
            " 36.4016 6" +
            ".59835C37." +
            "1049 7.301" +
            "61 37.5 8." +
            "25544 37.5" +
            " 9.25V26.7" +
            "5C37.5 27." +
            "7446 37.10" +
            "49 28.6984" +
            " 36.4016 2" +
            "9.4017C35." +
            "6984 30.10" +
            "49 34.7446" +
            " 30.5 33.7" +
            "5 30.5ZM6." +
            "25 8C5.918" +
            "48 8 5.600" +
            "54 8.1317 " +
            "5.36612 8." +
            "36612C5.13" +
            "17 8.60054" +
            " 5 8.91848" +
            " 5 9.25V26" +
            ".75C5 27.0" +
            "815 5.1317" +
            " 27.3995 5" +
            ".36612 27." +
            "6339C5.600" +
            "54 27.8683" +
            " 5.91848 2" +
            "8 6.25 28H" +
            "33.75C34.0" +
            "815 28 34." +
            "3995 27.86" +
            "83 34.6339" +
            " 27.6339C3" +
            "4.8683 27." +
            "3995 35 27" +
            ".0815 35 2" +
            "6.75V9.25C" +
            "35 8.91848") +
          (" 34.8683 8" +
            ".60054 34." +
            "6339 8.366" +
            "12C34.3995" +
            " 8.1317 34" +
            ".0815 8 33" +
            ".75 8H6.25" +
            "ZM18 23C18" +
            " 22.6685 1" +
            "7.8683 22." +
            "3505 17.63" +
            "39 22.1161" +
            "C17.3995 2" +
            "1.8817 17." +
            "0815 21.75" +
            " 16.75 21." +
            "75H11.75C1" +
            "1.6515 21." +
            "75 11.554 " +
            "21.7306 11" +
            ".463 21.69" +
            "29C11.372 " +
            "21.6552 11" +
            ".2893 21.6" +
            " 11.2197 2" +
            "1.5303C11." +
            "15 21.4607" +
            " 11.0948 2" +
            "1.378 11.0" +
            "571 21.287" +
            "C11.0194 2" +
            "1.196 11 2" +
            "1.0985 11 " +
            "21V15C11 1" +
            "4.8011 11." +
            "079 14.610" +
            "3 11.2197 " +
            "14.4697C11" +
            ".3603 14.3" +
            "29 11.5511" +
            " 14.25 11." +
            "75 14.25H1" +
            "6.75C17.08" +
            "15 14.25 1" +
            "7.3995 14." +
            "1183 17.63" +
            "39 13.8839" +
            "C17.8683 1" +
            "3.6495 18 " +
            "13.3315 18" +
            " 13C18 12." +
            "6685 17.86" +
            "83 12.3505" +
            " 17.6339 1" +
            "2.1161C17." +
            "3995 11.88" +
            "17 17.0815" +
            " 11.75 16." +
            "75 11.75H1" +
            "1.75C10.88" +
            "91 11.7533" +
            " 10.0643 1" +
            "2.0968 9.4" +
            "5554 12.70" +
            "55C8.84676" +
            " 13.3143 8" +
            ".50329 14." +
            "1391 8.5 1" +
            "5V21C8.503" +
            "29 21.8609" +
            " 8.84676 2" +
            "2.6857 9.4" +
            "5554 23.29" +
            "45C10.0643" +
            " 23.9032 1" +
            "0.8891 24." +
            "2467 11.75" +
            " 24.25H16." +
            "75C17.0815" +
            " 24.25 17." +
            "3995 24.11" +
            "83 17.6339" +
            " 23.8839C1" +
            "7.8683 23." +
            "6495 18 23" +
            ".3315 18 2" +
            "3ZM31.5 23" +
            "C31.5 22.6" +
            "685 31.368" +
            "3 22.3505 " +
            "31.1339 22" +
            ".1161C30.8" +
            "995 21.881" +
            "7 30.5815 " +
            "21.75 30.2" +
            "5 21.75H25" +
            ".25C25.052" +
            "1 21.7468 " +
            "24.8632 21" +
            ".6667 24.7") +
          ("232 21.526" +
            "8C24.5833 " +
            "21.3868 24" +
            ".5032 21.1" +
            "979 24.5 2" +
            "1V15C24.50" +
            "32 14.8021" +
            " 24.5833 1" +
            "4.6132 24." +
            "7232 14.47" +
            "32C24.8632" +
            " 14.3333 2" +
            "5.0521 14." +
            "2532 25.25" +
            " 14.25H30." +
            "25C30.5815" +
            " 14.25 30." +
            "8995 14.11" +
            "83 31.1339" +
            " 13.8839C3" +
            "1.3683 13." +
            "6495 31.5 " +
            "13.3315 31" +
            ".5 13C31.5" +
            " 12.6685 3" +
            "1.3683 12." +
            "3505 31.13" +
            "39 12.1161" +
            "C30.8995 1" +
            "1.8817 30." +
            "5815 11.75" +
            " 30.25 11." +
            "75H25.25C2" +
            "4.3891 11." +
            "7533 23.56" +
            "43 12.0968" +
            " 22.9555 1" +
            "2.7055C22." +
            "3468 13.31" +
            "43 22.0033" +
            " 14.1391 2" +
            "2 15V21C22" +
            ".0033 21.8" +
            "609 22.346" +
            "8 22.6857 " +
            "22.9555 23" +
            ".2945C23.5" +
            "643 23.903" +
            "2 24.3891 " +
            "24.2467 25" +
            ".25 24.25H" +
            "30.25C30.5" +
            "815 24.25 " +
            "30.8995 24" +
            ".1183 31.1" +
            "339 23.883" +
            "9C31.3683 " +
            "23.6495 31" +
            ".5 23.3315" +
            " 31.5 23ZM" +
            "37.5 34.25" +
            "C37.5 33.9" +
            "185 37.368" +
            "3 33.6005 " +
            "37.1339 33" +
            ".3661C36.8" +
            "995 33.131" +
            "7 36.5815 " +
            "33 36.25 3" +
            "3H3.75C3.4" +
            "1848 33 3." +
            "10054 33.1" +
            "317 2.8661" +
            "2 33.3661C" +
            "2.6317 33." +
            "6005 2.5 3" +
            "3.9185 2.5" +
            " 34.25C2.5" +
            " 34.5815 2" +
            ".6317 34.8" +
            "995 2.8661" +
            "2 35.1339C" +
            "3.10054 35" +
            ".3683 3.41" +
            "848 35.5 3" +
            ".75 35.5H3" +
            "6.25C36.58" +
            "15 35.5 36" +
            ".8995 35.3" +
            "683 37.133" +
            "9 35.1339C" +
            "37.3683 34" +
            ".8995 37.5" +
            " 34.5815 3" +
            "7.5 34.25Z" +
            '" fill="cu' +
            "rrentColor" +
            '"></path>\n' +
            "          " +
            "          ") +
          ("    </svg>" +
            "\n         " +
            "          " +
            "   </div>\n" +
            "          " +
            "          " +
            "  <span>Ph" +
            "ụ đề</span" +
            ">\n        " +
            "          " +
            "  </div>\n " +
            "          " +
            "       </d" +
            "iv>\n      " +
            "          " +
            "  <ul clas" +
            's="dropdow' +
            "n-menu pla" +
            "yer-dm dm-" +
            'sub ">\n   ' +
            "          " +
            "       <di" +
            'v class="d' +
            "ropdown-ti" +
            'tle">\n    ' +
            "          " +
            "        <d" +
            'iv class="' +
            "line-cente" +
            'r w-100">\n' +
            "          " +
            "          " +
            "    <span " +
            "data-bs-to" +
            'ggle="tool' +
            'tip" data-' +
            "bs-custom-" +
            'class="cus' +
            "tom-toolti" +
            'p" data-bs' +
            "-placement" +
            '="top" dat' +
            "a-bs-title" +
            '="Hiển thị' +
            " 2 phụ đề " +
            'cùng lúc">' +
            "Phụ đề</sp" +
            "an>\n      " +
            "          " +
            "        <d" +
            'iv class="' +
            "flex-grow-" +
            '1"></div>\n' +
            "          " +
            "          " +
            "    <div c" +
            'lass="sub-' +
            "toggle-tab" +
            "s line-cen" +
            "ter jw-cap" +
            "tion-switc" +
            'h">\n      ' +
            "          " +
            "          " +
            '<a id="sub' +
            '-on" data=' +
            '"on" class' +
            '="item">Bậ' +
            "t</a>\n    " +
            "          " +
            "          " +
            '  <a id="s' +
            'ub-dual" d' +
            'ata="doul"' +
            ' class="it' +
            'em">Song n' +
            "gữ</a>\n   " +
            "          " +
            "          " +
            '   <a id="' +
            'sub-off" d' +
            'ata="off" ' +
            'class="ite' +
            'm">Tắt</a>' +
            "\n         " +
            "          " +
            "       <a " +
            'id="sub-up' +
            '" data="up' +
            'load" clas' +
            's="item"><' +
            'i class="f' +
            "a-solid fa" +
            "-arrow-up-" +
            "from-brack" +
            'et"></i></' +
            "a>\n       " +
            "          " +
            "         <" +
            'a id="togg') +
          ('le-subs" d' +
            'ata="setti' +
            'ng" class=' +
            '"item item' +
            '-circle"><' +
            'i class="f' +
            "a-solid fa" +
            '-gear"></i' +
            "></a>\n    " +
            "          " +
            "          " +
            "</div>\n   " +
            "          " +
            "         <" +
            "/div>\n    " +
            "          " +
            "      </di" +
            "v>\n       " +
            "          " +
            "   <div cl" +
            'ass="sub-s' +
            'bs">\n     ' +
            "          " +
            "       <di" +
            'v class="s' +
            "ub-col is-" +
            "primary jw" +
            "-main-capt" +
            'ion-menu">' +
            "\n         " +
            "          " +
            "   </div>\n" +
            "          " +
            "          " +
            "  <div cla" +
            'ss="sub-co' +
            "l is-secon" +
            "dary jw-su" +
            "b-caption-" +
            'menu">\n   ' +
            "          " +
            "         <" +
            "/div>\n    " +
            "          " +
            "      </di" +
            "v>\n       " +
            "          " +
            "   <div cl" +
            'ass="sub-u' +
            "pload d-no" +
            'ne">\n     ' +
            "          " +
            "         <" +
            "div class=" +
            '"m-group">' +
            "\n         " +
            "          " +
            "         <" +
            "div class=" +
            '"small">Tả' +
            "i lên phụ " +
            "đề (.vtt, " +
            ".srt) </di" +
            "v>\n       " +
            "          " +
            "          " +
            " <div clas" +
            's="upload-' +
            'form">\n   ' +
            "          " +
            "          " +
            "         <" +
            "input clas" +
            's="form-co' +
            "ntrol form" +
            "-control-s" +
            'm" type="f' +
            'ile" id="f' +
            'ormFile" a' +
            'ccept=".vt' +
            't,.srt">\n ' +
            "          " +
            "          " +
            "       </d" +
            "iv>\n      " +
            "          " +
            "        </" +
            "div>\n     " +
            "          " +
            "         <" +
            "div class=" +
            '"m-group">' +
            "\n         " +
            "          " +
            "         <" +
            "div class=" +
            '"small">Đặ' +
            "t tên phụ " +
            "đề</div>\n " +
            "          ") +
          ("          " +
            "       <in" +
            'put type="' +
            'text" id="' +
            'formName" ' +
            'class="for' +
            "m-control " +
            "form-contr" +
            "ol-sm form" +
            '-dark" pla' +
            'ceholder="' +
            'Nhập tên">' +
            "\n         " +
            "          " +
            "     </div" +
            ">\n        " +
            "          " +
            "      <div" +
            ' class="bu' +
            "ttons mt-1" +
            '">\n       ' +
            "          " +
            "          " +
            " <a class=" +
            '"btn btn-s' +
            "m btn-prim" +
            "ary btn-up" +
            'load-form"' +
            ">\n        " +
            "          " +
            "          " +
            "    <div c" +
            'lass="line' +
            '-center">\n' +
            "          " +
            "          " +
            "          " +
            "      <i c" +
            'lass="fa-s' +
            "olid fa-ar" +
            "row-up-fro" +
            'm-bracket"' +
            "></i>\n    " +
            "          " +
            "          " +
            "          " +
            "  <span>Tả" +
            "i lên</spa" +
            "n>\n       " +
            "          " +
            "          " +
            "     </div" +
            ">\n        " +
            "          " +
            "          " +
            "</a>\n     " +
            "          " +
            "         <" +
            "/div>\n    " +
            "          " +
            "      </di" +
            "v>\n       " +
            "          " +
            " </ul>\n   " +
            "          " +
            "    \n     " +
            "          " +
            "  <div cla" +
            'ss="item-b' +
            "tn item-pi" +
            "p jw-float" +
            '-player" d' +
            "ata-bs-tog" +
            'gle="toolt' +
            'ip" data-b' +
            "s-custom-c" +
            'lass="cust' +
            "om-tooltip" +
            '" data-bs-' +
            "placement=" +
            '"top" data' +
            "-bs-title=" +
            '"Xem dạng ' +
            'cửa sổ">\n ' +
            "          " +
            "        <d" +
            'iv class="' +
            "line-cente" +
            'r">\n      ' +
            "          " +
            "     <div " +
            'class="inc' +
            '-icon">\n  ' +
            "          " +
            "          " +
            " <svg widt" +
            'h="98" hei' +
            'ght="98" v' +
            'iewBox="0 ' +
            '0 98 98" f') +
          ('ill="none"' +
            ' xmlns="ht' +
            "tp://www.w" +
            "3.org/2000" +
            '/svg">\n   ' +
            "          " +
            "          " +
            "  <path d=" +
            '"M4.08334 ' +
            "14.1667C4." +
            "08334 10.8" +
            "53 6.76964" +
            " 8.16675 1" +
            "0.0833 8.1" +
            "6675H75.66" +
            "67C78.9804" +
            " 8.16675 8" +
            "1.6667 10." +
            "853 81.666" +
            "7 14.1667V" +
            "35.6251C81" +
            ".6667 37.3" +
            "74 80.2489" +
            " 38.7917 7" +
            "8.5 38.791" +
            "8V38.7918V" +
            "38.7918C76" +
            ".8432 38.7" +
            "918 75.5 3" +
            "7.4486 75." +
            "5 35.7918V" +
            "26.5V20.5C" +
            "75.5 17.18" +
            "63 72.8137" +
            " 14.5 69.5" +
            " 14.5L17 1" +
            "4.5C13.686" +
            "3 14.5 11 " +
            "17.1863 11" +
            " 20.5V56.5" +
            "C11 59.813" +
            "7 13.6863 " +
            "62.5 17 62" +
            ".5L21 62.5" +
            "C22.933 62" +
            ".5 24.5 64" +
            ".067 24.5 " +
            "66V66V66C2" +
            "4.5 67.887" +
            " 22.9703 6" +
            "9.4167 21." +
            "0833 69.41" +
            "67H10.0833" +
            "C6.76963 6" +
            "9.4167 4.0" +
            "8334 66.73" +
            "05 4.08334" +
            " 63.4167V1" +
            '4.1667Z" f' +
            'ill="curre' +
            'ntColor"><' +
            "/path>\n   " +
            "          " +
            "          " +
            "  <path fi" +
            'll-rule="e' +
            'venodd" cl' +
            'ip-rule="e' +
            'venodd" d=' +
            '"M36.75 53' +
            ".0833C36.7" +
            "5 50.8282 " +
            "38.5782 49" +
            " 40.8333 4" +
            "9H89.8333C" +
            "92.0885 49" +
            " 93.9167 5" +
            "0.8282 93." +
            "9167 53.08" +
            "33V85.75C9" +
            "3.9167 88." +
            "0052 92.08" +
            "85 89.8333" +
            " 89.8333 8" +
            "9.8333H40." +
            "8333C38.57" +
            "82 89.8333" +
            " 36.75 88." +
            "0052 36.75" +
            " 85.75V53." +
            "0833ZM49 5" +
            "7.1667C46." +
            "7448 57.16" +
            "67 44.9167" +
            " 58.9948 4" +
            "4.9167 61." +
            "25V77.5833" +
            "C44.9167 7" +
            "9.8385 46." +
            "7448 81.66") +
          ("67 49 81.6" +
            "667H81.666" +
            "7C83.9218 " +
            "81.6667 85" +
            ".75 79.838" +
            "5 85.75 77" +
            ".5833V61.2" +
            "5C85.75 58" +
            ".9948 83.9" +
            "218 57.166" +
            "7 81.6667 " +
            "57.1667H49" +
            'Z" fill="c' +
            "urrentColo" +
            'r"></path>' +
            "\n         " +
            "          " +
            "      <pat" +
            'h d="M40.8' +
            "333 53.083" +
            "3H89.8333V" +
            "85.75H40.8" +
            "333V53.083" +
            '3Z" fill="' +
            "currentCol" +
            'or">\n     ' +
            "          " +
            "          " +
            "</path>\n  " +
            "          " +
            "          " +
            " </svg>\n\n " +
            "          " +
            "          " +
            "</div>\n   " +
            "          " +
            "        <s" +
            "pan>PiP</s" +
            "pan>\n     " +
            "          " +
            "    </div>" +
            "\n         " +
            "        </" +
            "div>\n     " +
            "          " +
            "  <div cla" +
            'ss="item-b' +
            "tn item-se" +
            'tup" data-' +
            "bs-toggle=" +
            '"dropdown"' +
            " data-bs-a" +
            "uto-close=" +
            '"outside" ' +
            "aria-expan" +
            'ded="false' +
            '">\n       ' +
            "          " +
            "  <div cla" +
            'ss="line-c' +
            'enter" dat' +
            "a-bs-toggl" +
            'e="tooltip' +
            '" data-bs-' +
            "custom-cla" +
            'ss="custom' +
            '-tooltip" ' +
            "data-bs-pl" +
            'acement="t' +
            'op">\n     ' +
            "          " +
            "      <div" +
            ' class="in' +
            "c-icon ico" +
            'n-quality"' +
            ">\n\n       " +
            "          " +
            "      <svg" +
            ' width="40' +
            '" height="' +
            '40" viewBo' +
            'x="0 0 40 ' +
            '40" fill="' +
            'none" xmln' +
            's="http://' +
            "www.w3.org" +
            '/2000/svg"' +
            ">\n        " +
            "          " +
            "       <pa" +
            'th d="M35.' +
            "2488 14.82" +
            "55V25.1732" +
            "C35.2488 2" +
            "6.8355 34." +
            "3618 28.37" +
            "12 32.9218" +
            " 29.203L23" +
            ".9623 34.3" +
            "76C22.5222") +
          (" 35.208 20" +
            ".7482 35.2" +
            "08 19.3082" +
            " 34.376L10" +
            ".3469 29.2" +
            "03C8.90852" +
            " 28.3712 8" +
            ".02148 26." +
            "8355 8.021" +
            "48 25.1732" +
            "V14.8255C8" +
            ".02148 13." +
            "1633 8.908" +
            "52 11.6276" +
            " 10.3469 1" +
            "0.7974L19." +
            "3082 5.622" +
            "71C20.7482" +
            " 4.79243 2" +
            "2.5222 4.7" +
            "9243 23.96" +
            "23 5.62271" +
            "L32.9218 1" +
            "0.7974C34." +
            "3618 11.62" +
            "76 35.2488" +
            " 13.1633 3" +
            "5.2488 14." +
            '8255Z" str' +
            'oke="curre' +
            'ntColor" s' +
            "troke-widt" +
            'h="2.5" st' +
            "roke-linec" +
            'ap="round"' +
            " stroke-li" +
            'nejoin="ro' +
            'und"></pat' +
            "h>\n       " +
            "          " +
            "        <p" +
            'ath d="M21' +
            ".6335 24.6" +
            "114C24.181" +
            " 24.6114 2" +
            "6.2453 22." +
            "5471 26.24" +
            "53 19.9994" +
            "C26.2453 1" +
            "7.4518 24." +
            "181 15.387" +
            "5 21.6335 " +
            "15.3875C19" +
            ".0858 15.3" +
            "875 17.021" +
            "5 17.4518 " +
            "17.0215 19" +
            ".9994C17.0" +
            "215 22.547" +
            "1 19.0858 " +
            "24.6114 21" +
            ".6335 24.6" +
            '114Z" stro' +
            'ke="curren' +
            'tColor" st' +
            "roke-width" +
            '="2.5" str' +
            "oke-lineca" +
            'p="round" ' +
            "stroke-lin" +
            'ejoin="rou' +
            'nd"></path' +
            ">\n        " +
            "          " +
            "     </svg" +
            ">\n        " +
            "          " +
            "     <span" +
            ' class="q-' +
            'play">Auto' +
            "</span>\n  " +
            "          " +
            "         <" +
            "/div>\n    " +
            "          " +
            "       <sp" +
            "an>Cài đặt" +
            "</span>\n  " +
            "          " +
            "       </d" +
            "iv>\n      " +
            "          " +
            " </div>\n  " +
            "          " +
            "     <ul c" +
            'lass="drop' +
            "down-menu " +
            'player-dm"' +
            ">\n        " +
            "          ") +
          (" <div clas" +
            's="content' +
            '-slide">\n ' +
            "          " +
            "          " +
            "<div class" +
            '="dropdown' +
            '-title">\n ' +
            "          " +
            "          " +
            "  <span cl" +
            'ass="s-tit' +
            'le">Cài đặ' +
            "t</span>\n " +
            "          " +
            "          " +
            "</div>\n   " +
            "          " +
            "        <d" +
            'iv class="' +
            'cs-list">\n' +
            "          " +
            "          " +
            '   <a id="' +
            "toggle-qua" +
            'lity" clas' +
            's="cs-item' +
            " line-cent" +
            'er">\n     ' +
            "          " +
            "          " +
            "<div class" +
            '="csi-titl' +
            'e">Chất lư' +
            "ợng</div>\n" +
            "          " +
            "          " +
            "     <div " +
            'class="csi' +
            "-current l" +
            "ine-center" +
            '">\n       ' +
            "          " +
            "          " +
            "<span clas" +
            's="jw-titl' +
            'e-quality"' +
            ">Auto (108" +
            "0P)</span>" +
            "\n         " +
            "          " +
            "        <i" +
            ' class="fa' +
            "-solid fa-" +
            "angle-righ" +
            't"></i>\n  ' +
            "          " +
            "          " +
            "   </div>\n" +
            "          " +
            "          " +
            "   </a>\n  " +
            "          " +
            "          " +
            ' <a id="to' +
            "ggle-capti" +
            'on" class=' +
            '"cs-item l' +
            "ine-center" +
            '">\n       ' +
            "          " +
            "        <d" +
            'iv class="' +
            'csi-title"' +
            ">Phụ đề</d" +
            "iv>\n      " +
            "          " +
            "         <" +
            "div class=" +
            '"csi-curre' +
            "nt line-ce" +
            'nter">\n   ' +
            "          " +
            "          " +
            "    <span>" +
            "Tuỳ chỉnh<" +
            "/span>\n   " +
            "          " +
            "          " +
            "    <i cla" +
            'ss="fa-sol' +
            "id fa-angl" +
            'e-right"><' +
            "/i>\n      " +
            "          " +
            "         <" +
            "/div>\n    " +
            "          " +
            "         <" +
            "/a>\n      ") +
          ("          " +
            "       <a " +
            'id="toggle' +
            '-speed" cl' +
            'ass="cs-it' +
            "em line-ce" +
            'nter">\n   ' +
            "          " +
            "          " +
            "  <div cla" +
            'ss="csi-ti' +
            'tle">Tốc đ' +
            "ộ</div>\n  " +
            "          " +
            "          " +
            "   <div cl" +
            'ass="csi-c' +
            "urrent lin" +
            'e-center">' +
            "\n         " +
            "          " +
            "        <s" +
            "pan class=" +
            '"jw-speed-' +
            'text">1x</' +
            "span>\n    " +
            "          " +
            "          " +
            "   <i clas" +
            's="fa-soli' +
            "d fa-angle" +
            '-right"></' +
            "i>\n       " +
            "          " +
            "        </" +
            "div>\n     " +
            "          " +
            "        </" +
            "a>\n       " +
            "          " +
            "    </div>" +
            "\n         " +
            "          " +
            "</div>\n   " +
            "          " +
            "      <div" +
            ' id="sub-q' +
            'uality" cl' +
            'ass="sub-s' +
            "lide level" +
            '-1" style=' +
            '"display: ' +
            'none;">\n  ' +
            "          " +
            "         <" +
            "div class=" +
            '"dropdown-' +
            'title">\n  ' +
            "          " +
            "          " +
            " <span cla" +
            'ss="s-titl' +
            "e sub-back" +
            " line-cent" +
            'er">\n     ' +
            "          " +
            "          " +
            '<i class="' +
            "fa-solid f" +
            "a-angle-le" +
            'ft"></i>\n ' +
            "          " +
            "          " +
            "    Chất l" +
            "ượng\n     " +
            "          " +
            "        </" +
            "span>\n    " +
            "          " +
            "       </d" +
            "iv>\n      " +
            "          " +
            "     <div " +
            'class="cs-' +
            "list jw-qu" +
            "ality-menu" +
            '">\n       ' +
            "          " +
            "    </div>" +
            "\n         " +
            "          " +
            "</div>\n   " +
            "          " +
            "      <div" +
            ' id="sub-s' +
            'peed" clas' +
            's="sub-sli' +
            "de level-1" +
            '" style="d' +
            "isplay: no") +
          ('ne;">\n    ' +
            "          " +
            "       <di" +
            'v class="d' +
            "ropdown-ti" +
            'tle">\n    ' +
            "          " +
            "         <" +
            "span class" +
            '="s-title ' +
            "sub-back l" +
            "ine-center" +
            '">\n       ' +
            "          " +
            "        <i" +
            ' class="fa' +
            "-solid fa-" +
            "angle-left" +
            '"></i>\n   ' +
            "          " +
            "          " +
            "  Tốc độ\n " +
            "          " +
            "          " +
            "  </span>\n" +
            "          " +
            "          " +
            " </div>\n  " +
            "          " +
            "         <" +
            "div class=" +
            '"cs-list j' +
            "w-playback" +
            '-rate">\n  ' +
            "          " +
            "          " +
            " <a class=" +
            '"cs-item l' +
            "ine-center" +
            '" data="0.' +
            '25">\n     ' +
            "          " +
            "          " +
            "<div class" +
            '="csi-titl' +
            'e">0.25x</' +
            "div>\n     " +
            "          " +
            "          " +
            '<i class="' +
            "fa-solid f" +
            'a-check"><' +
            "/i>\n      " +
            "          " +
            "       </a" +
            ">\n        " +
            "          " +
            "     <a cl" +
            'ass="cs-it' +
            "em line-ce" +
            'nter" data' +
            '="0.5">\n  ' +
            "          " +
            "          " +
            "   <div cl" +
            'ass="csi-t' +
            'itle">0.5x' +
            "</div>\n   " +
            "          " +
            "          " +
            "  <i class" +
            '="fa-solid' +
            ' fa-check"' +
            "></i>\n    " +
            "          " +
            "         <" +
            "/a>\n      " +
            "          " +
            "       <a " +
            'class="cs-' +
            "item line-" +
            "center act" +
            'ive" data=' +
            '"1">\n     ' +
            "          " +
            "          " +
            "<div class" +
            '="csi-titl' +
            'e">1x</div' +
            ">\n        " +
            "          " +
            "       <i " +
            'class="fa-' +
            "solid fa-c" +
            'heck"></i>' +
            "\n         " +
            "          " +
            "    </a>\n " +
            "          " +
            "          ") +
          ("  <a class" +
            '="cs-item ' +
            "line-cente" +
            'r" data="1' +
            '.25">\n    ' +
            "          " +
            "          " +
            " <div clas" +
            's="csi-tit' +
            'le">1.25x<' +
            "/div>\n    " +
            "          " +
            "          " +
            " <i class=" +
            '"fa-solid ' +
            'fa-check">' +
            "</i>\n     " +
            "          " +
            "        </" +
            "a>\n       " +
            "          " +
            "      <a c" +
            'lass="cs-i' +
            "tem line-c" +
            'enter" dat' +
            'a="1.5">\n ' +
            "          " +
            "          " +
            "    <div c" +
            'lass="csi-' +
            'title">1.5' +
            "x</div>\n  " +
            "          " +
            "          " +
            "   <i clas" +
            's="fa-soli' +
            "d fa-check" +
            '"></i>\n   ' +
            "          " +
            "          " +
            "</a>\n     " +
            "          " +
            "        <a" +
            ' class="cs' +
            "-item line" +
            '-center" d' +
            'ata="2">\n ' +
            "          " +
            "          " +
            "    <div c" +
            'lass="csi-' +
            'title">2x<' +
            "/div>\n    " +
            "          " +
            "          " +
            " <i class=" +
            '"fa-solid ' +
            'fa-check">' +
            "</i>\n     " +
            "          " +
            "        </" +
            "a>\n       " +
            "          " +
            "    </div>" +
            "\n         " +
            "          " +
            "</div>\n\n\n " +
            "          " +
            "        <d" +
            'iv id="sub' +
            '-caption" ' +
            'class="sub' +
            "-slide lev" +
            'el-1" styl' +
            'e="display' +
            ': none;">\n' +
            "          " +
            "          " +
            " <div clas" +
            's="dropdow' +
            'n-title">\n' +
            "          " +
            "          " +
            "   <span c" +
            'lass="s-ti' +
            "tle sub-ba" +
            "ck line-ce" +
            'nter">\n   ' +
            "          " +
            "          " +
            "  <i class" +
            '="fa-solid' +
            " fa-angle-" +
            'left"></i>' +
            "\n         " +
            "          " +
            "      Tuỳ " +
            "chỉnh\n    " +
            "          " +
            "         <") +
          ("/span>\n   " +
            "          " +
            "        </" +
            "div>\n     " +
            "          " +
            "      <div" +
            ' class="cs' +
            "-list jw-s" +
            "ubtitle-se" +
            "tting-menu" +
            '">\n       ' +
            "          " +
            "      <div" +
            ' class="cs' +
            'l-primary"' +
            ">\n        " +
            "          " +
            "       <di" +
            'v class="d' +
            "ropdown-ti" +
            'tle py-1">' +
            "\n         " +
            "          " +
            "        <s" +
            "pan class=" +
            '"s-title s' +
            'mall">Phụ ' +
            "đề chính</" +
            "span>\n    " +
            "          " +
            "          " +
            " </div>\n  " +
            "          " +
            "          " +
            '   <a id="' +
            "toggle-fon" +
            't" class="' +
            "cs-item li" +
            'ne-center"' +
            " data-type" +
            '="color">\n' +
            "          " +
            "          " +
            "       <di" +
            'v class="c' +
            'si-title">' +
            "Màu chữ</d" +
            "iv>\n      " +
            "          " +
            "          " +
            " <div clas" +
            's="csi-cur' +
            "rent line-" +
            'center">\n ' +
            "          " +
            "          " +
            "        <d" +
            'iv class="' +
            'csi-color"' +
            ' style="ba' +
            "ckground-c" +
            "olor: ")) +
        _0x2cfd1f +
        (';"></div>\n' + "          " + "          " + "         <" + "span>") +
        _0x252343 +
        ("</span>\n  " +
          "          " +
          "          " +
          "       <i " +
          'class="fa-' +
          "solid fa-a" +
          "ngle-right" +
          '"></i>\n   ' +
          "          " +
          "          " +
          "    </div>" +
          "\n         " +
          "          " +
          "      </a>" +
          "\n         " +
          "          " +
          "      <a i" +
          'd="toggle-' +
          'size" clas' +
          's="cs-item' +
          " line-cent" +
          'er" data-t' +
          'ype="fontS' +
          'ize">\n    ' +
          "          " +
          "          " +
          "   <div cl" +
          'ass="csi-t' +
          'itle">Cỡ c' +
          "hữ</div>\n " +
          "          " +
          "          " +
          "      <div" +
          ' class="cs' +
          "i-current " +
          "line-cente" +
          'r">\n      ' +
          "          " +
          "          " +
          "   <span>") +
        _0x4b30f9 +
        ("</span>\n  " +
          "          " +
          "          " +
          "       <i " +
          'class="fa-' +
          "solid fa-a" +
          "ngle-right" +
          '"></i>\n   ' +
          "          " +
          "          " +
          "    </div>" +
          "\n         " +
          "          " +
          "      </a>" +
          "\n         " +
          "          " +
          "      <a i" +
          'd="toggle-' +
          "opacity-fo" +
          'nt" class=' +
          '"cs-item l' +
          "ine-center" +
          '" data-typ' +
          'e="fontOpa' +
          'city">\n   ' +
          "          " +
          "          " +
          "    <div c" +
          'lass="csi-' +
          'title">Độ ' +
          "trong</div" +
          ">\n        " +
          "          " +
          "         <" +
          "div class=" +
          '"csi-curre' +
          "nt line-ce" +
          'nter">\n   ' +
          "          " +
          "          " +
          "      <spa" +
          "n>") +
        _0x48fa90 +
        ("</span>\n  " +
          "          " +
          "          " +
          "       <i " +
          'class="fa-' +
          "solid fa-a" +
          "ngle-right" +
          '"></i>\n   ' +
          "          " +
          "          " +
          "    </div>" +
          "\n         " +
          "          " +
          "      </a>" +
          "\n         " +
          "          " +
          "      <a i" +
          'd="toggle-' +
          "font-famil" +
          'y" class="' +
          "cs-item li" +
          'ne-center"' +
          " data-type" +
          '="fontFami' +
          'ly">\n     ' +
          "          " +
          "          " +
          "  <div cla" +
          'ss="csi-ti' +
          'tle">Font ' +
          "chữ</div>\n" +
          "          " +
          "          " +
          "       <di" +
          'v class="c' +
          "si-current" +
          " line-cent" +
          'er">\n     ' +
          "          " +
          "          " +
          "    <span>") +
        _0x2ed221 +
        ("</span>\n  " +
          "          " +
          "          " +
          "       <i " +
          'class="fa-' +
          "solid fa-a" +
          "ngle-right" +
          '"></i>\n   ' +
          "          " +
          "          " +
          "    </div>" +
          "\n         " +
          "          " +
          "      </a>" +
          "\n         " +
          "          " +
          "      <a i" +
          'd="toggle-' +
          "border-fon" +
          't" class="' +
          "cs-item li" +
          'ne-center"' +
          " data-type" +
          '="edgeStyl' +
          'e">\n      ' +
          "          " +
          "          " +
          " <div clas" +
          's="csi-tit' +
          'le">Viền c' +
          "hữ</div>\n " +
          "          " +
          "          " +
          "      <div" +
          ' class="cs' +
          "i-current " +
          "line-cente" +
          'r">\n      ' +
          "          " +
          "          " +
          "   <span>") +
        (_0x112ba8["UzCYg"](_0xd78c70, _0x112ba8["uqkRJ"])
          ? _0x112ba8["OmVyT"]
          : _0x112ba8["UzCYg"](_0xd78c70, _0x112ba8["htKfi"])
            ? _0x112ba8["zDTWS"]
            : _0x112ba8["OtcsS"]) +
        ("</span>\n  " +
          "          " +
          "          " +
          "       <i " +
          'class="fa-' +
          "solid fa-a" +
          "ngle-right" +
          '"></i>\n   ' +
          "          " +
          "          " +
          "    </div>" +
          "\n         " +
          "          " +
          "      </a>" +
          "\n         " +
          "          " +
          "      <a i" +
          'd="toggle-' +
          "background" +
          '" class="c' +
          "s-item lin" +
          'e-center" ' +
          "data-type=" +
          '"backgroun' +
          'dColor">\n ' +
          "          " +
          "          " +
          "      <div" +
          ' class="cs' +
          'i-title">M' +
          "àu nền</di" +
          "v>\n       " +
          "          " +
          "          " +
          "<div class" +
          '="csi-curr' +
          "ent line-c" +
          'enter">\n  ' +
          "          " +
          "          " +
          "       <di" +
          'v class="c' +
          'si-color" ' +
          'style="bac' +
          "kground-co" +
          "lor: ") +
        _0x392151 +
        (';"></div>\n' + "          " + "          " + "         <" + "span>") +
        _0x1f6b98 +
        ("</span>\n  " +
          "          " +
          "          " +
          "       <i " +
          'class="fa-' +
          "solid fa-a" +
          "ngle-right" +
          '"></i>\n   ' +
          "          " +
          "          " +
          "    </div>" +
          "\n         " +
          "          " +
          "      </a>" +
          "\n         " +
          "          " +
          "      <a i" +
          'd="toggle-' +
          "opacity-ba" +
          'ckground" ' +
          'class="cs-' +
          "item line-" +
          'center" da' +
          'ta-type="b' +
          "ackgroundO" +
          'pacity">\n ' +
          "          " +
          "          " +
          "      <div" +
          ' class="cs' +
          'i-title">Đ' +
          "ộ trong nề" +
          "n</div>\n  " +
          "          " +
          "          " +
          "     <div " +
          'class="csi' +
          "-current l" +
          "ine-center" +
          '">\n       ' +
          "          " +
          "          " +
          "  <span>") +
        _0x3b7795 +
        ("</span>\n  " +
          "          " +
          "          " +
          "       <i " +
          'class="fa-' +
          "solid fa-a" +
          "ngle-right" +
          '"></i>\n   ' +
          "          " +
          "          " +
          "    </div>" +
          "\n         " +
          "          " +
          "      </a>" +
          "\n         " +
          "          " +
          "    </div>" +
          "\n         " +
          "          " +
          "    <div c" +
          'lass="csl-' +
          'secondary"' +
          ">\n        " +
          "          " +
          "       <hr" +
          ">\n        " +
          "          " +
          "       <di" +
          'v class="d' +
          "ropdown-ti" +
          'tle py-1">' +
          "\n         " +
          "          " +
          "        <s" +
          "pan class=" +
          '"s-title s' +
          'mall">Song' +
          " ngữ</span" +
          ">\n        " +
          "          " +
          "       </d" +
          "iv>\n      " +
          "          " +
          "         <" +
          'a class="c' +
          "s-item lin" +
          'e-center" ' +
          "data-type=" +
          '"color-sub' +
          '" id="togg' +
          "le-color-s" +
          'ub">\n     ' +
          "          " +
          "          " +
          "  <div cla" +
          'ss="csi-ti' +
          'tle">Màu c' +
          "hữ</div>\n " +
          "          " +
          "          " +
          "      <div" +
          ' class="cs' +
          "i-current " +
          "line-cente" +
          'r">\n      ' +
          "          " +
          "          " +
          "   <div cl" +
          'ass="csi-c' +
          'olor" styl' +
          'e="backgro' +
          "und-color:" +
          "\x20") +
        _0x51121e +
        (';"></div>\n' + "          " + "          " + "         <" + "span>") +
        _0x1f0d76 +
        ("</span>\n  " +
          "          " +
          "          " +
          "       <i " +
          'class="fa-' +
          "solid fa-a" +
          "ngle-right" +
          '"></i>\n   ' +
          "          " +
          "          " +
          "    </div>" +
          "\n         " +
          "          " +
          "      </a>" +
          "\n         " +
          "          " +
          "      <a c" +
          'lass="cs-i' +
          "tem line-c" +
          'enter" dat' +
          'a-type="fo' +
          "ntSize-sub" +
          '" id="togg' +
          "le-size-su" +
          'b">\n      ' +
          "          " +
          "          " +
          " <div clas" +
          's="csi-tit' +
          'le">Cỡ chữ' +
          "</div>\n   " +
          "          " +
          "          " +
          "    <div c" +
          'lass="csi-' +
          "current li" +
          'ne-center"' +
          ">\n        " +
          "          " +
          "          " +
          " <span>") +
        currentConfigSub["size"] +
        ("%</span>\n " +
          "          " +
          "          " +
          "        <i" +
          ' class="fa' +
          "-solid fa-" +
          "angle-righ" +
          't"></i>\n  ' +
          "          " +
          "          " +
          "     </div" +
          ">\n        " +
          "          " +
          "       </a" +
          ">\n        " +
          "          " +
          "       <a " +
          'class="cs-' +
          "item line-" +
          'center" da' +
          'ta-type="f' +
          "ontOpacity" +
          '-sub" id="' +
          "toggle-opa" +
          'city-sub">' +
          "\n         " +
          "          " +
          "        <d" +
          'iv class="' +
          'csi-title"' +
          ">Độ trong<" +
          "/div>\n    " +
          "          " +
          "          " +
          "   <div cl" +
          'ass="csi-c' +
          "urrent lin" +
          'e-center">' +
          "\n         " +
          "          " +
          "          " +
          "<span>") +
        currentConfigSub["opacity"] +
        ("%</span>\n " +
          "          " +
          "          " +
          "        <i" +
          ' class="fa' +
          "-solid fa-" +
          "angle-righ" +
          't"></i>\n  ' +
          "          " +
          "          " +
          "     </div" +
          ">\n        " +
          "          " +
          "       </a" +
          ">\n        " +
          "          " +
          "       <a " +
          'class="cs-' +
          "item line-" +
          'center" da' +
          'ta-type="f' +
          "ontFamily-" +
          'sub" id="t' +
          "oggle-font" +
          "-family-su" +
          'b">\n      ' +
          "          " +
          "          " +
          " <div clas" +
          's="csi-tit' +
          'le">Font c' +
          "hữ</div>\n " +
          "          " +
          "          " +
          "      <div" +
          ' class="cs' +
          "i-current " +
          "line-cente" +
          'r">\n      ' +
          "          " +
          "          " +
          "   <span>") +
        currentConfigSub["font"] +
        ("</span>\n  " +
          "          " +
          "          " +
          "       <i " +
          'class="fa-' +
          "solid fa-a" +
          "ngle-right" +
          '"></i>\n   ' +
          "          " +
          "          " +
          "    </div>" +
          "\n         " +
          "          " +
          "      </a>" +
          "\n         " +
          "          " +
          "    </div>" +
          "\n         " +
          "          " +
          "  </div>\n " +
          "          " +
          "        </" +
          "div>\n     " +
          "          " +
          "  </ul>\n  " +
          "          " +
          "     <div " +
          'class="ite' +
          "m-btn item" +
          '-max" data' +
          "-bs-toggle" +
          '="tooltip"' +
          " data-bs-c" +
          "ustom-clas" +
          's="custom-' +
          'tooltip" d' +
          "ata-bs-pla" +
          'cement="to' +
          'p" data-bs' +
          '-title="Ph' +
          'óng to">\n ' +
          "          " +
          "        <d" +
          'iv class="' +
          "line-cente" +
          'r">\n      ' +
          "          " +
          "     <div " +
          'class="inc' +
          '-icon">\n  ' +
          "          " +
          "          " +
          " <svg widt" +
          'h="128" he' +
          'ight="128"' +
          ' viewBox="' +
          "0 0 128 12" +
          '8" fill="n' +
          'one" xmlns' +
          '="http://w' +
          "ww.w3.org/" +
          '2000/svg">' +
          "\n         " +
          "          " +
          "      <pat" +
          'h d="M18.7' +
          "3 55C21.34" +
          "21 55 23.4" +
          "601 53.112" +
          "1 23.4601 " +
          "50.5L23.46" +
          "01 27.4601" +
          "L48 27.460" +
          "1C50.6121 " +
          "27.4601 53" +
          " 25.3421 5" +
          "3 22.7301C" +
          "53 20.118 " +
          "50.6121 18" +
          " 48 18L18." +
          "73 18C16.1" +
          "18 18 14 2" +
          "0.118 14 2" +
          "2.73L14 50" +
          ".5C14 53.1" +
          "121 16.118" +
          " 55 18.73 " +
          '55Z" fill=' +
          '"currentCo' +
          'lor"></pat' +
          "h>\n       " +
          "          " +
          "        <p" +
          'ath d="M53' +
          ".9997 105." +
          "27C53.9997" +
          " 102.658 5" +
          "1.6118 100" +
          ".54 48.999" +
          "7 100.54L2" +
          ("3.4601 100" +
            ".54L23.460" +
            "1 78C23.46" +
            "01 75.3879" +
            " 21.3421 7" +
            "3 18.73 73" +
            "C16.118 73" +
            " 14 75.387" +
            "9 14 78L14" +
            " 105.27C14" +
            " 107.882 1" +
            "6.118 110 " +
            "18.73 110L" +
            "48.9997 11" +
            "0C51.6118 " +
            "110 53.999" +
            "7 107.882 " +
            "53.9997 10" +
            '5.27Z" fil' +
            'l="current' +
            'Color"></p' +
            "ath>\n     " +
            "          " +
            "          " +
            '<path d="M' +
            "74 22.73C7" +
            "4 25.3421 " +
            "76.3879 27" +
            ".4601 79 2" +
            "7.4601L104" +
            ".54 27.46L" +
            "104.54 50C" +
            "104.54 52." +
            "6121 106.6" +
            "58 55 109." +
            "27 55C111." +
            "882 55 114" +
            " 52.6121 1" +
            "14 50L114 " +
            "22.73C114 " +
            "20.118 111" +
            ".882 18 10" +
            "9.27 18L79" +
            " 18C76.387" +
            "9 18 74 20" +
            ".118 74 22" +
            '.73Z" fill' +
            '="currentC' +
            'olor"></pa' +
            "th>\n      " +
            "          " +
            "         <" +
            'path d="M1' +
            "09.27 72C1" +
            "06.658 72 " +
            "104.54 74." +
            "3879 104.5" +
            "4 77V100.5" +
            "4L80 100.5" +
            "4C77.3879 " +
            "100.54 75 " +
            "102.658 75" +
            " 105.27C75" +
            " 107.882 7" +
            "7.3879 110" +
            " 80 110L10" +
            "9.27 110C1" +
            "11.882 110" +
            " 114 107.8" +
            "82 114 105" +
            ".27V77C114" +
            " 74.3879 1" +
            "11.882 72 " +
            "109.27 72Z" +
            '" fill="cu' +
            "rrentColor" +
            '"></path>\n' +
            "          " +
            "          " +
            "   </svg>\n" +
            "          " +
            "          " +
            " </div>\n  " +
            "          " +
            "         <" +
            "span>Phóng" +
            " to</span>" +
            "\n         " +
            "          " +
            "</div>\n   " +
            "          " +
            "    </div>" +
            "\n         " +
            "        <d" +
            'iv class="' +
            "item-btn i" +
            "tem-min d-" +
            'none" data' +
            "-bs-toggle" +
            '="tooltip"') +
          (" data-bs-c" +
            "ustom-clas" +
            's="custom-' +
            'tooltip" d' +
            "ata-bs-pla" +
            'cement="to' +
            'p" data-bs' +
            '-title="Th' +
            'u nhỏ">\n  ' +
            "          " +
            "       <di" +
            'v class="l' +
            "ine-center" +
            '">\n       ' +
            "          " +
            "    <div c" +
            'lass="inc-' +
            'icon">\n   ' +
            "          " +
            "          " +
            "<svg width" +
            '="128" hei' +
            'ght="128" ' +
            'viewBox="0' +
            " 0 128 128" +
            '" fill="no' +
            'ne" xmlns=' +
            '"http://ww' +
            "w.w3.org/2" +
            '000/svg">\n' +
            "          " +
            "          " +
            "     <path" +
            ' d="M79.73' +
            " 111C82.34" +
            "21 111 84." +
            "4601 108.1" +
            "12 84.4601" +
            " 105.5L84." +
            "4601 84.46" +
            "01L109 84." +
            "4601C111.6" +
            "12 84.4601" +
            " 114 82.34" +
            "21 114 79." +
            "73C114 77." +
            "118 111.61" +
            "2 75 109 7" +
            "5L79.73 75" +
            "C77.118 75" +
            " 75 77.118" +
            " 75 79.73L" +
            "75 105.5C7" +
            "5 108.112 " +
            "77.118 111" +
            " 79.73 111" +
            'Z" fill="c' +
            "urrentColo" +
            'r"></path>' +
            "\n         " +
            "          " +
            "      <pat" +
            'h d="M114 ' +
            "48.27C114 " +
            "45.6579 11" +
            "1.612 43.5" +
            "399 109 43" +
            ".5399L83.4" +
            "601 43.539" +
            "9L83.4601 " +
            "23C83.4601" +
            " 20.3879 8" +
            "1.3421 18 " +
            "78.73 18C7" +
            "6.118 18 7" +
            "4 20.3879 " +
            "74 23L74 4" +
            "8.27C74 50" +
            ".882 76.11" +
            "8 53 78.73" +
            " 53L109 53" +
            "C111.612 5" +
            "3 114 50.8" +
            "82 114 48." +
            '27Z" fill=' +
            '"currentCo' +
            'lor"></pat' +
            "h>\n       " +
            "          " +
            "        <p" +
            'ath d="M14' +
            " 79.73C14 " +
            "82.3421 16" +
            ".3879 84.4" +
            "6 19 84.46" +
            "L44.5396 8" +
            "4.46L44.53" +
            "96 105.5C4" +
            "4.5396 108" +
            ".112 46.65") +
          ("76 110.5 4" +
            "9.2697 110" +
            ".5C51.8818" +
            " 110.5 53." +
            "9997 108.1" +
            "12 53.9997" +
            " 105.5L53." +
            "9997 79.73" +
            "C53.9997 7" +
            "7.118 51.8" +
            "818 75 49." +
            "2697 75L19" +
            " 75C16.387" +
            "9 75 14 77" +
            ".118 14 79" +
            '.73Z" fill' +
            '="currentC' +
            'olor"></pa' +
            "th>\n      " +
            "          " +
            "         <" +
            'path d="M4' +
            "8.27 18C45" +
            ".6579 18 4" +
            "3.5399 20." +
            "3879 43.53" +
            "99 23V44.5" +
            "396L19 44." +
            "5396C16.38" +
            "79 44.5396" +
            " 14 46.657" +
            "6 14 49.26" +
            "97C14 51.8" +
            "818 16.387" +
            "9 53.9997 " +
            "19 53.9997" +
            "L48.27 53." +
            "9997C50.88" +
            "2 53.9997 " +
            "53 51.8818" +
            " 53 49.269" +
            "7L53 23C53" +
            " 20.3879 5" +
            "0.882 18 4" +
            '8.27 18Z" ' +
            'fill="curr' +
            'entColor">' +
            "</path>\n  " +
            "          " +
            "          " +
            " </svg>\n  " +
            "          " +
            "         <" +
            "/div>\n    " +
            "          " +
            "       <sp" +
            "an>Thu nhỏ" +
            "</span>\n  " +
            "          " +
            "       </d" +
            "iv>\n      " +
            "          " +
            " </div>\n  " +
            "          " +
            "   </div>\n" +
            "          " +
            "   </div>")),
    ));
}
($(document)["on"]("click", ".item-next", function (_0x346a91) {
  const _0x740366 = _0x9f5b01,
    _0x2e3ea4 = {
      HSOUM: function (_0x175255) {
        return _0x175255();
      },
    };
  (_0x346a91["preventDef" + "ault"](), _0x2e3ea4["HSOUM"](skipToNextEpisode));
}),
  playerInstance["on"]("meta", function (_0x55b724) {
    const _0x333f03 = _0x9f5b01,
      _0x5ca8fe = {
        LZNuT: function (_0xc393e8) {
          return _0xc393e8();
        },
        Ietwl: function (_0x5c2ff7, _0x253e0f, _0x5c0da5) {
          return _0x5c2ff7(_0x253e0f, _0x5c0da5);
        },
      };
    _0x55b724["duration"] &&
      _0x5ca8fe["Ietwl"](
        setTimeout,
        () => {
          const _0x14f11b = _0x333f03;
          _0x5ca8fe["LZNuT"](addTimelineMarkers);
        },
        0xb89 * -0x2 + 0x1cca + -0x554,
      );
  }),
  $(document)["on"]("click", "#skip-intr" + "o", function (_0x18e50f) {
    const _0x5c9a40 = _0x9f5b01,
      _0x32fabf = {
        hKaHo: function (_0x4264fb) {
          return _0x4264fb();
        },
      };
    (_0x18e50f["preventDef" + "ault"](), _0x32fabf["hKaHo"](skipIntro));
  }),
  $(document)["on"]("click", "#skip-outr" + "o", function (_0x3a95b4) {
    const _0x3f9c60 = _0x9f5b01,
      _0x30af19 = {
        cWRwu: function (_0x4759ea) {
          return _0x4759ea();
        },
      };
    (_0x3a95b4["preventDef" + "ault"](), _0x30af19["cWRwu"](skipToNextEpisode));
  }));
function _0x4827() {
  const _0x51c1a4 = [
    "jCTFd",
    "2.6857\x209.4",
    "74\x2080.2489",
    "\x20362.848\x202",
    "e=\x22tooltip",
    "#eps-close",
    "wmFwH",
    "508C43.832",
    "0833ZM49\x205",
    "\x20.item-sub",
    "2.398\x20166.",
    "ub\x22\x20style=",
    "\x200\x200\x200\x20-1.",
    ";\x22>",
    "kfdnc",
    "GVXws",
    "9.4017C35.",
    "v\x20class=\x22w",
    "12C34.3995",
    "rzNph",
    "e\x22>Cỡ\x20chữ<",
    "FogeZ",
    "UTF-8",
    "k\x22></i>\x0a\x20\x20",
    "4.41\x200-8-3",
    "sub\x20.cs-it",
    "Auto",
    "XzSUD",
    "chiCo",
    ".9765\x20217.",
    "vwClo",
    "L32.9218\x201",
    "solid\x20fa-a",
    "7.4601L104",
    "t-countdow",
    "-dropdown\x20",
    "u\x20nhỏ\x22>\x0a\x20\x20",
    "89509\x205.25",
    "JMqdB",
    "QqAss",
    "079\x2014.610",
    "gnpYf",
    "240p",
    "rvtRS",
    "9.8333H40.",
    "tColor\x22\x20st",
    "wunVS",
    "31.8971\x2019",
    "\x2010.3469\x201",
    "exitPictur",
    "\x2040\x2041\x22\x20fi",
    "span[lang=",
    ".178\x20254.2",
    "qykby",
    "s=\x22content",
    "-opacity-f",
    "aOivm",
    "ION",
    "76C22.5222",
    "61\x2041.9765",
    "dBROY",
    "\x20d=\x22M79.73",
    "TuURN",
    "ath>\x0a\x20\x20\x20\x20\x20",
    "venodd\x22\x20cl",
    "span>Phóng",
    "-size-sub\x20",
    "mYVdO",
    "o\x20viền\x22\x20da",
    "ent",
    "geStyle\x22>\x0a",
    "hOzaU",
    "45C10.0643",
    "ng\x22\x20class=",
    "container\x20",
    "38\x20397.403",
    "Tím\x20Nhạt",
    "\x22item-btn\x20",
    "JeJUB",
    "3.125C44.0",
    "IOdei",
    "\x2034.5815\x203",
    "\x20\x20\x20\x20</path",
    "itle=\x2210s\x20",
    "s=\x22form-co",
    "custom-cla",
    "73438\x20247.",
    "</i>\x0a\x20\x20\x20\x20\x20",
    "tjKWL",
    ".5\x2027.7446",
    "118\x20111.61",
    "pFauM",
    "\x20288.178\x202",
    "btn-light\x22",
    "iWOaA",
    "h\x22>\x0a\x20\x20\x20\x20\x20\x20",
    "#toggle-qu",
    ".item-pip",
    "green",
    "zm2-14c-5.",
    "naIUT",
    "qHmjT",
    "ing\x22>\x0a\x20\x20\x20\x20",
    "FkLdA",
    "QrvLa",
    "i-current\x20",
    "-time",
    "t</span>\x0a\x20",
    "82\x20114\x2048.",
    "load-form\x22",
    "150.883\x2031",
    "n-item.act",
    "\x22dropdown\x22",
    "cMyrU",
    "NfzxJ",
    "ub-color\x22\x20",
    "121\x2016.118",
    "Không\x20viền",
    "c-icon\x22>\x0a\x20",
    "\x20187.772Z\x22",
    "-.33-.25-.",
    "BjEHJ",
    "\x20class=\x22in",
    "50.6121\x2018",
    "setFullscr",
    "YQJFg",
    "IXtyS",
    ".327\x2094.83",
    "status",
    "wDaMO",
    "8C24.5833\x20",
    "-font\x22>Đổ\x20",
    "\x2011.75\x2016.",
    "oEGzO",
    "\x22display:\x20",
    "dQaQB",
    "JOEKP",
    "txmbv",
    "\x20114\x20107.8",
    "9.325C150.",
    "utils",
    "NqkOH",
    "-level=\x22-1",
    "blue",
    "icJPv",
    "467\x20172.74",
    "\x222.5\x22\x20stro",
    "n-item",
    "oke-width=",
    "\x2028.3712\x208",
    "bs-toggle=",
    "ght=\x22128\x22\x20",
    "this.style",
    "itle\x22>Cỡ\x20c",
    "92.8343\x2010",
    "lor-sub",
    "nter\x22\x20data",
    "=\x22edgeStyl",
    "ine-center",
    "currentCol",
    "FHD",
    "32C24.8632",
    "0052\x2036.75",
    "pan>PiP</s",
    "jIoCV",
    "-sub\x20sub-f",
    "[data-bs-t",
    "176\x20190.57",
    "#592c07",
    "\x22\x20aria-exp",
    "MmYnq",
    "s=\x22csl-sec",
    "\x20\x20\x20\x20\x20\x20<pat",
    "getState",
    "o\x20.progres",
    "\x20data-mid=",
    "edgeStyle",
    "t-duration",
    "\x2010-10-4.4",
    "></a>\x0a\x20\x20\x20\x20",
    "tHjwb",
    "114Z\x22\x20stro",
    "\x22custom-to",
    "fontSize-s",
    "yoEQT",
    "OHeKI",
    "17\x2017.0815",
    "ntpGt",
    "LZNuT",
    "\x2022.9555\x201",
    "67H10.0833",
    "\x2013C18\x2012.",
    "Arial",
    "rOqdC",
    "\x20width=\x2240",
    "66.369\x20263",
    "vel-2\x20sub-",
    "font",
    "\x20\x20\x20\x20<span>",
    "9\x2014\x2078L14",
    "tle\x22>Font\x20",
    "label",
    "is.style.d",
    "tjmxE",
    "sole",
    "21.3868\x2024",
    "XdDiT",
    "le\x22>Cài\x20đặ",
    "\x200\x200-1.664",
    "IvJdX",
    "lbKOu",
    "100\x20mt-3\x22>",
    "\x20\x20\x20\x20Song\x20n",
    "tle\x22>Màu\x20c",
    "ht=\x2241\x22\x20vi",
    "PEIpD",
    "YWeOW",
    "ION_FROM_I",
    "ZtfXp",
    "114C24.181",
    "enter\x22\x20dat",
    "7.1593C254",
    "19a1\x201\x200\x200",
    "li>\x0a\x20\x20\x20\x20\x20\x20",
    "nu\x22>\x0a\x20\x20\x20\x20\x20",
    "sub-color-",
    "1.46\x2056.68",
    "JENkb",
    "9997\x2079.73",
    "d\x20sub-opac",
    "v\x20class=\x22p",
    "08334\x2010.8",
    "ont-family",
    "ent\x20line-c",
    "\x20\x20\x20\x20\x20\x20</pa",
    "2\x2033.3661C",
    "\x20\x20\x20</path>",
    "BknGl",
    "DrZtQ",
    "nt\x22\x20class=",
    "angle-righ",
    "\x20<i\x20class=",
    "\x22Xem\x20dạng\x20",
    "4\x2069.6765\x20",
    "9\x2035.1339C",
    "azy\x22\x20src=\x22",
    "high",
    "\x2031.5\x2023ZM",
    "se\x22>\x0a\x20\x20\x20\x20\x20",
    "\x2076.5649C2",
    "ty-font",
    "C35.2488\x202",
    "7.65.8.4zm",
    "43\x20132.259",
    ".463\x2021.69",
    "sub\x20sub-bo",
    "2Z\x22>\x0a\x20\x20\x20\x20\x20",
    ".74\x20432.78",
    "\x20\x20\x20\x20\x20\x20</g>",
    "bPvxI",
    "#sub-borde",
    "7448\x2057.16",
    "773C243.28",
    "25\x205.5H33.",
    "color\x22\x20dat",
    "/svg\x22>\x0a\x20\x20\x20",
    "n-play\x20d-n",
    "\x200\x20128\x20128",
    "lQXck",
    "GhbSt",
    "le\x22]\x20.csi-",
    "rHDeO",
    "=\x22w-check\x22",
    "đề:",
    "item-volum",
    "20.995\x20276",
    "oDssq",
    "kNvNC",
    "Dorfu",
    "WoqYd",
    "\x2024.25H16.",
    "\x2020.3879\x205",
    "ontOpacity",
    "ng\x20viền</d",
    "HURNR",
    "\x2034.5815\x202",
    "5.52\x200-10\x20",
    "35.6251C81",
    "lzuPb",
    "32\x20166.263",
    "Lỗi\x20khi\x20th",
    "UzpnZ",
    "-auto-clos",
    "fBBwH",
    "findIndex",
    "\x22\x20width=\x225",
    "2.5222\x204.7",
    "JJAXY",
    "stroke-lin",
    "mWhgL",
    "ARBOR",
    "\x20id=\x22sub-s",
    "2.73L14\x2050",
    "class=\x22v-t",
    "WnvPD",
    "0/svg\x22>\x0a\x20\x20",
    "-slide\x22>\x0a\x20",
    "pWVJG",
    "18.73\x20110L",
    "ouDbj",
    "tip\x22\x20data-",
    "ity",
    "e-tabs\x20.it",
    ".3661C36.8",
    "ng\x20Nền\x22>\x0a\x20",
    "RQadG",
    "#skip-outr",
    "jpxlv",
    "ErdEC",
    "\x20\x20<a\x20class",
    "nejoin=\x22ro",
    "-center\x22>\x0a",
    "text/vtt",
    ",\x20.content",
    "hftRj",
    "\x200\x200\x201.027",
    "em\x20",
    "12\x20379.79\x20",
    "\x20233.432\x203",
    "cs-list\x20jw",
    "Color\x22></p",
    "DWPKy",
    "1.378\x2011.0",
    "iNllN",
    "0.34\x20187.6",
    "ass=\x22pc-ti",
    "OqaYi",
    "Times\x20New\x20",
    "GBqIn",
    "fa-check\x22>",
    "oke=\x22curre",
    ".882\x2018\x2010",
    "eOArX",
    "mtyJi",
    "font\x22>Bo\x20v",
    "SCdkO",
    "QoNAT",
    "24.2467\x2025",
    ".75C5\x2027.0",
    "UiXVe",
    "-title\x22>Mà",
    "ntColor\x22><",
    "current\x20sp",
    "REQUEST_SY",
    "nWAGy",
    "21.354\x20150",
    "setupError",
    "hasClass",
    "-center\x20ga",
    "6\x2019\x2084.46",
    "fontFamily",
    "\x20sub-color",
    "border-fon",
    "-border-fo",
    "Njmwd",
    "el-2\x20sub-c",
    "TxsTu",
    "idMovie/",
    "t\x20line-cen",
    "item\x20line-",
    "path\x20d=\x22M1",
    "ss=\x22cs-dua",
    "\x20\x20</div>\x0a\x20",
    "=\x22Phụ\x20đề\x22>",
    "ldgsU",
    "tor",
    "number",
    "ACvIQ",
    "L48.27\x2053.",
    "\x22\x20data-tit",
    "poEQM",
    "p\x20jw-float",
    "OzYHQ",
    "sSXex",
    "XuQtU",
    "tup\x22\x20data-",
    "bljqz",
    "vynGT",
    "down-title",
    ">Phụ\x20đề</d",
    "result",
    "ize-sub\x20su",
    "mousedown",
    ".9071\x20194.",
    "</div>\x20\x20\x20\x20",
    "-on\x22\x20data=",
    "lass=\x22csl-",
    "QbVtW",
    "player-dm\x22",
    "ck-rate\x20.c",
    "1.0985\x2011\x20",
    "edBNc",
    "s-title\x20su",
    "isodes/by-",
    "n-large\x22>\x0a",
    "gXZEo",
    "\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20",
    "er\x22\x20data-t",
    "óng\x20to\x22>\x0a\x20",
    "TcbQz",
    "mily-sub\x22\x20",
    "282\x20390.78",
    "qOySA",
    "C4.55614\x202",
    "nd\x20sub-fon",
    "ubMOX",
    "1V10.6351C",
    "ata=\x22doul\x22",
    "6c0\x20.55.45",
    "\x22\x20viewBox=",
    "1.2-13.9c-",
    "CoRtg",
    "\x2027.6339C3",
    "92.8343\x2028",
    ".display=\x27",
    "und\x22\x20strok",
    "2\x20sub-opac",
    "sub-menu-t",
    "adComplete",
    "robxS",
    "amily-sub",
    "WGSuG",
    "KkTWV",
    "Off",
    "bWkcB",
    "80.197C96.",
    "\x2020.882a1\x20",
    "75C17.0815",
    "t\x20sub-back",
    "\x20</svg>\x0a\x0a\x20",
    "DXEgx",
    "UJLkS",
    "\x208.16675\x201",
    "33\x2036.25\x203",
    "C254.218\x201",
    "%;\x20opacity",
    "\x0a\x20\x20\x20\x20<a\x20cl",
    "\x20158.701C8",
    "\x20\x20\x20\x20\x20\x20\x20<hr",
    "17.005\x2063.",
    "charCodeAt",
    "Color\x22\x20str",
    "IOPXC",
    "0833\x2069.41",
    "n-menu\x20pla",
    "396L19\x2044.",
    "hnTwG",
    "wxOZQ",
    "class=\x22csi",
    "L44.5396\x208",
    "change",
    "\x22sb-button",
    "title\x22>",
    "1633\x208.908",
    "class=\x22sub",
    "08\x2019.3082",
    "1.354\x20127.",
    "put\x20type=\x22",
    "ngle-right",
    "Bỏ\x20qua\x20sau",
    "67\x2044.9167",
    "und-color:",
    "\x20\x20Song\x20ngữ",
    "7\x2026.3129C",
    "aGisZ",
    "VaJUU",
    "iOSML",
    ".9995\x2031.8",
    "lass=\x22inc-",
    "y-1\x20mb-2\x22>",
    "FILbU",
    "\x22s-title\x20s",
    "100%",
    "Xám\x20Đậm",
    "-family-su",
    ".jw-text-d",
    "text",
    ".jw-button",
    "-1s-1\x20.45-",
    "PAQLK",
    "<svg\x20width",
    "tRmof",
    "JnPlX",
    "24bZJPLn",
    "5V21C8.503",
    "ub\x22>\x0a\x20\x20\x20\x20\x20",
    "qiBzs",
    "ffgXJ",
    "317\x202.8661",
    "map",
    "tckGE",
    "75H11.75C1",
    "1.6667\x2010.",
    "\x20242.398\x201",
    "EvvFD",
    "0.878L120.",
    "-sub\x20.cs-i",
    "ackground\x20",
    "KLWeY",
    "\x2014.1391\x202",
    "meta",
    "ropdown-it",
    "#toggle-ca",
    "-1\x22\x20style=",
    "8.267\x2079.2",
    "SGNvR",
    "C53.9997\x207",
    "-status\x22\x20s",
    "Nâu\x20Ấm",
    "=\x22M150.883",
    "empty",
    ".449\x2084.55",
    "Trắng",
    "\x20\x20\x20\x20\x20\x20\x20\x20<a",
    "acity-sub",
    "jTJzo",
    "=\x22color\x22>\x0a",
    "y-sub",
    "3.4199C353",
    "uLTcK",
    "ZBozY",
    "th\x20d=\x22M35.",
    "3.org/2000",
    "77.118\x20111",
    "own-menu\x20p",
    "4.976\x20271.",
    "tro\x22\x20style",
    "check\x22></i",
    "55C8.84676",
    "pcWWo",
    "ck-rate\x22>\x0a",
    "164.449\x2084",
    "MEuLn",
    "xqbma",
    "41\x200-8-3.5",
    ".sub-borde",
    "MBOmh",
    "5|1|4|2|3|",
    "on-large\x22>",
    "=\x22http://w",
    ".jw-season",
    "vghEk",
    "3\x2033.6005\x20",
    "-custom-cl",
    "\x20</a>\x0a\x20\x20\x20\x20",
    "2-4c.55\x200\x20",
    "BqjmD",
    "4.8683\x2027.",
    "ata-bs-cus",
    "qmVnp",
    "vvZhA",
    "3.779\x20328.",
    "\x20/\x20Cỡ\x20chữ\x0a",
    "d\x22></path>",
    "encrypted_",
    "kTadW",
    "dnPCn",
    "lass=\x22line",
    "gcYOr",
    "loading=\x22l",
    ".75\x2079.838",
    "\x20107.882\x207",
    ".2032\x2013.2",
    "\x20.player-d",
    "\x22\x20height=\x22",
    "28.176\x20190",
    "lip-rule=\x22",
    "DtPmJ",
    "761\x20242.39",
    "\x22\x20data-bs-",
    "high\x20iv-ic",
    "=\x22currentC",
    "fontOpacit",
    "YYMbd",
    "ountdown",
    "\x20\x20<svg\x20hei",
    "-6c0-.55-.",
    "25V77.5833",
    "center\x22\x20da",
    "HYDKA",
    "ght=\x22430\x22\x20",
    "2.398\x20135.",
    "YYafl",
    "i\x20class=\x22f",
    "csi-color\x22",
    "1.13321\x2021",
    "#f0f0f0",
    "2\x2053.9997\x20",
    "back\x20line-",
    "v\x20class=\x22i",
    "=\x22v-info\x22>",
    "5471\x2026.24",
    "h\x20d=\x22M114\x20",
    "162\x20150.88",
    "412\x2015.818",
    "und\x20sub-fo",
    "Xanh\x20Biển\x20",
    ".sub-font-",
    "\x2027.3995\x205",
    "rrent\x20line",
    "21\x20114\x2079.",
    "ip-intro\x20s",
    "WBlyQ",
    "QrKfw",
    "kground-co",
    ".3315\x2018\x202",
    "FRAME",
    "8085\x20233.4",
    "VuKMK",
    "rNGEp",
    "89509\x207.30",
    "ntro\x22\x20href",
    "QVdXF",
    "oggle-colo",
    "g\x20ngữ\x22>\x0a\x20\x20",
    ".883\x20312.9",
    "v\x20class=\x22b",
    ".2893\x2021.6",
    "xtDUB",
    "CiWss",
    "z\x22\x20fill=\x22c",
    "xbjZL",
    "58C294.217",
    "pause",
    "Vui\x20lòng\x20c",
    "DxfMB",
    "text\x22\x20id=\x22",
    "3\x2022.3505\x20",
    "OdwJw",
    "288.003\x2037",
    "dYRUY",
    "52.7894C22",
    "=\x2240\x22\x20heig",
    "cAEab",
    "sub-backgr",
    "75\x2014.25H1",
    "n-sync\x22></",
    "ide\x20level-",
    "ne-center\x22",
    "\x22top\x22\x20data",
    "vdOJs",
    "OVnPe",
    "stener",
    "XAbIX",
    "nbmEP",
    "1\x2023.4601\x20",
    "QRZrS",
    "OYqhg",
    "\x20<a\x20class=",
    "DTcCx",
    "8\x2022.6857\x20",
    "AdPGU",
    "de\x20level-2",
    "#sub-up",
    "YNWgp",
    "\x20chữ</div>",
    "73.835\x20106",
    "Dfbsf",
    "129Z\x22>\x0a\x20\x20\x20",
    "groundColo",
    "n-title\x22>\x0a",
    "thumbnails",
    "ose-pop-su",
    "#sub-quali",
    "9424\x2057.57",
    "l-12-8a1\x201",
    "-8\x208-8\x208\x203",
    "\x22\x20data=\x220.",
    "ss=\x22s-titl",
    "92.0885\x2049",
    "1HztKfB",
    "74.149\x2052.",
    "dqiHj",
    "\x20class=\x22jw",
    "ub\x20sub-opa",
    "Tooltip",
    "63.801\x20288",
    "SOBCs",
    "#fdcb36",
    "218\x2057.166",
    "1.3683\x2012.",
    ".829\x2063.71",
    "\x22fa-solid\x20",
    "2-8a1\x201\x200\x20",
    "9\x20180.197C",
    "-backgroun",
    "a-title=\x22M",
    "3\x20114\x2050.8",
    "67V31.8984",
    ".7482\x2035.2",
    "ndlMU",
    "n/x-mpegUR",
    "szlVK",
    "chính</spa",
    "\x20ngữ\x20/\x20Fon",
    "name",
    "XviNE",
    "r-font\x22\x20st",
    "wn-title\x22>",
    "773\x20106.71",
    "setCaption",
    "#sub-off",
    "\x20\x20\x20<path\x20d",
    ".75\x208H6.25",
    "RkzPB",
    "818\x2075\x2049.",
    "-outro\x22\x20\x0a\x20",
    "7232\x2014.47",
    "6005\x202.5\x203",
    "49.4459\x2030",
    "ontFamily\x22",
    "\x20\x20\x20\x20\x20<a\x20cl",
    "ỡ\x20chữ</div",
    "rAUVk",
    "4\x2077V100.5",
    "vUDUx",
    "Xám\x20nhạt",
    "0052\x2092.08",
    "120.467\x2032",
    "x=\x220\x200\x20396",
    "5.0521\x2014.",
    "UpCJz",
    "4.3891\x2011.",
    ".3603\x2014.3",
    "67\x2049\x2081.6",
    "oltip\x22\x20dat",
    "366.672\x2033",
    "\x20102.658\x205",
    "\x200\x201-1v-12",
    "58\x2055\x20109.",
    ".skip-10-n",
    "ip\x22\x20data-b",
    ".jw-text-e",
    "r-font\x20sub",
    "OrieF",
    "WNzkh",
    "\x20\x20<span\x20cl",
    "IQKyq",
    "141.916\x2039",
    "47.012\x20392",
    "9-8-8s3.59",
    "zHFcc",
    "979\x2024.5\x202",
    "KWrTo",
    "\x20154.291\x203",
    "85\x2089.8333",
    "#toggle-su",
    "28.882zm1.",
    "\x2079.73C14\x20",
    "AqMsa",
    "\x20221.773\x20-",
    "7.674C-5.2",
    "9\x2025.9816\x20",
    "%;\x20font-fa",
    "14.4697C11",
    "sPwOP",
    "13.2295\x2022",
    "/g>\x0a\x20\x20\x20\x20\x20\x20",
    "e-center\x22\x20",
    "7.403\x20123.",
    "\x20level-2\x22\x20",
    "17C2.89509",
    "76.3879\x2027",
    "xXhrP",
    "s=\x22cs-item",
    "\x2019.9996\x203",
    "BXhgR",
    "le\x22>\x0a\x20\x20\x20\x20\x20",
    "now",
    "<div\x20class",
    ".579\x20304.9",
    "form\x22>\x0a\x20\x20\x20",
    "lor\x22></pat",
    "VHfMU",
    "color",
    "th>\x0a\x20\x20\x20\x20\x20\x20",
    "\x22\x20role=\x22ti",
    "\x20sub-opaci",
    "m-btn\x20item",
    "\x20\x20<svg\x20fil",
    "1.6118\x20100",
    ".3199\x20101.",
    "IGyZe",
    "pe=\x22fontOp",
    "#\x22\x20data=\x22",
    "gZEso",
    "sub-font-f",
    "-font\x20sub-",
    "s-list\x20sub",
    "VQcrY",
    "vpLeq",
    "eInPicture",
    ".54\x2027.46L",
    "ata-title=",
    "ub\x20sub-siz",
    "ợng</div>\x0a",
    "=\x22jw-time-",
    "4.48-10\x2010",
    "v\x20class=\x22s",
    "0.7974C34.",
    "VcfaD",
    "ip-rule=\x22e",
    "OEoTN",
    "=\x222.5\x22\x20str",
    "vgryy",
    "44C178.661",
    ".item-paus",
    "iZtoX",
    "72C220.995",
    "ub\x22\x20class=",
    "995\x2033.131",
    "762951OfKxHU",
    "xECBo",
    "không\x20hỗ\x20t",
    "17.1863\x2011",
    "#video_pop",
    "thumbs",
    "24pt",
    "title\x22>2x<",
    "2\x20374.783\x20",
    "t</a>\x0a\x20\x20\x20\x20",
    "startsWith",
    ".568\x20129.6",
    "13.2295\x206.",
    "027-.05l12",
    "le-size-su",
    "tle\x22>Tốc\x20đ",
    "\x22su\x22]",
    "3\x2018.73\x2073",
    "%\x22>\x0a\x20\x20\x20\x20\x20\x20",
    "104.54\x2052.",
    "4.65C391.0",
    "KsJyw",
    "0.8282\x2093.",
    "140.637\x2072",
    "643\x2023.903",
    "13.3315\x2031",
    "#close-pop",
    "i>\x0a\x20\x20\x20\x20\x20\x20\x20",
    "-bs-custom",
    "877\x20158.70",
    "85.75H40.8",
    "\x20\x20\x20\x20\x20\x20\x20<di",
    "399\x20109\x2043",
    "\x20class=\x22dr",
    "48.9997\x2011",
    "131-9.2\x206.",
    "4\x203.8335\x202",
    "\x22#\x22\x20class=",
    "uwHxR",
    "h=\x22128\x22\x20he",
    "hữ\x0a\x20\x20\x20\x20\x20\x20\x20",
    "rack-cue",
    "pageX",
    "\x2024.6114\x202",
    "oggle-font",
    "3995\x2027.86",
    "xyaSW",
    "JDoxl",
    "KVhyS",
    "WZNkr",
    ">Độ\x20trong<",
    "\x22\x20stroke-l",
    "=\x22sub-slid",
    "none\x22\x20data",
    ".jw-contro",
    "=\x22396\x22\x20hei",
    "XzbVb",
    "ackgroundO",
    "e-sub\x20sub-",
    ".jw-main-c",
    ".8335C23.7",
    "ay:\x20none;\x22",
    "\x20\x20\x20\x20</span",
    "SYNC_TIME",
    "om-tooltip",
    "=\x22csi-curr",
    "set\x20jw-tex",
    "\x20\x20\x20\x20\x20\x20</sv",
    "lass=\x22pop-",
    "\x20d=\x22m19.5\x20",
    "1-1v-6c0-.",
    "325Z\x22>\x0a\x20\x20\x20",
    "6339C5.600",
    "=\x22dropdown",
    "ckground\x22\x20",
    "evenodd\x22\x20d",
    "ttons\x20mt-1",
    "06\x20106.713",
    ".2945C23.5",
    "xTIrE",
    "Nrhyn",
    "GET_PLAYBA",
    "ss=\x22csi-cu",
    "aQPPQ",
    "qoFia",
    "\x20\x20\x20<div\x20cl",
    "jzuZQ",
    "NenVE",
    "NOlXs",
    "b-button\x22\x20",
    "83\x2034.6339",
    "sccHj",
    "\x20\x20\x20</a>\x0a\x20\x20",
    "w-sub-sub-",
    "\x20to</span>",
    "Roman",
    "<i\x20class=\x22",
    ">\x0a\x20\x20\x20\x20\x20\x20</",
    "4.8011\x2011.",
    "yback-rate",
    "ộ\x20trong\x20nề",
    "GDKWW",
    "53\x20294.217",
    "title\x22>Độ\x20",
    "LyUmK",
    "\x2024.5833\x201",
    "333V53.083",
    "295\x2018.447",
    "u=\x22mainMen",
    "custom",
    "62.5\x2017\x2062",
    "ss=\x22jw-ico",
    "ze\x22\x20style=",
    "ceholder=\x22",
    "UgSUN",
    "190.579\x2018",
    "trong</div",
    "lacement=\x22",
    "xrMHX",
    "dropdown-i",
    "mousemove",
    ":has(.cont",
    "\x20<li>\x0a\x20\x20\x20\x20",
    "#sub-backg",
    "CitmG",
    "acity-font",
    "\x20\x20\x20\x20\x20\x20<svg",
    "ejoin=\x22rou",
    "pGjxM",
    "ne-center\x20",
    "Tập\x20",
    "gin-left:\x20",
    "3618\x2011.62",
    ".59\x208\x208-3.",
    "Scgpt",
    "piiMh",
    "mute",
    "t\x20tên\x20phụ\x20",
    "family\x20sub",
    ";\x22></div><",
    "ZwCza",
    "\x20\x20\x20<span>Đ",
    ".sub-backg",
    "ữ\x22>\x0a\x20\x20\x20\x20\x20\x20",
    "leXdi",
    "\x20\x20</svg>\x0a\x20",
    "\x2048\x2018L18.",
    "a-bs-title",
    "IA:",
    "TmdBj",
    "ily-sub\x22]\x20",
    "\x20105.27C75",
    ".5833V61.2",
    "isSJD",
    "55V25.1732",
    "city-font\x20",
    "-.05l12-8a",
    "m\x20line-cen",
    "si-color\x22\x20",
    "\x22\x20label=\x22",
    "/svg>\x0a\x20\x20\x20\x20",
    "\x20class=\x22su",
    "HPtbd",
    "4.30161\x205.",
    "L225.235\x206",
    "t\x22>\x0a\x20\x20\x20\x20\x20\x20",
    "7446\x2037.10",
    "JDSyx",
    "gsDIq",
    "294.217\x2030",
    "C166.868\x204",
    "sLkSu",
    "WBGlN",
    "s=\x22http://",
    "-bs-title=",
    "339\x2023.883",
    "\x20\x20\x20\x20<a\x20cla",
    "\x22M33.75\x2030",
    "ty-backgro",
    "947\x20364.8\x20",
    "ta-key=\x22ed",
    "18pt",
    "37\x20415.093",
    "XOLWe",
    "2000/svg\x22>",
    ".59-8-8s3.",
    "sort",
    "5\x20108.112\x20",
    "4.5C13.686",
    "104.54\x2074.",
    "32\x2081.653C",
    "rRyqR",
    "%</span>\x0a\x20",
    "-title=\x22Ph",
    "a-angle-le",
    "><i\x20class=",
    "menu\x20.drop",
    "V14.8255C8",
    "pictureInP",
    "cZyPn",
    "oUFOY",
    "12pt",
    "lor:\x20",
    "NkElc",
    "r\x20w-100\x22>\x0a",
    "QMrfT",
    "fadeIn",
    "s=\x22fa-soli",
    ".832v16a1\x20",
    ".5C51.8818",
    "QMTAv",
    "eed",
    "title\x22>Màu",
    "idth:\x200%;\x22",
    "eFlim",
    "EVevP",
    "khtrP",
    "prepend",
    "AzyqG",
    ".067\x2024.5\x20",
    "6984\x2030.10",
    "m-control\x20",
    "createObje",
    "6.75C17.08",
    "\x20\x20\x20\x20\x20\x20\x20</a",
    "order-font",
    "KPaZB",
    "le\x22>",
    "n</div>\x0a\x20\x20",
    "rtFzU",
    "dwSZe",
    ".713\x20164.2",
    "\x20\x20\x20\x20\x20\x20\x20<sp",
    "\x20107.882\x201",
    "Color",
    "111.803\x2018",
    "icon-14\x22>\x0a",
    "vdzSM",
    "rPsip",
    ".5032\x2021.1",
    "\x20data-valu",
    "nter\x20pop-s",
    "vLatw",
    "vnFDL",
    ".btn-muted",
    "Szuim",
    "78.72\x2063.6",
    "815\x2028\x2034.",
    "7.3879\x20110",
    "7.761\x20220.",
    "HGpMm",
    "0.57\x20356.5",
    "jmxts",
    "8.312\x20250.",
    "-arrow-up-",
    ".3469\x2029.2",
    "mmlWy",
    "placement=",
    "a-bs-toggl",
    "elaZr",
    "01\x20187.772",
    "51C385.412",
    "64.8\x20315.7",
    "ap=\x22round\x22",
    "ght=\x22512\x22\x20",
    "\x20\x20\x20\x20</div>",
    "35\x20-1.1332",
    "anded=\x22fal",
    "type",
    "Verdana",
    "IJEck",
    "chỉnh\x0a\x20\x20\x20\x20",
    "HTWEV",
    "32.784\x20215",
    "BOPKk",
    "PBVwj",
    "le-left\x22><",
    "EvcKC",
    "p\x20tiếp\x20the",
    "\x20\x20\x20</div>",
    ".321\x20105.6",
    "oVuBV",
    "dropdown",
    "YGyWS",
    "-menu-list",
    ".0815\x208\x2033",
    "ub\x22]\x20.csi-",
    "\x22jw-speed-",
    "\x2053\x2049.269",
    "\x20105.5L53.",
    "zkqnX",
    "=\x220.5\x22>\x0a\x20\x20",
    "euVFC",
    "s-title=\x22P",
    "45.0044\x2022",
    "FDAqE",
    "si-font\x22>",
    "/div>",
    "outroStart",
    "\x2021.3421\x207",
    "2.0968\x209.4",
    "\x20.dropdown",
    "\x2014\x2075.387",
    "-main-capt",
    "\x2016.75\x2021.",
    "le=\x22Độ\x20tro",
    "vtt",
    "\x20trong</di",
    "\x20\x20\x20\x20\x20\x20\x20</s",
    "ajQdM",
    "\x20\x20\x20\x20\x20\x20",
    "ub-color-s",
    "FAeBl",
    "\x20\x20\x20\x20\x20<ul\x20c",
    "s-title=\x22\x22",
    "ttp://www.",
    "e=\x22fontFam",
    "7.605\x20378.",
    "<div\x20id=\x22v",
    "Qotrv",
    "toggle-qua",
    "mer\x22>00:00",
    "5\x206.59835C",
    "42\x2079.2663",
    "JfAgk",
    "V9.25C2.5\x20",
    "971C12.635",
    "i-title\x22>Đ",
    "kZNUS",
    "5\x200\x201-.45\x20",
    "7\x2081.6667\x20",
    "Lỗi\x20khi\x20pl",
    "webkitPict",
    "pageY",
    "1.75C10.88",
    "jKadb",
    "0.773C221.",
    "472-15.013",
    "tooltip\x22\x20d",
    "ta-type=\x22e",
    "12\x22\x20xmlns=",
    "\x20style=\x22ba",
    "asxOI",
    "</i></div>",
    "\x20116.729\x201",
    "em-btn\x20ite",
    "480p",
    "\x20272.239\x204",
    "nter\x20jw-au",
    "qRcEf",
    "ay:",
    "mfjNL",
    "p=\x22round\x22\x20",
    "-text-div\x22",
    "\x20\x20\x20<span>",
    "C11.0194\x202",
    "getDuratio",
    "39\x2013.8839",
    "b-slide\x20le",
    "BGzLq",
    "2\x22>\x0a\x20\x20\x20\x20\x20\x20",
    ".jw-sub-ca",
    "one\x22\x20xmlns",
    "jFNjc",
    "zkxYT",
    "RMVjK",
    "sub\x20sub-op",
    "store:",
    "XbIzb",
    "\x2014.5\x2069.5",
    "9\x20158.267\x20",
    ".6335\x2024.6",
    "ist\x20jw-mai",
    "li>\x0a\x20\x20\x20\x20</",
    "<span>",
    "106.713\x2023",
    ".5743\x20263.",
    "\x20Màu\x20chữ\x0a\x20",
    "2.0348C175",
    "215\x2022.547",
    "getPositio",
    "p-outro\x22\x20i",
    "toLowerCas",
    "Vàng",
    "title",
    "50.883\x20131",
    "rfjXo",
    "ShDWa",
    "der-time",
    "STtEK",
    "und\x20.cs-it",
    "zXSwy",
    "ily-sub",
    "ZgkCb",
    "closest",
    "\x2034.376L10",
    "5.36612\x208.",
    "\x20data-type",
    "\x20\x20\x20\x20</a><a",
    "DRfIJ",
    "\x20178.603\x204",
    ".25C25.052",
    "\x22\x20data-typ",
    "17\x208.60054",
    "lass=\x22cs-i",
    "1183\x2017.63",
    "ground\x20sub",
    "load\x22\x20clas",
    "opacity",
    "e=\x22outside",
    "CYMpu",
    "=\x22round\x22\x20s",
    "\x20\x20\x20\x20<i\x20cla",
    "\x20\x20\x20\x20",
    "pp-pop",
    "47\x2063.6027",
    "tion:",
    "adSkipped",
    "ption",
    "63\x2072.8137",
    "DBWEm",
    "XjnlT",
    "NjLlZ",
    "CeWDA",
    "NpNcY",
    "color:\x20",
    "city\x22>\x0a\x20\x20\x20",
    "l=\x22current",
    "57.1667H49",
    "Lỗi\x20khi\x20gử",
    "dsWIe",
    "width=\x22512",
    "hdJXF",
    "\x22M36.75\x2053",
    "1C84.8635\x20",
    "bóng</div>",
    "PWVUX",
    "9.4167\x204.0",
    "i-title\x22>C",
    "XjAtW",
    "5.778\x20419.",
    "s-item\x20lin",
    "rnCqZ",
    "WJprc",
    "setItem",
    "Sfdpr",
    "4601C111.6",
    "tive\x22\x20href",
    "nt-family-",
    "C11\x2059.813",
    "tle\x20py-1\x22>",
    "bpTXz",
    "sub-off\x22\x20d",
    "tLAoD",
    "667H81.666",
    "enter\x20gap-",
    "NmcDu",
    "HWBlg",
    "le\x22>Độ\x20tro",
    "w3.org/200",
    "tom-toolti",
    "zydDf",
    "-max\x22\x20data",
    "append",
    "\x20d=\x22m4.028",
    "7\x20100.54L2",
    "\x2034.25C2.5",
    "tiếng\x22></i",
    "fAfJD",
    "jWDrr",
    "#toggle-ss",
    "ồng\x20bộ</sp",
    "nt-family\x20",
    "-intro\x22\x20\x0a\x20",
    "round-sub\x20",
    "2g-sync-st",
    "C77.118\x2075",
    "introStart",
    "-family",
    "captions",
    "21V15C11\x201",
    "ART:",
    "#03047d",
    "94.217\x20187",
    "\x2022.9703\x206",
    "ass=\x22sub-s",
    "color-sub\x20",
    "WcaSJ",
    "r-font\x20.cs",
    "XPYmY",
    "ata-key=\x22e",
    "-sub\x22\x20styl",
    ".9996\x2025.2",
    "PMRVz",
    "sub-size-s",
    "39\x2022.1161",
    "\x20114\x2082.34",
    "83\x2012.3505",
    "99\x2018.501\x22",
    "\x20\x20<path\x20fi",
    "XPJaw",
    "CvZuw",
    "78L179.774",
    "XHvHs",
    "\x20\x20\x20\x20\x20\x20\x20\x20</",
    "6495\x2031.5\x20",
    "386.919C98",
    "\x20trong\x20Nền",
    "zQkeG",
    "-4.67-3.5c",
    "9\x20369.627\x20",
    "ss=\x22csi-ti",
    "olid\x20fa-ar",
    "FHD\x201080p",
    "PlayerPosi",
    "rrent\x20span",
    "61\x20220.995",
    "\x200\x2024\x2024\x22\x20",
    "le\x22>1.25x<",
    "dDNNg",
    "tcDjF",
    "\x20\x20\x20\x20\x20\x20\x20<im",
    "9.27\x20110C1",
    "HSOUM",
    "609\x203.8335",
    ".0815\x2035\x202",
    "NRCMx",
    "mily-sub",
    "ter\x20jw-cap",
    "75\x2011.75H1",
    "5.835\x204.80",
    "Bo\x20viền",
    "CJTEn",
    "23C83.4601",
    "\x20\x20\x20\x20\x20\x20</a>",
    "V18.4471C2",
    "ộ\x20trong\x0a\x20\x20",
    "GsLZG",
    "btn\x20item-p",
    "0\x200\x20-1.555",
    "06.658\x2072\x20",
    "FVxZA",
    "itle\x22>\x0a\x20\x20\x20",
    "style=\x22mar",
    "04.807C59.",
    "ewBox=\x220\x200",
    "\x20</ul>\x0a\x20\x20\x20",
    ".p_b-right",
    "-solid\x20fa-",
    "one\x22\x20data-",
    "p-buttons\x22",
    "qweGV",
    "53\x2051.8818",
    "tle\x22>Phần\x20",
    "setCurrent",
    "ive",
    "6121\x20106.6",
    ".25\x22>\x0a\x20\x20\x20\x20",
    "EllKL",
    "c\x20file",
    "1\x22></div>\x0a",
    "\x2014.25H30.",
    "city-sub\x22]",
    "297\x20112.10",
    "cEERN",
    "tle\x20sub-ba",
    "166.369\x2024",
    "jVEYJ",
    "ng</div>\x0a\x20",
    "CK_STATE",
    "39\x2012.1161",
    "QgIay",
    "9.4167\x2021.",
    "jlzWP",
    "l\x22>\x0a\x20\x20\x20\x20\x20\x20",
    "QLfLm",
    "4.1667Z\x22\x20f",
    "uto-close=",
    "hữ\x22>\x0a\x20\x20\x20\x20\x20",
    "48\x2025.1732",
    "btn\x20skip-1",
    "s=\x22item\x22><",
    "x</div>\x0a\x20\x20",
    "city\x22]\x20.cs",
    "sSURS",
    "97C14\x2051.8",
    "fa-volume-",
    "cement=\x22to",
    "uRwam",
    "họn\x20file\x20p",
    "Ctpws",
    "ta-value=\x22",
    "Lỗi\x20khi\x20ST",
    "Captions",
    "CHANGE_EPI",
    "RygHI",
    "-->",
    "op-mask\x22><",
    "li>",
    "sub-color\x20",
    "WBspm",
    "31.1339\x2022",
    "s=\x22v-thumb",
    "6.8355\x2034.",
    "ber",
    "city-backg",
    "tập",
    "snpDA",
    "\x20\x20<path\x20d=",
    "EdItk",
    "276.358V18",
    "1.3683\x2013.",
    "RAKMU",
    "9\x2041.8615C",
    "\x20-2\x200v12a1",
    "visualQual",
    ".eps-mask",
    "\x20\x20\x20\x20\x20\x20Phụ\x20",
    ".jw-intro,",
    "NqZeF",
    "e=\x22Font\x20ch",
    "XSlRg",
    "Setup\x20erro",
    "\x220\x200\x2024\x2024",
    "2\x2035.1339C",
    "2V276.358C",
    "IqlrW",
    "IrHfv",
    "sub-opacit",
    "e-right\x22><",
    "HDPOK",
    "\x2038.7917\x207",
    "bar\x22>\x0a\x20\x20\x20\x20",
    "\x20<svg\x20widt",
    "sicJQ",
    "buDCo",
    "\x2013.3143\x208",
    ".3683\x203.41",
    "d\x20sub-font",
    "7.8683\x2023.",
    "#toggle-si",
    "10zm0\x2018c-",
    "3H3.75C3.4",
    "Lỗi\x20khi\x20bậ",
    "MjlsZ",
    "Sxmje",
    "8C75.5589\x20",
    "/span>\x0a\x20\x20\x20",
    "g\x20progress",
    "ub-col\x20is-",
    ">Tuỳ\x20chỉnh",
    "7.342\x20100.",
    "code",
    "HnXsR",
    "list\x20jw-qu",
    "data-bs-to",
    "8\x20186.626\x20",
    "10.7449\x2023",
    "ccept=\x22.vt",
    "\x20100.773C1",
    "eft\x22></i>\x0a",
    "eVfDZ",
    "ZtUOw",
    "Xanh\x20lá",
    "\x22]\x20.csi-cu",
    "r\x22></path>",
    "aqmJt",
    ".7602\x20205.",
    "e-center\x22>",
    "Xem\x20tập\x20",
    "SET_HOST",
    "82\x20114\x20105",
    "ZM18\x2023C18",
    "#243224",
    "005\x2042.034",
    "applicatio",
    "0.701\x20194.",
    "s-list\x20jw-",
    "current",
    ".8212\x2086.7",
    "9.8385\x2046.",
    "HZFJf",
    "-right\x22></",
    ".25\x2024.25H",
    "http://www",
    "sub-size",
    ".8995\x2037.5",
    "CrIHA",
    "o</span>\x0a\x20",
    "playback-r",
    ".162C144.0",
    "03.255\x20171",
    "undOpacity",
    "-level=\x22",
    "-circle\x22><",
    "C17.3995\x202",
    "016\x20328.17",
    "white",
    "-placement",
    "QTRUz",
    "FXUPq",
    "TrumD",
    "a>\x0a\x20\x20\x20\x20\x20\x20\x20",
    "\x20data-bs-c",
    "1\x20404.921\x20",
    "54L90.9877",
    "tion-",
    "m\x22\x20type=\x22f",
    "complete",
    "w-playback",
    "\x22dropdown-",
    "\x20\x20\x20\x20\x20\x20\x20Bỏ\x20",
    "wQfPH",
    "djgTL",
    "81.6667\x2085",
    "96.2924\x2069",
    "l-primary\x22",
    "\x20\x20\x20\x20\x20<img\x20",
    "\x20\x20</div>",
    "rfjnT",
    "=\x22m10.8\x2015",
    "ZJrns",
    "ing\x20subtit",
    "4.5\x2067.887",
    "e-quality\x22",
    "\x20\x20<a\x20href=",
    "ke-linecap",
    "b-size-sub",
    "au\x20(xxs)",
    "BnWww",
    "yle=\x22displ",
    "\x20328.162\x201",
    "sjGQg",
    "ality-menu",
    "3C290.711\x20",
    "Sjctb",
    "s-placemen",
    "eight=\x22512",
    "pvqef",
    "96.055\x20186",
    "79.8708\x2039",
    "TYPE=SUBTI",
    "GwIfL",
    "#4a027f",
    "1\x20179.774\x20",
    "#sub-speed",
    "luocW",
    "\x20chính\x20/\x20C",
    "55-.45-1-1",
    "b_bar\x20jw-c",
    "e=\x22current",
    "03\x20259.83\x20",
    "fTKiS",
    "21\x2055\x2023.4",
    "fontSize",
    "-title\x22>\x0a\x20",
    "2\x2075\x20109\x207",
    "\x20105.27C14",
    "ypIPL",
    "block",
    "9997\x20108.1",
    "LEPrv",
    "\x22>\x0a\x20\x20\x20\x20\x20\x20\x20",
    "ound\x22\x20styl",
    "default",
    "KRHxg",
    "C31.5\x2022.6",
    "tqjrm",
    "fUhAX",
    "74C400.889",
    "ormFile\x22\x20a",
    "166.263\x2032",
    "w-reset\x20jw",
    "hJvHX",
    "14pt",
    "on\x20btn-mut",
    "05\x204.08334",
    "24.6114\x2021",
    "uEkMw",
    "\x20\x20\x20\x20<span\x20",
    "073\x2090.306",
    "\x22\x20fill=\x22no",
    "p\x22\x20data-bs",
    "class=\x22p_b",
    "led",
    ".ssp-pop-i",
    ".btn-uploa",
    "u.active\x20.",
    "6477L158.2",
    "1031013dsSReW",
    "0</div>\x0a\x20\x20",
    "nRqeM",
    "mxEcy",
    ".item-max",
    "v>\x0a\x20\x20\x20\x20\x20\x20<",
    "\x20.cs-item[",
    "30\x22\x20viewBo",
    "ZwlvK",
    "pan\x20class=",
    "mmsQb",
    "ureInPictu",
    "iWXxG",
    "bygqo",
    "\x20.jw-outro",
    ".112\x2046.65",
    "đề\x20(.vtt,\x20",
    "3.5399\x2020.",
    "10054\x2033.1",
    "div>\x0a\x20\x20\x20\x20\x20",
    "captionsLi",
    "5.27Z\x22\x20fil",
    "83\x2017.6339",
    "span>\x0a\x20\x20\x20\x20",
    "JQoym",
    "e\x22]\x20.csi-c",
    "ass=\x22csi-t",
    "\x20\x20\x20\x20\x20\x20\x20\x20<d",
    "tem-next\x20d",
    "m-bracket\x22",
    "class=\x22inc",
    "und\x22></pat",
    "9.108C364.",
    "h>\x0a\x20\x20\x20\x20\x20\x20\x20",
    "\x22]\x20.csi-ti",
    "183.048\x2040",
    "a\x20class=\x22d",
    "ực\x20hiện\x20ac",
    "ata=\x22setti",
    "Đen",
    "L48\x2027.460",
    "ul>",
    "0815\x2021.75",
    "\x2063.6027\x201",
    "\x200\x20396\x20430",
    "ata=\x222\x22>\x0a\x20",
    "ter\x22>\x0a\x20\x20\x20\x20",
    "twPxO",
    "\x20\x20<a\x20id=\x22s",
    "-font\x22\x20cla",
    "style=\x22dis",
    "fBRTM",
    "ictureEnab",
    "\x20\x20\x20</svg>\x0a",
    "3618\x2028.37",
    "79\x20135.953",
    "kFSnp",
    "-title\x22>",
    "\x20242.398\x202",
    "querySelec",
    "8\x206.25\x2028H",
    "iGWLN",
    "t\x22\x20class=\x22",
    "XaPfM",
    "7\x2039.0766\x20",
    ".9997\x20105.",
    "nt-sub\x22\x20st",
    "mall\x22>Phụ\x20",
    "\x20\x20\x20\x20\x20\x20\x20\x20Ph",
    "135.953\x2024",
    "\x22\x20style=\x22d",
    "playing",
    "LSIFg",
    "\x20\x20\x20\x20\x20<i\x20cl",
    "ss=\x22item-b",
    "\x22small\x22>Đặ",
    ".972\x2072.10",
    "w.w3.org/2",
    "size",
    "663L170.37",
    "rent\x20line-",
    "9167\x2053.08",
    "9.2697\x20110",
    "bOyjv",
    "idth=\x22396\x22",
    "-title=\x22Th",
    "75C34.7446",
    "ATCHING_DA",
    "Rbetj",
    "OxPpE",
    "48\x208\x205.600",
    "-angle-lef",
    "55Z\x22\x20fill=",
    "pop",
    "BCygT",
    "JRIHG",
    "ss=\x22cs-ite",
    "zylBE",
    "absolute",
    "xt\x22\x20data-b",
    "parent",
    "6.829\x2041.8",
    "815\x2024.25\x20",
    "NchmP",
    "menu\x22>\x0a\x20\x20\x20",
    "GaTVs",
    ".item-min",
    "gXfXZ",
    "243.281\x2085",
    "\x22inc-icon\x20",
    "KDcZa",
    "Chỉ\x20chấp\x20n",
    "\x20fa-angle-",
    "jFCLZ",
    "18\x2018\x2014\x202",
    "\x20width=\x2251",
    "AsocU",
    "uNmSh",
    "7\x2014.1667V",
    "\x20.sub-slid",
    "YoQWr",
    "e=\x22edgeSty",
    "yYhoA",
    "0.1049\x203.5",
    "t=\x22top\x22\x20da",
    "ifJOY",
    "kGBoQ",
    "xmlns=\x22htt",
    "rSeoO",
    "Trebuchet\x20",
    "venodd\x22\x20d=",
    "lapsed",
    "\x205\x208.91848",
    "67\x2026.3129",
    "DbkRL",
    "<span\x20clas",
    "primary\x20jw",
    "dLAcM",
    "7\x20390.783C",
    "-item",
    "OFExJ",
    "bitrate",
    "font\x20sub-b",
    "NSRmN",
    "4.218\x20297.",
    "jEKqs",
    "5C85.75\x2058",
    "1.6515\x2021.",
    "35\x208.91848",
    "4.5396\x20108",
    "-check\x22></",
    "height=\x2241",
    "6.729\x20134.",
    "Qntqr",
    "replace",
    "XUZgT",
    "Ngups",
    "-tooltip\x22\x20",
    "\x20jw-playba",
    "\x20Đậm",
    "<div\x20id=\x22s",
    "tem\x20line-c",
    "an\x20class=\x22",
    "trong\x20Nền\x0a",
    "49\x2028.6984",
    "WORau",
    "Z\x22>\x0a\x20\x20\x20\x20\x20\x20",
    "tle\x22>\x0a\x20\x20\x20\x20",
    "</path>\x0a\x20\x20",
    "nter\x22>\x0a\x20\x20\x20",
    "sub-slide\x20",
    "evenodd\x22\x20c",
    ".sub-uploa",
    "bMXDK",
    "PLAYER_ACT",
    "7448\x2081.66",
    "\x20315.585\x207",
    "52\x20263.801",
    "e:\x20",
    "#323232",
    "startTime",
    "=\x22w2g-live",
    "nd\x22></path",
    "ODcWR",
    "//www.w3.o",
    "ADwJv",
    "a=\x221.5\x22>\x0a\x20",
    "DNYNJ",
    "0C51.6118\x20",
    "7533\x2023.56",
    "2.954V149.",
    "yjcmx",
    "\x205.91848\x202",
    "ZWjkY",
    "location",
    "6\x20242.398\x20",
    "lExTQ",
    "y2024",
    "b-backgrou",
    "rev",
    "-font-fami",
    "cogcH",
    "6.2453\x2022.",
    "921\x20342.29",
    "IMamH",
    "2\x20135.675\x20",
    "LImHF",
    "\x2011.2197\x202",
    "vtt\x20hoặc\x20.",
    "undefined",
    "\x20175.952\x202",
    "hữ</div>\x0a\x20",
    "ly\x20sub-col",
    "\x20data-bs-t",
    "nh\x20/\x20Độ\x20tr",
    "style=\x22wid",
    "-center\x22\x20d",
    ".sub-slide",
    "ype=\x22fontS",
    "1035815ZHBatd",
    "40.677\x20318",
    "ged",
    "\x22\x20id=\x22togg",
    "round\x20.cs-",
    "s4.48\x2010\x201",
    "9187\x20178.6",
    "SNxac",
    ".w3.org/20",
    "class=\x22fa-",
    "family\x22\x20st",
    "eMSLt",
    "QbEUs",
    "54\x208.1317\x20",
    "\x20data-bs-p",
    ".5399L83.4",
    "\x2013.8839C3",
    "LOxNV",
    "background",
    "16:9",
    "VTAsk",
    "show",
    "\x2063.4167V1",
    "ZmrmG",
    "\x2055\x2018.73\x20",
    "hiệu\x0a\x20\x20\x20\x20\x20",
    "imer\x22>00:0",
    "opdown-tit",
    "kivrh",
    "ACFRA",
    "Xpdgu",
    ".5\x2013C31.5",
    "data=\x22",
    ".5\x2024.5\x2064",
    "setVolume",
    "\x2074.3879\x201",
    "327\x2010.744",
    "hapter-sli",
    "666\x2068.413",
    "ibPpw",
    "m1.472-15.",
    "ot\x22></div>",
    "kvsMv",
    "71C20.7482",
    "g\x20loading=",
    "zYOkL",
    ".9994C17.0",
    "481655UesGKk",
    "title\x22>\x0a\x20\x20",
    "20pt",
    "OdwzX",
    "ly\x22>\x0a\x20\x20\x20\x20\x20",
    "\x22Cỡ\x20chữ\x22>\x0a",
    "ss=\x22dropdo",
    "<br>",
    "mouseup",
    "u\x20chữ</div",
    "ef=\x22#\x22\x20dat",
    "uqkRJ",
    "class=\x22ite",
    "kind",
    "l=\x22none\x22\x20h",
    "idZBI",
    "20.118\x20111",
    "0.7974L19.",
    "b-caption-",
    "3.801\x20187.",
    "\x22\x20xmlns=\x22h",
    "\x20level-2\x20s",
    "7.772C220.",
    "el=\x22-1\x22>\x0a\x20",
    "\x2093.9167\x205",
    "le=\x22Viền\x20c",
    ".level-1",
    "11.882\x20110",
    "GipEB",
    "8\x20129.676\x20",
    "#sub-color",
    "ách",
    "21.75\x2030.2",
    "4\x2067.1593C",
    "09\x2025.247\x20",
    "b\x20.cs-item",
    "08\x2085.0372",
    ".w2g-sync-",
    "a=\x22",
    "val",
    "XYttA",
    "idth=\x2240\x22\x20",
    "fill=\x22curr",
    "\x20\x20\x20\x20\x20\x20\x20\x20\x20<",
    "\x20\x20</span>\x0a",
    "-item[data",
    "sub\x20sub-co",
    "GrwLs",
    ".1161C30.8",
    "\x22>Song\x20ngữ",
    "\x22\x20href=\x22#\x22",
    "\x20\x20\x20\x20\x20</spa",
    "title\x20smal",
    "getContain",
    "uGEpo",
    "0\x2098\x2098\x22\x20f",
    "iZFvZ",
    ".player-dm",
    "\x2029.203L23",
    "\x20\x20</path>\x0a",
    "#skip-intr",
    "75\x2011.554\x20",
    "QYNzQ",
    "15\x2021.4607",
    "53\x2019.9994",
    "71.016\x20328",
    "Lỗi\x20khi\x20đọ",
    "url",
    "9H89.8333C",
    "\x20\x20\x20\x20<div\x20c",
    "</span><i\x20",
    "Lỗi\x20khi\x20se",
    "isplay:\x20no",
    "DCSzt",
    "ryWoe",
    "lxQBa",
    "iPToK",
    "UOjZl",
    "viewable",
    "ustom-clas",
    "4.903\x2054.9",
    "seek",
    "ath\x20d=\x22M14",
    "3505\x2017.63",
    "VQFrM",
    "6675H75.66",
    "\x22M4.08334\x20",
    "xdLVQ",
    "hhrMI",
    "tureInPict",
    "4\x2020.3879\x20",
    "d=\x22M158.26",
    "play:\x20none",
    "d=\x22skip-ou",
    "nchFv",
    "\x20149.325C1",
    "spkJG",
    "ke-linejoi",
    "HWcYK",
    "jRWAX",
    "></div>\x0a\x20\x20",
    "7-.6\x200-.8l",
    "b-font-fam",
    "76\x20190.579",
    "FKPDm",
    "subtitles",
    "UzouI",
    "tn\x20item-se",
    "7.5\x2034.25Z",
    "5\x20352.813\x20",
    "tp://www.w",
    "add",
    "%;\x20width:\x20",
    "12\x2032.9218",
    "ZGeMZ",
    "<path\x20fill",
    "0-1.664l-1",
    "humbnail\x22>",
    "xYihv",
    "\x22iv-load\x22\x20",
    "qAKEJ",
    "PDTaK",
    "hLsRv",
    "line\x20jw-te",
    "WXEaK",
    "gVBCF",
    "ile\x22\x20id=\x22f",
    "\x20\x20</ul>\x0a\x20\x20",
    "4\x20180.363\x20",
    "purple",
    "e=\x22display",
    "\x20Màu\x20nền\x0a\x20",
    "t-family\x20s",
    "333\x2053.083",
    "ub-opacity",
    "161\x203.5983",
    "1.3421\x2018\x20",
    "29C11.372\x20",
    "NXwlT",
    "HyPwi",
    "apyGB",
    "ype=\x22fontF",
    "JCOZa",
    "xWfMr",
    "EptsP",
    "ext",
    "pvZoc",
    "i-title\x22>M",
    "33.75C34.0",
    "\x20jw-captio",
    "s-item[dat",
    "\x20class=\x22fa",
    "none",
    "item",
    "cvtXP",
    "clhTI",
    "100.54\x2075\x20",
    "\x209.2\x206.131",
    "ktplq",
    "olTbr",
    "kground\x20su",
    "\x20\x20\x20\x20\x20\x20\x20</d",
    ".772V276.3",
    "forEach",
    "IvCeA",
    "7894C174.1",
    "MfyXm",
    "yellow",
    "Xanh\x20Olive",
    "\x20.csi-curr",
    "e\x22>Chất\x20lư",
    "troke-widt",
    "53\x206.76964",
    "ground",
    "BdXPh",
    "hKaHo",
    "=\x22s-title\x20",
    "srt",
    "6685\x2017.86",
    "ont\x20sub-ba",
    "OQfNc",
    "IeaKG",
    "aption-men",
    "r\x22\x20data-ty",
    "32pt",
    "\x20304.976\x202",
    "4.8635\x20164",
    "995\x202.8661",
    "gjhVA",
    "Tím",
    "TwtQZ",
    "\x20\x20\x20\x20\x20\x20<i\x20c",
    "131z\x22>\x0a\x20\x20\x20",
    "cs-item\x20li",
    "ng\x22>\x0a\x20\x20\x20\x20\x20",
    "a-title=\x22Đ",
    "75%",
    "đề</div>\x0a\x20",
    "VNBji",
    "230.577\x2029",
    "iPrNM",
    "itle\x20small",
    "473\x20273.84",
    "ubtitle-se",
    "ub-size-su",
    "3995\x2035\x2027",
    "ass=\x22cs-it",
    "61.679\x20112",
    "bs-custom-",
    "\x22m-group\x22>",
    "IsaqZ",
    "AIOIZ",
    "e\x22>\x0a\x20\x20\x20\x20\x20\x20",
    "qQRsG",
    "ZwHRh",
    "cgHyP",
    "5\x2080.0229\x20",
    "lrhnD",
    "6.358V187.",
    "cSKay",
    ".item-next",
    "\x20\x20\x20</a><a\x20",
    "item-btn\x20i",
    "àu\x20nền</di",
    "76\x20122.388",
    "SYPii",
    "\x22sub-slide",
    "6.7698\x206.8",
    "match",
    "11\x20361.305",
    "aised\x22\x20dat",
    "TATE_RESPO",
    "s-custom-c",
    "KMnzx",
    ".cs-item[d",
    "281\x2020.374",
    "le\x22>Viền\x20c",
    "dhVBo",
    "7.3995\x2014.",
    "VriEo",
    "\x2014.3333\x202",
    "6.25C36.58",
    "nt\x20sub-bac",
    "xjqTd",
    "sub-back\x20l",
    "2\x2024.3891\x20",
    "sub\x20sub-ba",
    "\x20/\x20Font\x20ch",
    "815\x205.1317",
    "2\x2015V21C22",
    "TquQo",
    "7.4518\x2024.",
    "dary\x20jw-su",
    "lid\x20fa-che",
    "\x20\x20\x20\x20<path\x20",
    "uality\x22\x20cl",
    "ily\x22]\x20.csi",
    "old!",
    "bbCAB",
    "7C83.9218\x20",
    "e=\x22",
    "lide\x20level",
    "-control-s",
    "lass=\x22cs-l",
    "y\x22\x20class=\x22",
    "ub-font-fa",
    "\x22\x20data-lab",
    "dqxGD",
    "fyxvN",
    "dio-label\x22",
    "lor\x20sub-op",
    "el-1\x22\x20styl",
    "TLES",
    "\x0a\x20\x20\x20\x20<div\x20",
    "15\x2014.25\x201",
    "=\x22#\x22\x20data=",
    "4.783\x2028.9",
    "75\x20105.5C7",
    "àu\x20chữ\x22>\x0a\x20",
    "\x2022.6685\x201",
    "951\x2067.756",
    ".iv-load",
    "1561\x20130.5",
    "9243\x2023.96",
    "xvuie",
    "1\x201\x200\x200\x200\x20",
    "6\x20135.953\x20",
    "54\x20127.276",
    "ze-sub",
    "aUvxT",
    "an>Thu\x20nhỏ",
    "7\x2036.5815\x20",
    "rder-font",
    "\x2010.0643\x201",
    ".882\x2076.11",
    "37.5\x2034.25",
    "id=\x22sub-up",
    "sub\x20\x22>\x0a\x20\x20\x20",
    "width=\x222.5",
    "TWsat",
    "lass=\x22drop",
    "6.7698\x2022.",
    "DGmJO",
    "GIxaF",
    "title\x22>1.5",
    "4\x20227.007\x20",
    "fhuwT",
    "color-sub",
    "Picture-in",
    ".jw-text-c",
    "ữ\x20Song\x20ngữ",
    "ss=\x22custom",
    "\x20\x20\x20\x20\x20\x20<a\x20i",
    "32\x2014.8021",
    "ELDUF",
    "nodd\x22\x20d=\x22M",
    "y-font-sub",
    "v-info\x22>\x0a\x20",
    "\x20\x20<div\x20cla",
    "rxQab",
    "\x20\x20\x20\x20\x20\x20<spa",
    "đề\x20chính</",
    "split",
    "qUkdO",
    "hNLbc",
    "u\x22\x20data=\x22r",
    "Sâu",
    "\x22cs-item\x20l",
    "3995\x2024.11",
    "178.72\x2041.",
    "53.3168\x2037",
    "995\x2021.881",
    "gaaqe",
    "an>Cài\x20đặt",
    "ww.w3.org/",
    "amily",
    "le=\x22Font\x20c",
    "-gear\x22></i",
    "EvKdp",
    "st\x20jw-play",
    "nodd\x22\x20clip",
    "09.27\x2072C1",
    "QRRWa",
    "995\x20175.95",
    "\x20150.883\x203",
    "uGfEn",
    "1.612\x2043.5",
    "/2000/svg\x22",
    ".skip-10-p",
    "6V312.954C",
    "C213.779\x203",
    "918\x2075.5\x203",
    "/api/v1/ep",
    "\x22\x20stroke=\x22",
    "rQYwW",
    "81.653C97.",
    "acity\x22\x20dat",
    "Levels",
    "mySecretKe",
    "\x20span",
    "mYAjZ",
    "Lỗi\x20khi\x20sy",
    "le-subs\x22\x20d",
    "01\x2075.3879",
    "eBNgg",
    "ltip\x22\x20data",
    "5444C216.9",
    "\x209.25V26.7",
    "C17.8683\x201",
    "ight\x20line-",
    "ropdown-ti",
    ".9\x204.67-3.",
    "C111.612\x205",
    "oVANr",
    "12\x2084.4601",
    "-icon\x22>\x0a\x20\x20",
    "8.5\x2038.791",
    "Oznnu",
    "esJzi",
    "\x20/\x20Viền\x20ch",
    "5\x2050.8282\x20",
    "9\x2063.7178L",
    "t\x20của\x20bạn\x20",
    "=\x22M190.579",
    "state",
    "Jjyol",
    "-font-sub\x22",
    "TDKAD",
    "iv>\x0a\x20\x20\x20\x20</",
    "ggle-capti",
    "5815\x2011.75",
    "YUITB",
    ".247C16.26",
    ".60054\x2034.",
    "\x20\x20\x20\x20\x20\x20\x20\x20",
    "level-2\x20su",
    "requestPic",
    "p\x20sau</spa",
    "gzcIZ",
    "b-back\x20lin",
    "Spbtj",
    "dmczG",
    "\x20class=\x22q-",
    "y-font",
    "54\x2027.8683",
    "qgKTX",
    "6.118\x2018\x207",
    "e\x20ps-3\x22>\x0a\x20",
    ".73Z\x22\x20fill",
    "ter\x22\x20data-",
    "25544\x2037.5",
    "LAxTS",
    "n>\x0a\x20\x20\x20\x20\x20\x20\x0a",
    "tlUFZ",
    "rg/2000/sv",
    "a-check\x22><",
    "96\x20105.5C4",
    "sDLoa",
    "\x22tooltip\x22\x20",
    "n-sub-sett",
    "nLKku",
    "18\x20297.761",
    "click",
    "enter\x22>\x0a\x20\x20",
    ".467\x20321.3",
    "66.2547\x2012",
    "3\x2022.7301C",
    "KweaR",
    "ZlPPw",
    "DBcWM",
    "bs\x22>\x0a\x20\x20\x20\x20\x20",
    "3468\x2013.31",
    "sub-size\x20s",
    "jw-icon\x20jw",
    "XzyVq",
    "\x2014\x2046.657",
    "=\x22cs-item\x20",
    "=\x22csi-titl",
    "apsed\x22\x20rol",
    "NSE",
    "qSfPf",
    "19\x2053.9997",
    "hận\x20file\x20.",
    "SRkKw",
    "47Z\x22\x20strok",
    "\x22csi-title",
    "PHXMI",
    "\x20.528.882z",
    "5\x2030.5ZM6.",
    "n-item\x20",
    "agybY",
    "000/svg\x22>\x0a",
    "toggle-fon",
    "ondary\x22>\x0a\x20",
    "Xanh\x20dương",
    "n-button\x20d",
    ".jw-slider",
    "\x20\x20\x20\x20\x20<span",
    "56\x20323.125",
    "2488\x2014.82",
    "u\x20.dropdow",
    "LUXSp",
    "UzCYg",
    "44\x20174.148",
    "\x20\x20\x20\x20<svg\x20w",
    "43\x2012.0968",
    "ass=\x22csi-c",
    "[data=\x22",
    "Tuỳ\x20chỉnh<",
    "nt\x20line-ce",
    "er\x20is\x20too\x20",
    "h=\x2298\x22\x20hei",
    "avZGf",
    "text/plain",
    "s=\x22csi-cur",
    "091\x20294.31",
    "87903\x2016.2",
    "mASxF",
    "=\x22none\x22\x20xm",
    "5.26888\x2018",
    "ta-type=\x22f",
    "menu",
    "/a>\x0a\x20\x20\x20\x20\x20\x20",
    "n-title\x20py",
    "sqikB",
    "or\x22>\x0a\x20\x20\x20\x20\x20",
    "block\x27;\x22\x20o",
    "div\x20class=",
    "Error\x20load",
    "w-audio-me",
    "uân",
    "ctCTH",
    "ault",
    "27Z\x22\x20fill=",
    ".154\x20213.7",
    "\x20\x20\x20\x20\x20\x20Song",
    "\x20<div\x20clas",
    "Vxnjz",
    "\x22\x20data=\x22",
    ".jw-text-t",
    "\x20\x20Tốc\x20độ\x0a\x20",
    "nSJKk",
    "iv\x20class=\x22",
    "em\x20line-ce",
    "eFkYX",
    "round",
    "vlNEL",
    "le\x22>Cỡ\x20chữ",
    "=\x22round\x22><",
    "\x22cs-list\x20j",
    "BbMGT",
    "2467\x2011.75",
    "clientX",
    "HBVGi",
    "\x20\x20<a\x20id=\x22t",
    "87.772ZM26",
    "ass=\x22item-",
    "QjNql",
    "97.761C230",
    "offset",
    "kfONx",
    "ion-menu\x22>",
    "3082\x205.622",
    "UZsaB",
    "\x20\x20\x20<path\x20f",
    "\x20data-bs-a",
    "C351.514\x203",
    "BIhoV",
    "ooltip\x22\x20da",
    "ta-bs-titl",
    "ss=\x22line-c",
    "label=\x22Khô",
    "487C26.443",
    "warn",
    "ctURL",
    "aAEwi",
    "BIETC",
    "toggle-tab",
    "nt\x20span",
    "EnDXU",
    "ass=\x22p_b-r",
    "\x20</svg>\x0a\x20\x20",
    "xSPzQ",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "min",
    "buDkW",
    "has",
    "8\x20166.369\x20",
    "9\x2041.9187\x20",
    "mDtPQ",
    "cQrey",
    "s=\x22cs-list",
    "cfyva",
    "\x20</span>\x0a\x20",
    "ngle-left\x22",
    "ll=\x22none\x22\x20",
    "eYtuw",
    "mGjeA",
    "38.5782\x2049",
    "012\x202.7311",
    "pom",
    "data-bs-cu",
    "t\x20tốc\x20độ:",
    "8.25544\x202.",
    "YcluG",
    "\x22lazy\x22\x20src",
    "22.73C114\x20",
    "QToYy",
    "ackground-",
    "push",
    "family-sub",
    "579\x20159.15",
    "r\x22\x20data-va",
    "isHost",
    "49\x2034.7446",
    "eBtpp",
    "tle",
    "ze-sub\x20sub",
    "z\x22></path>",
    ">\x0a\x20\x20\x20\x20\x20\x20<d",
    "current\x20li",
    ".sub-toggl",
    "getConfig",
    "fromCharCo",
    "ne\x22\x20xmlns=",
    "ty-font-su",
    "kMnZw",
    "d-form",
    "uoIMn",
    "olid\x20fa-an",
    "OtcsS",
    "x=\x220\x200\x2040\x20",
    "OjNni",
    "idle",
    "7|0|5|6|4|",
    "menu\x20.item",
    "pacity\x22>\x0a\x20",
    ".3742\x20152.",
    "\x22item\x20item",
    "\x20\x20\x20\x20\x20\x20Tuỳ\x20",
    "lide",
    "bWCxq",
    "rFrmu",
    "SryJH",
    "7.342\x204.80",
    "294.217\x2015",
    ".8432\x2038.7",
    "XvBzT",
    "6495\x2018\x2023",
    "reverse",
    "\x20\x20Phụ\x20đề\x20c",
    "UvlWN",
    "vJISc",
    "gữ</a>\x0a\x20\x20\x20",
    "144p",
    "ata=\x22off\x22\x20",
    ".452\x20373.1",
    "\x22small\x22>Tả",
    "ss=\x22fa-sol",
    "ekMRH",
    "HdHvQ",
    "#fff",
    "\x20111C82.34",
    "-sub\x20sub-s",
    "oEhLj",
    "ng\x20viền\x22\x20d",
    "WpNVF",
    "lass=\x22fa-s",
    "ass=\x22w2g-d",
    "555.832v16",
    "\x20110.5\x2053.",
    "e\x20sub-back",
    "\x2042.0784\x201",
    "\x2036.4016\x202",
    "mLHtI",
    "viewBox=\x220",
    "37.3683\x2034",
    "30.8995\x2024",
    "ass=\x22s-tit",
    ".801\x20175.9",
    "=\x22M33.3337",
    "fZosb",
    "kyWvv",
    "join",
    ".75\x2035.5H3",
    "center\x20",
    "lass=\x22s-ti",
    "ss=\x22sub-sl",
    "sub-border",
    "\x20item-dub\x20",
    "\x20sub-size-",
    "25C30.5815",
    "le\x20file:",
    ".cs-item",
    "369C254.21",
    "center\x22>\x0a\x20",
    "C6.76963\x206",
    "ive\x22\x20data=",
    "jcMxG",
    "CIGnI",
    "back-rate\x22",
    "</a>",
    ".165\x20244.7",
    "Impact",
    "BZeZv",
    ".jw-time-c",
    "qpZqi",
    "el=\x22",
    "next-auto",
    "vjxQC",
    "ta-bs-plac",
    "7L53\x2023C53",
    "gMfMf",
    "7.4486\x2075.",
    "type=\x22back",
    "hIqgR",
    ".50329\x2014.",
    "formName\x22\x20",
    "</span>",
    "JQICP",
    "upJay",
    "14.1667C4.",
    ".4601\x2079\x202",
    "\x2030.25\x2011.",
    "AdOOv",
    "1.8817\x2017.",
    "hát\x22>\x0a\x20\x20\x20\x20",
    "\x20class=\x22it",
    "312\x20145.32",
    "ty-font\x20su",
    "ikhuz",
    "ss=\x22sub-co",
    ";\x22></div>\x0a",
    "removeItem",
    "YSeRN",
    "lass=\x22csi-",
    ".899\x206.666",
    "kkvwF",
    "\x20stroke=\x22c",
    "52\x20294.517",
    "297.666\x2057",
    "\x2075C16.387",
    "ộ\x20trong\x20So",
    "-label",
    "883\x20131.56",
    "66V66V66C2",
    "853\x2081.666",
    "5\x20134.828\x20",
    "an>\x0a\x20\x20\x20\x20\x20\x20",
    "START",
    "3\x20321.354\x20",
    "ZynVP",
    "otIGf",
    "3\x2055C21.34",
    "00:00</div",
    "gEOdt",
    "\x20105.5L84.",
    "yqluW",
    "\x22\x20fill=\x22cu",
    "\x2036.4016\x206",
    "74\x2022.73C7",
    "sLboE",
    "9.303\x2083.3",
    ".106\x20112.6",
    "r\x22\x20data=\x221",
    "class=\x22lin",
    "</div>\x0a\x0a\x0a\x20",
    "cWRwu",
    "-none\x22\x20dat",
    "5.952\x20263.",
    "aqeqp",
    "i\x20lên</spa",
    "XFXbO",
    "\x2014.25\x2030.",
    "mxYgh",
    "589C231.40",
    "5\x2021.75H25",
    "class=\x22ski",
    ".104\x20325.9",
    ":\x20none;\x22>\x0a",
    "qmgiC",
    "\x20data=\x22",
    "\x20\x20\x20\x20</a>\x0a\x20",
    "insecure",
    "01\x2027.4601",
    ".6579\x2018\x204",
    "Hvaxz",
    "m\x20.sub-men",
    "-font",
    "5L79.73\x2075",
    "v\x20class=\x22c",
    "\x22outside\x22\x20",
    ".6667\x2024.7",
    "FOQvh",
    "013\x209.2\x206.",
    "#000000",
    "lNDyR",
    "ggcyK",
    "fQWNO",
    "\x20\x20\x20\x20\x20",
    "an\x20c=\x22\x22></",
    "acity-back",
    "find",
    "linecap=\x22r",
    "C37.5\x2033.9",
    "tIdMI",
    "\x20ngữ</span",
    "-item\x22>\x0a\x20\x20",
    "3\x20-1.13321",
    "1.196\x2011\x202",
    "ụ\x20đề</span",
    "iv>\x0a\x20\x20\x20\x20\x20\x20",
    "usXKD",
    "\x201\x200\x200\x200\x201",
    "5C37.5\x2027.",
    "30.25C30.5",
    "s-item",
    "mfjon",
    "\x22\x20data-men",
    "rate\x22>\x0a\x20\x20\x20",
    "span\x20class",
    "tKlQt",
    "84\x205.89509",
    "190.579\x2027",
    "ub\x20sub-col",
    "ne;\x22>\x0a\x20\x20\x20\x20",
    "ata-bs-pla",
    "ality",
    "n\x20item-sub",
    ".016\x20135.9",
    "length",
    "gửi\x20messag",
    "#0d5555",
    "109.27\x2072Z",
    "input\x20clas",
    "JGwwX",
    "\x20.cs-item",
    "ft\x22></i>\x0a\x20",
    "cs-list\x22>\x0a",
    "KIjAp",
    ".633\x2045.00",
    "d-none",
    "title\x20sub-",
    "rhPIr",
    "605\x20178.77",
    "ata-type=\x22",
    "995\x20288.17",
    "onerror",
    "isLive",
    "und\x22\x20class",
    "rLYJX",
    "back-level",
    "CVlXS",
    "abs",
    "Courier",
    "\x208.1317\x2034",
    "\x202.5\x2026.75",
    "a\x20class=\x22c",
    "sVYNO",
    "efPjy",
    "\x2018.501C33",
    ">Auto\x20(108",
    ">\x0a\x0a\x20\x20\x20\x20\x20\x20\x20",
    "lrgGt",
    "#toggle-ep",
    "\x20class=\x22sk",
    "gữ\x20/\x20Màu\x20c",
    "r\x22\x20style=\x22",
    "duration",
    "7903\x2026.76",
    "ub\x20sub-fon",
    "jZgOz",
    "\x204.30161\x203",
    "120",
    "102.658\x2075",
    "v7c0\x20.41.4",
    "-9.2\x206.131",
    ".358V187.7",
    "line-cente",
    "jFBjS",
    "\x20216.889\x206",
    "122.388\x2011",
    "vzCsU",
    "svg\x22>\x0a\x20\x20\x20\x20",
    "CAInC",
    "36612C5.13",
    "\x20xmlns=\x22ht",
    ".3337\x2025.8",
    "-playback-",
    "d\x20fa-angle",
    "6\x20283\x2085.0",
    "\x2080\x20110L10",
    "Auto\x20(",
    "w-check\x22><",
    "3995\x2011.88",
    "#sub-dual",
    "\x20\x20\x20\x20\x20\x20\x20<a\x20",
    "\x20sub-borde",
    "GlyEv",
    "e-sub\x22]\x20.c",
    "volume",
    "amily-sub\x22",
    "paused",
    "VWFrt",
    "iv\x20id=\x22sub",
    "xt\x20jw-rese",
    "mxFeO",
    "1049\x207.301",
    "#sub-opaci",
    ".288\x20101.4",
    "qcdrl",
    "dropdown-t",
    "s=\x22v-title",
    ".jw-audio-",
    "ll-rule=\x22e",
    "UIlWd",
    "gJtio",
    "error",
    "span>",
    "2.6317\x2033.",
    "AntVr",
    "a-bs-place",
    "DRRrm",
    "inc-icon\x22>",
    "vg>\x0a\x20\x20\x20\x20\x20\x20",
    "ight=\x22128\x22",
    "undColor\x22]",
    "ss=\x22pop-ce",
    "p-4\x22>\x0a\x20\x20\x20\x20",
    "em[data=\x22",
    "3\x2011.2197\x20",
    "C22.933\x2062",
    "form-contr",
    "dgeStyle\x22\x20",
    "onunload",
    "GQhZF",
    "ent-slide)",
    "SGEPI",
    "type=\x22colo",
    "oxCHf",
    "\x2040.8333\x204",
    "load",
    "null",
    "45-1-1-1s-",
    "n>\x0a\x20\x20\x20\x20\x20\x20\x20",
    "8.27\x2018Z\x22\x20",
    "27\x2055C111.",
    "GpGjO",
    "text\x22>1x</",
    "le=\x22toolti",
    "pfdas",
    "-speed\x22\x20cl",
    "Than\x20Chì",
    "uQnYP",
    "h=\x222.5\x22\x20st",
    "ment=\x22top\x22",
    "86.626\x20111",
    "76\x2035.2488",
    "svg>\x0a\x20\x20\x20\x20\x20",
    ";\x22>\x0a\x20\x20\x20\x20\x20\x20",
    "1C50.6121\x20",
    "\x20\x20<span>",
    "cpQgF",
    "ity-backgr",
    "-rate\x22>\x0a\x20\x20",
    "sub",
    ".q-play",
    "mxUoV",
    "pa\x20class=\x22",
    "tKgcA",
    "tZbMc",
    "dWxpi",
    "wn-item\x20ac",
    "SNjsj",
    "mUfXS",
    "u-list-ite",
    "rentColor\x22",
    "eFUow",
    "1.524\x2098.1",
    "e=\x22fontOpa",
    "playlistIt",
    "zm0\x2018c-4.",
    "aEqAe",
    "BvCpN",
    "id=\x22skip-i",
    "uration",
    "<li>\x0a\x20\x20\x20\x20\x20",
    "\x20ra\x20khi\x20tả",
    "FMCpz",
    "introEnd",
    "#volume",
    "455\x2097.841",
    "id\x20fa-angl",
    "jw-text-el",
    "or\x22\x20stroke",
    "2.7055C22.",
    "ass=\x22line-",
    "wrvff",
    "75H25.25C2",
    "e=\x22fontSiz",
    "paeSl",
    "NvXoB",
    "pygvE",
    "\x20stroke-li",
    "gClientRec",
    "id\x20fa-chec",
    "9\x2053.9997\x20",
    ".sub-sbs",
    "2697\x2075L19",
    "lass=\x22sub-",
    ".jw-qualit",
    "log",
    "outroEnd",
    "TZLhK",
    "GYdXK",
    "OMsSZ",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<",
    "15.093C228",
    "\x2034.8683\x208",
    "und",
    "mid",
    "xzCEb",
    "indexOf",
    "3321\x20173.8",
    "gVqIT",
    "5554\x2012.70",
    "8334\x2066.73",
    "\x22></i>\x0a\x20\x20\x20",
    "22.4528\x2032",
    "levels",
    "\x2035.208\x2020",
    "ta-type=\x22b",
    "WLrob",
    "d\x22\x20class=\x22",
    "LyArC",
    "772ZM263.8",
    "9\x20304.976\x20",
    "span",
    "94.517\x20-4.",
    "ng\x20ngữ\x22>\x0a\x20",
    "ZFgkD",
    "e\x20level-2\x20",
    "MXFTE",
    "346.163\x2030",
    "CcKZy",
    "hữ\x20Song\x20ng",
    "OUfJM",
    "s=\x22jw-titl",
    "chữ</div>\x0a",
    "5.45\x201\x201\x201",
    "29\x2011.5511",
    "iCXBI",
    "\x20276.358V1",
    "th:\x20100%;\x22",
    "104.54\x2050C",
    "150%",
    "Opacity",
    "V276.358C2",
    ".118\x2014\x2079",
    "05.487C369",
    "div>",
    "xfMRX",
    "lbar",
    "wn-title\x20p",
    "\x20\x20\x20\x20\x20\x20</di",
    "down-item",
    "jsaqF",
    "21\x20219.975",
    "01L109\x2084.",
    "v\x20class=\x22j",
    "YsQke",
    "cùng\x20lúc\x22>",
    "klRxU",
    "FRMuJ",
    ";\x20font-siz",
    "fa-angle-l",
    "276\x20328.16",
    "kvnej",
    ".jw-playba",
    "\x22m4.028\x2020",
    "-dark\x22\x20pla",
    "nooqz",
    "s=\x22csi-tit",
    "LWcEU",
    "action",
    "Quality",
    "609\x2022.346",
    "n\x22\x20data-bs",
    "8-.01-.8.4",
    "Your\x20brows",
    "jvTKv",
    "544\x205.5\x206.",
    "\x2030.5\x2033.7",
    "3ZM31.5\x2023",
    "iKonn",
    "9.108C31.1",
    "<a\x20id=\x22sub",
    "329.354\x2012",
    "4.80589L21",
    "QxwBN",
    "y-sub\x22\x20dat",
    "sub\x20sub-fo",
    "uzhcw",
    "jw-audio-b",
    "\x2018C76.387",
    "5|2",
    "Ietwl",
    "font-famil",
    "width",
    "/div>\x0a\x20\x20\x20\x20",
    "play",
    "a\x20id=\x22togg",
    "\x202\x20phụ\x20đề\x20",
    "ykcJk",
    "zcHbe",
    ">\x0a\x20\x20\x20\x20\x20\x20<a",
    "8.27\x2018C45",
    "or\x20sub-opa",
    "itle\x22>0.5x",
    "6.75V9.25C",
    "\x20\x20\x20\x20\x20\x20</sp",
    ".item-ep",
    ".603\x2063.54",
    "\x22player-dm",
    "el-2\x20sub-f",
    "Lỗi\x20khi\x20tả",
    "3879\x2043.53",
    "801\x20187.77",
    "aria-expan",
    "ground-sub",
    "36.6477L23",
    "\x20jw-reset\x20",
    "BlXRn",
    "HVqyx",
    "target",
    "g\x22>\x0a\x20\x20\x20\x20\x20\x20",
    "Cqxlg",
    "54V149.325",
    "00.773C152",
    "style=\x22col",
    "</div>\x0a\x20\x20\x20",
    "7.772C190.",
    "9\x2018\x2074\x2020",
    "386.919C29",
    "-Picture",
    "26.5V20.5C",
    "8.27C74\x2050",
    "class=\x22s-t",
    "sub\x22\x20id=\x22t",
    "1\x20.45-1\x201v",
    ".63\x20401.88",
    "#formFile",
    "9997C50.88",
    "a1\x201\x200\x200\x200",
    "ock\x20w-100\x20",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    "ty-font\x20.c",
    "90.579\x20159",
    "nerror=\x22th",
    "37.1339\x2033",
    "\x20\x20\x20\x20\x20<div\x20",
    "s=\x22upload-",
    "s=\x22inc-ico",
    "FgUWr",
    "6\x20155.794\x20",
    "haydU",
    "#sub-on",
    "0-prev\x22\x20da",
    "AEpvZ",
    "360p",
    ".0833C36.7",
    "vrbNH",
    "QELVV",
    "ke=\x22curren",
    "urrent\x20spa",
    "data-type]",
    "a-solid\x20fa",
    "NQpCU",
    "35.675\x20328",
    "3\x2014.5\x2011\x20",
    "None",
    "torAll",
    "HvNNk",
    "prKrj",
    "2\x20absolute",
    "p://www.w3",
    "\x2028.6984\x202",
    "n=\x22round\x22>",
    "30.577\x20166",
    "www.w3.org",
    "3.9185\x202.5",
    "8255Z\x22\x20str",
    "-4\x22>\x0a\x20\x20\x20\x20\x20",
    "currentQua",
    "233.222\x2036",
    "61\x2037.5\x208.",
    "LqmOP",
    "\x22btn\x20btn-s",
    "d=\x22toggle-",
    ".jwplayer",
    "a-value=\x22",
    "772V276.35",
    "s=\x22item-bt",
    "er\x22>\x0a\x20\x20\x20\x20\x20",
    "YrSfL",
    "\x20400.343\x202",
    "150.883\x2014",
    "h\x20d=\x22M40.8",
    ".3879\x2084.4",
    "PLAYER_TIM",
    "185\x2037.368",
    "ữ\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    "\x2023.9032\x201",
    "levelsChan",
    "preventDef",
    "\x20\x20\x20\x20Phụ\x20đề",
    "l\x20is-secon",
    "0.118\x2014\x202",
    "\x2017.6339\x201",
    "\x208.84676\x202",
    "le\x22>Font\x20c",
    "ong\x0a\x20\x20\x20\x20\x20\x20",
    "Tahoma",
    "\x20<g\x20fill=\x22",
    "SsPUt",
    "882\x2055\x20114",
    "9\x20200.651C",
    "\x20\x20\x20\x20</svg>",
    "53.9997\x2010",
    "Vàng\x20Hổ\x20Ph",
    "balzT",
    "s=\x22dropdow",
    ".content-s",
    "lid\x20fa-ang",
    "\x20\x20<ul\x20clas",
    "nt-family",
    ".118\x2074\x2022",
    "fadeOut",
    "e\x22>1x</div",
    "n\x22\x20role=\x22t",
    "OVqEz",
    "215.835\x2010",
    "vast",
    "uality",
    "d\x20fa-check",
    "down-menu\x20",
    "\x22on\x22\x20class",
    "setup",
    "t,.srt\x22>\x0a\x20",
    "0\x200\x2024\x2024\x22",
    "\x2036.75\x2088.",
    "atus\x22\x20styl",
    "quality",
    "8\x20297.761C",
    "23\x205.62271",
    "434.403\x2013",
    "lay:\x20none;",
    "\x20xx\x20giây",
    "level",
    "0.8891\x2024.",
    "on\x22>\x0a\x20\x20\x20\x20\x20",
    "v>\x0a\x0a\x20\x20\x20\x20\x20\x20",
    "le-color-s",
    "HMtvF",
    "NmTcz",
    "u\x22\x20data=\x22n",
    "lns=\x22http:",
    "s-toggle=\x22",
    ".6317\x2034.8",
    "ption-menu",
    ":\x20flex;\x22>\x0a",
    "addClass",
    "48\x2056.6821",
    "btn-play\x20d",
    "181\x2015.387",
    "3.10054\x2035",
    "kGisQ",
    "-class=\x22cu",
    "AivBk",
    "\x20\x20\x20\x20\x20\x20\x20\x20<p",
    "bFKxK",
    "data-value",
    "\x208.16675\x208",
    "\x20159.154\x202",
    "NEVSo",
    "75.5\x2017.18",
    "or-sub\x20sub",
    "RLoNN",
    "mNwtL",
    "7.8683\x2022.",
    "mall\x22>Song",
    "ub-backgro",
    "\x22\x20style=\x22b",
    "ss=\x22inc-ic",
    "s=\x22custom-",
    "NRIzk",
    "ata=\x22",
    "acement=\x22t",
    "ass=\x22fa-so",
    "ontainer",
    "\x2079.73\x20111",
    "flEin",
    "DKxHi",
    "</a>\x0a\x20\x20\x20\x20<",
    "42\x20152.327",
    "953C271.01",
    "PSlwH",
    "ist\x20jw-pla",
    "PFzIT",
    "71\x20221.46\x20",
    "1.46\x2048.89",
    ".0256\x20371.",
    "ize\x22>\x0a\x20\x20\x20\x20",
    "OQzIO",
    "pFTOZ",
    "2.1161C17.",
    ".48-10-10-",
    "files",
    "getCurrent",
    "ass=\x22inc-i",
    "troke-line",
    "-color-sub",
    "JiDnt",
    "<a\x20class=\x22",
    "top\x22\x20data-",
    "secondary\x22",
    "10.1968\x2015",
    "27.4601\x2053",
    "ck\x22></i>\x0a\x20",
    "0.5748\x20178",
    "y-backgrou",
    "e=\x22color\x22]",
    "ephNo",
    "3C104.898\x20",
    "52\x2011.6276",
    "iiEls",
    "40\x22\x20viewBo",
    "ight=\x22512\x22",
    "<br><span\x20",
    "ụ\x20đề\x20chính",
    "1391\x208.5\x201",
    "cQQiX",
    "5\x2035.7918V",
    "ntColor\x22\x20s",
    "2532\x2025.25",
    "110\x2053.999",
    "40\x22\x20fill=\x22",
    "skip-10-ne",
    "7.583\x20371.",
    "217\x20187.77",
    "vQCyM",
    "e\x22>Màu\x20nền",
    "Lucida\x20Con",
    "Phụ\x20đề\x20chí",
    "10s\x20trước\x22",
    "\x2089.8333\x208",
    "cxfLg",
    "hmtkv",
    "srKUN",
    "row-up-fro",
    "9\x20244.711\x20",
    "419.662C30",
    "NwEIY",
    "5396C16.38",
    "\x2025.3421\x205",
    "\x20284.903\x203",
    "1.524\x20297.",
    "HTlSN",
    "7.1667C46.",
    ".5L21\x2062.5",
    "CeGxP",
    "eTAFu",
    "1\x200\x200\x200\x20.5",
    "lue=\x22",
    "jQVHX",
    "sub\x20sub-si",
    "=\x22display:",
    "BkUrr",
    "#formName",
    "nEmWa",
    "class=\x22cs-",
    "sub-color",
    "1.5303C11.",
    "3H89.8333V",
    "ontFamily-",
    "CONTINUE_W",
    "er\x20small\x22>",
    "\x20\x20\x20\x20<svg\x20h",
    "UIIjU",
    "48.27C114\x20",
    "\x20data-titl",
    "8\x20220.995\x20",
    "Dwxgu",
    "#37454e",
    "\x22M20\x2037.16",
    "hMQDu",
    "opacity-fo",
    "2\x20230.577\x20",
    "EcUxa",
    "le=\x22Màu\x20nề",
    "\x20line-cent",
    "itle=\x22Cỡ\x20c",
    ".sub-color",
    "t\x20chữ\x0a\x20\x20\x20\x20",
    "=\x22item\x22>Bậ",
    "23.6495\x2031",
    "r-font",
    "ta-label=\x22",
    "\x2090.3069\x201",
    "e=\x22dropdow",
    "GCubn",
    "FoVIN",
    "74\x20328.162",
    "text\x20jw-re",
    "bs-title=\x22",
    ".dropdown-",
    "/i>\x0a\x20\x20\x20\x20\x20\x20",
    "12\x2053.9997",
    "removeAttr",
    "gle=\x22toolt",
    "m-tooltip\x22",
    "15.3875C19",
    "LqaKL",
    "\x20viewBox=\x22",
    "font-sub\x20s",
    "getQuality",
    "10\x2010-4.48",
    "\x20<svg\x20fill",
    "htKfi",
    "3505\x2031.13",
    ".jw-title-",
    "toggleClas",
    "ass=\x22custo",
    "52\x200-10\x204.",
    "tAvVN",
    "PBBet",
    "ded=\x22false",
    "list\x20jw-pl",
    "<path\x20d=\x22M",
    "uHaFe",
    "onload",
    "SKIP_INTRO",
    "BHruP",
    "-menu\x22>\x0a\x20\x20",
    "\x205\x209.25V26",
    "ass=\x22v-tit",
    "rợ\x20chế\x20độ\x20",
    "oggle=\x22too",
    "3C212.56\x204",
    "25\x22>\x0a\x20\x20\x20\x20\x20",
    "-icon\x20\x20ico",
    ".176\x20242.3",
    "70%",
    "UTWmm",
    "Xanh\x20Hải\x20Q",
    "tyle=\x22disp",
    "b\x22\x20class=\x22",
    "heck\x22></i>",
    "JjrTY",
    "1-.45\x201-1v",
    "E_UPDATE",
    "pzcAw",
    "ntrol\x20form",
    "r\x22>\x0a\x20\x20\x20\x20\x20\x20",
    "Wukss",
    "8333C38.57",
    "C30.8995\x201",
    "t\x20sub-opac",
    "662C91.194",
    "a-type=\x22fo",
    "family\x20.cs",
    "4601\x2084.46",
    "091\x20101.29",
    "73\x2018C16.1",
    "0P)</span>",
    "\x2085.205\x2015",
    "GMrtj",
    "6\x2031.8971\x20",
    "csi-title\x22",
    "keZUh",
    "readAsText",
    "wGqmp",
    "r\x20gap-3\x22>\x0a",
    "QRVwL",
    "#toggle-op",
    "level-2",
    "qTYMM",
    "data",
    "nail\x22>\x0a\x20\x20\x20",
    "b-opacity-",
    "Bỏ\x20qua",
    "loIQV",
    "-caption\x22\x20",
    "ass=\x22cs-li",
    "50%",
    "216.947\x2041",
    "OmVyT",
    "swDVj",
    "=\x22custom-t",
    "ne\x22>\x0a\x20\x20\x20\x20\x20",
    "ovwac",
    "ckground-c",
    "14\x2050L114\x20",
    "ehDSu",
    "\x20</div>\x0a\x20\x20",
    "\x2023.8839C1",
    "i></div>\x0a\x20",
    "or:\x20",
    "IHYnu",
    "BwriO",
    "rebXM",
    "amily\x20sub-",
    "1\x2078C23.46",
    "u-title",
    "SDLtk",
    "angle-left",
    "9\x2075\x2014\x2077",
    "-1\x20mb-2\x22>\x0a",
    "3.9167\x2088.",
    "left\x22></i>",
    "e\x22>0.25x</",
    "v\x20class=\x22d",
    "DqLNn",
    "qua\x20giới\x20t",
    "21.6552\x2011",
    "max",
    "ztVgL",
    "Đổ\x20bóng\x22\x20d",
    "PJhQi",
    ".5\x2023.3315",
    "inline\x20jw-",
    "601\x2043.539",
    "ass=\x22sub-u",
    ".0033\x2021.8",
    "tle\x22>",
    "AXGnc",
    "237.342\x2026",
    "5\x20260.781\x20",
    "78L120.467",
    "336.452\x2013",
    "\x22csi-color",
    "8C219.975\x20",
    "m\x22>Tắt</a>",
    "\x20\x20\x20<i\x20clas",
    "ate\x22>\x0a\x20\x20\x20\x20",
    "-title\x22>Độ",
    "818\x2016.387",
    "y-menu",
    "zCZyK",
    "\x20\x20\x20\x20\x20<path",
    "LrKps",
    "aBWsH",
    "=\x22Hiển\x20thị",
    "VpDgp",
    "\x2075\x2079.73L",
    "5\x2017.4518\x20",
    "8\x22\x20fill=\x22n",
    "7\x20107.882\x20",
    "ideo_pop\x22>",
    "h\x20d=\x22M18.7",
    "nc-icon\x20ic",
    "\x20.sub-menu",
    "505085GBjIcd",
    "1|3|2",
    "328.162C14",
    "SYNC_PLAYB",
    "lass=\x22cust",
    "e-linejoin",
    "iewBox=\x220\x20",
    "59-8\x208-8\x208",
    "eQmaK",
    "1V15C24.50",
    "lpElE",
    "iAzwq",
    ".1183\x2031.1",
    ".sub-back",
    "c\x20tiếp</sp",
    "\x20\x20\x20\x20\x20\x20\x20<in",
    "3\x20281.452\x20",
    "zDTWS",
    "9835\x2029.40",
    "\x20\x20\x20\x20\x20\x20\x20<g\x20",
    "Nhập\x20tên\x22>",
    "YaTMj",
    "\x20state:",
    "6\x2014\x2049.26",
    "\x20class=\x22bu",
    "ltip\x22]",
    "34.3038\x2028",
    "\x2012.6685\x203",
    "a-label=\x22B",
    ">Chọn\x20xong",
    "ACK",
    "ound\x20sub-f",
    "v>\x0a\x20\x20\x20\x20\x20\x20\x20",
    "color\x22\x20sty",
    "substr",
    "zfbDC",
    "active",
    "sCrrN",
    "iv>",
    ".36612\x2027.",
    "\x20<a\x20id=\x22cl",
    "Phụ\x20đề</sp",
    "video",
    "next",
    "si-current",
    "IHRtK",
    "e-center\x20",
    ".803\x20180.8",
    "ly-sub",
    "khXOg",
    "\x20<span\x20cla",
    "Trình\x20duyệ",
    "layer-dm\x20j",
    "ukQQT",
    "C16.118\x2073",
    "jSobF",
    "sOLFP",
    "0.882\x2018\x204",
    "508C351.77",
    "tom-class=",
    "0\x200\x20128\x2012",
    "stom-toolt",
    "\x22\x20data-lev",
    "data-type=",
    "XmLhD",
    "-left\x22></i",
    "lRWQT",
    "jw-icon-in",
    "ng\x20ngữ\x20/\x20Đ",
    "\x22\x20onload=\x22",
    "\x22\x20class=\x22c",
    "5\x2085.75\x2077",
    "365\x20334.65",
    "\x20<span>Trự",
    "ub\x22\x20data-t",
    "25\x208C5.918",
    "zDFUk",
    "ytOWs",
    "gXlDG",
    "fOWZi",
    "ujsUL",
    "l-2\x20sub-si",
    "-8a1\x201\x200\x200",
    "-slide\x20lev",
    "ỡ\x20chữ\x0a\x20\x20\x20\x20",
    "-ep",
    "Không\x20thể\x20",
    "7.118\x2051.8",
    "eyGWb",
    "4.6132\x2024.",
    "then",
    "AwTEg",
    "0\x2010\x2010-4.",
    "size\x22\x20clas",
    "lity\x22\x20clas",
    "zjCej",
    "kJoyN",
    "79\x2044.5396",
    "NIWoa",
    "3.59\x208-8\x208",
    "op\x22>\x0a\x20\x20\x20\x20\x20",
    "b-border-f",
    "=\x22#\x22\x20style",
    "4.80589C16",
    "\x203.59\x208\x208-",
    "288.178\x2025",
    "-list\x20jw-s",
    "nKVoz",
    "33V85.75C9",
    "352.813\x2010",
    "n\x20jw-icon-",
    "\x20\x20<span>Tả",
    "FcVDq",
    "GlOOh",
    "jYCCH",
    "uniform",
    "zVFOd",
    "></i>\x0a\x20\x20\x20\x20",
    "IkFxh",
    "\x20172.746V3",
    ".5C14\x2053.1",
    "571\x2021.287",
    "OeaOy",
    "html",
    "PLAYBACK_S",
    "timeFormat",
    "IKbJg",
    "poster",
    "-color:\x20",
    "ght=\x2298\x22\x20v",
    "0|4|3|6|1|",
    "5\x2021.6335\x20",
    "em\x22\x20href=\x22",
    "yer-dm\x20dm-",
    "\x20\x20\x20\x20\x20\x20\x20<pa",
    "SEEK_TIME",
    "reEnabled",
    "t\x20PiP:",
    "QTIQZ",
    "player",
    "#toggle-co",
    "BSlRF",
    "QMGlF",
    "BVuVG",
    "7\x2013.6863\x20",
    "Georgia",
    "ound-color",
    "pXMFc",
    "uHjgh",
    "Quảng\x20cáo\x20",
    "ZBiaA",
    "10BaeyXe",
    "=\x22fa-solid",
    "calStorage",
    "awnMU",
    "y-menu\x20.cs",
    "\x22\x20style=\x22w",
    "iền</div>\x0a",
    "589L178.77",
    ".02148\x2026.",
    "remove",
    ".5H6.25C5.",
    "WsVtx",
    "17.0215\x2019",
    "8\x20104.807C",
    "search",
    "n-quality\x22",
    "height",
    ".3129C243.",
    "item[data=",
    "\x2014.25\x2011.",
    "00/svg\x22>\x0a\x20",
    "ent\x20span",
    "76\x20110.5\x204",
    "id=\x22toggle",
    "-width=\x222.",
    "mily:\x20",
    "QxSdn",
    "vVGCT",
    "=\x22none\x22\x20he",
    "ary\x20btn-up",
    "#video_mas",
    "tion-switc",
    "21\x20111\x2084.",
    "ound\x22\x20stro",
    "ath\x20d=\x22M53",
    "98\x20328.176",
    "43\x2022.0033",
    "csi-curren",
    "-font\x22>Khô",
    "1\x200\x200\x200\x201.",
    "3.255\x20223.",
    "city-sub\x22>",
    "91\x2011.7533",
    "=\x22item-btn",
    "tjAzX",
    "isplay=\x27no",
    "48-10\x2010s4",
    "\x20sub-font-",
    "data-bs-ti",
    "ne\x20jw-text",
    "ed\x22\x20data-b",
    "class=\x22for",
    "4601\x20108.1",
    "-slide",
    "MgSkx",
    "toggle-opa",
    "si-title\x22>",
    "een",
    "314\x20318.85",
    "WhvkW",
    "6.306\x2083.3",
    "adPlay",
    "suyqA",
    ".54L23.460",
    "tkJbD",
    ".srt)\x20</di",
    "4\x20213.779\x20",
    "685\x2031.368",
    "t\x22></i>\x0a\x20\x20",
    "solid\x20fa-c",
    "nGFhD",
    "5c.27-.2.2",
    "RanAN",
    "jlTtr",
    "city-font-",
    "opacity-ba",
    "iv-volume\x20",
    "100",
    "SlkgS",
    "\x20\x20\x20</a></d",
    "neYkS",
    "83\x2031.1339",
    "parse",
    "IZRrj",
    "ckground-s",
    "roke-linec",
    "cvVrz",
    "-current\x20l",
    "\x201\x201\x201z\x22\x20f",
    "lity",
    "addEventLi",
    "utton\x22\x20dat",
    "nc\x20playbac",
    "style=\x22bac",
    "150",
    ".6667\x2037.3",
    "1848\x2033\x203.",
    "fa-solid\x20f",
    "\x20\x20\x20\x20\x20\x20\x20\x20So",
    "-container",
    "9\x2076.5649C",
    "ub-dual\x22\x20d",
    "6339\x208.366",
    "99\x2027.365\x20",
    "UjWFF",
    "MfbSn",
    "đề\x20chính\x20/",
    "filter",
    ".sub-size-",
    "oke-lineca",
    "t-family-s",
    "rder-font-",
    "29\x2021.8609",
    "s=\x22sub-sli",
    "file",
    "YmjZq",
    "pnKPj",
    "dColor\x22>\x0a\x20",
    "#rp-player",
    "8-10-10-10",
    "pRfdH",
    "QWlbD",
    "getBoundin",
    "none\x22\x20xmln",
    "vmoSJ",
    ".877\x20200.6",
    "de\x20level-1",
    "\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20",
    "tle\x20w-100\x22",
    "ready",
    "MzcyU",
    "1\x2019.0858\x20",
    "4.9167\x2061.",
    "#sub-size-",
    "e=\x22color-s",
    "CUKtO",
    "152.327\x2020",
    "tracks",
    "YjDtk",
    "=\x22top\x22\x20dat",
    "KsLzB",
    "-rule=\x22eve",
    ".sub-size\x20",
    "from-brack",
    "tem-min\x20d-",
    "\x2025.247\x2019",
    "4YkCspC",
    "3\x20231.403\x20",
    "-player\x22\x20d",
    "\x22color-sub",
    "9.27\x2018L79",
    "uKrjQ",
    "once",
    "reason",
    "#sub-font-",
    "\x201z\x22></pat",
    "\x20\x20\x20\x20\x20\x20\x20\x20<i",
    "#toggle-ba",
    "ll=\x22curren",
    "tColor\x22\x20d=",
    "355\x20273.84",
    "\x2011.0948\x202",
    "oUitD",
    "\x20\x20\x20\x20\x20\x20<a\x20c",
    "oBDVQ",
    "\x20phụ\x20đề</d",
    "none;\x22>\x0a\x20\x20",
    "\x2053L109\x2053",
    ".369\x20242.3",
    "8355\x208.021",
    "peed\x22\x20clas",
    "99\x2023V44.5",
    "time",
    "\x20none;\x22>\x0a\x20",
    "primary\x22>\x0a",
    "SvRZR",
    "pan>",
    "center\x20gap",
    "\x2052.6121\x201",
    "\x2075\x2077.118",
    "12.954C120",
    ">\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    "wGDZk",
    "/path>\x0a\x20\x20\x20",
    "ol-sm\x20form",
    ".9948\x2083.9",
    "232\x2021.526",
    "ckground\x20s",
    "\x20175.633\x206",
    "font-size",
    "\x20id=\x22sub-q",
    "tem",
    "1.8817\x2030.",
    "=\x22fontFami",
    "538\x2097.841",
    "olor\x22></pa",
    "IkUXL",
    ".577\x20297.7",
    "\x0a\x20\x20\x20\x20\x20\x20",
    "ill=\x22curre",
    "e=\x22backgro",
    ".54\x2048.999",
    ".48\x2010\x2010\x20",
    "rMOfu",
    "m-play\x20jw-",
    "-opacity-b",
    "21.7306\x2011",
    "mavvQ",
    "em\x22>Song\x20n",
    "73.4199C42",
    "ill=\x22none\x22",
    "-item\x20line",
    "FHUoS",
    "c-icon\x20ico",
    "JzSry",
    "\x22></path>\x0a",
    "35.953C271",
    "9L83.4601\x20",
    "\x22http://ww",
    "\x204.79243\x202",
    "\x2060.5748\x202",
    "\x20light\x20ski",
    "kết\x20thúc\x20s",
    "season_num",
    "PLjbK",
    "ckground",
    "slide\x20leve",
    "3879\x20104.5",
    "ound",
    "GCOUV",
    "82\x2089.8333",
    "Hixts",
    "amily-sub\x20",
    "removeClas",
    "rcQqz",
    "cuKQL",
    "5.2488\x2014.",
    "9C31.3683\x20",
    "NnRVN",
    "\x22csi-curre",
    "-sub\x22\x20id=\x22",
    "=\x22volume\x22\x20",
    "ement=\x22top",
    "\x20\x20\x20\x20\x20\x20\x20\x20<s",
    "73C114\x2077.",
    "cXZre",
    ".jw-speed-",
    "i\x20lên\x20phụ\x20",
    "top",
    "btn\x20btn-bl",
    "tem[data=\x22",
    "\x20<a\x20id=\x22to",
    "class=\x22iv-",
    "yRiJJ",
    ".0858\x2015.3",
    "\x20\x20\x20\x20\x20\x20<div",
    "1\x20141.916\x20",
    "urrentColo",
    "akMUi",
    "\x20\x20\x20\x20Chất\x20l",
    "ity-font\x22\x20",
    "hCcPD",
    "bszow",
    "attr",
    "\x20\x20\x20<span\x20c",
    "fullscreen",
    "GIlRi",
    ".8995\x2035.3",
    "1\x20105.68\x201",
    "\x22>Font\x20chữ",
    "ub-size\x22\x20c",
    "683\x2037.133",
    "uBKRV",
    "68.601\x2036.",
    "\x0a\x20\x20\x20\x20\x20\x20<di",
    "328.176C21",
    "601\x2053.112",
    "ayback-rat",
    "FWOei",
    "b\x22>\x0a\x20\x20\x20\x20\x20\x20",
    "pavLG",
    ".246\x20434.4",
    "Có\x20lỗi\x20xảy",
    "xLLOZ",
    "5\x22\x20stroke-",
    "yIpQO",
    "PbGMn",
    "olor:\x20",
    "4.46L44.53",
    "ta-bs-togg",
    "r-sub\x22\x20cla",
    "u\x22\x20data=\x22u",
    "aRWRf",
    "349\x2042.078",
    "y-font\x20sub",
    "kRate",
    "\x20\x20\x20<a\x20id=\x22",
    "7.342\x2026.3",
    "53\x2020.118\x20",
    "ne\x27;\x22>\x0a\x20\x20\x20",
    "css",
    "rbhoQ",
    "98\x20166.369",
    "-size-sub\x22",
    ".205\x20237.3",
    "nter\x20",
    "floor",
    "play\x22>Auto",
    "TFrQX",
    "txHJk",
    "Z\x22\x20fill=\x22c",
    "4C77.3879\x20",
    "951\x20327.85",
    "\x20class=\x22li",
    "\x20\x20\x20\x20<ul\x20cl",
    "UVuxs",
    "n-item\x22\x20hr",
    "pan",
    "GZMnT",
    "\x205.5\x2035.69",
    "ill-rule=\x22",
    "\x2058.9948\x204",
    "ictureElem",
    "KYvBE",
    "s\x20line-cen",
    "getVisualQ",
    "tyZKy",
    "3.4601\x20100",
    "json",
    "mkBFg",
    "setting\x22>\x0a",
    "\x20\x20\x20</div>\x0a",
    "inecap=\x22ro",
    "#toggle-fo",
    "rrentColor",
    "dgeStyle\x22>",
    "op\x22\x20data-b",
    "r\x22\x20stroke-",
    "ck\x20line-ce",
    "SXqfE",
    "JOXfE",
    "ata-bs-tog",
    "\x22\x20data-key",
    "title=\x22Tạm",
    "UFXIZ",
    "ontSize\x22\x20d",
    "4.291\x2033.9",
    "cnamn",
    "UJUrx",
    "=\x22csi-colo",
    "StPlE",
    "endTime",
    "SrKfr",
    "ntSize-sub",
    "WjHKq",
    "eJPXi",
    "itle\x22></sp",
    "ath\x20d=\x22M21",
    "\x22\x20data=\x22up",
    "nd-sub\x20sub",
    "le=\x22backgr",
    ".csi-curre",
    "\x20height=\x224",
    "120%",
    "#video_eps",
    "ZJFCX",
    "\x2020.5V56.5",
    "\x20\x20\x20\x20\x20</div",
    "=\x22b_func\x22>",
    "1\x2094.8342\x20",
    ".27V77C114",
    "nrWoU",
    "8212\x20308.8",
    "pload\x20d-no",
    "\x220\x200\x2040\x2041",
    "u\x22\x20data=\x22",
    "cZhnn",
    "\x22backgroun",
    ".eps-list-",
    "\x22m10\x2016c.5",
    "hính\x20/\x20Độ\x20",
    "#sub-capti",
    "5554\x2023.29",
    "848\x2035.5\x203",
    "\x20fa-check\x22",
    "50.5L23.46",
    "stom-class",
    "\x20class=\x22cs",
    "ont-sub\x20su",
    "8C263.801\x20",
    "SlmEY",
    "3Z\x22\x20fill=\x22",
    ".882a1\x201\x200",
    "KViIx",
    "78.73\x2018C7",
    "KKSdz",
    "ySJPu",
    "</a>\x0a\x20\x20\x20\x20\x20",
    "family",
    "6.118\x20110\x20",
    "AfKVF",
    "4\x2025.3421\x20",
    "XMMPa",
    "\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "bYJHz",
    "11.882\x2072\x20",
    "-dropdown",
    "data-bs-pl",
    "igHTx",
    "JLTgP",
    "hIjRE",
    "message",
    "\x22></i>",
    "ydaVb",
    "-left\x20line",
    "192144iXQjQs",
    "\x2024.25\x2017.",
    ".59835C37.",
    "\x221\x22>\x0a\x20\x20\x20\x20\x20",
    "item-ep\x20",
    "sau\x22>\x0a\x20\x20\x20\x20",
    "hide",
    "48\x2010-10-4",
    "d-sub\x20sub-",
    "SODE",
    "pacity\x22\x20da",
    "\x20158.267\x201",
    "CeKec",
    "19.9996\x2025",
    "88\x20174.073",
    "9.154\x20294.",
    "-icon-inli",
    "Tkbgo",
    "ượng\x0a\x20\x20\x20\x20\x20",
    "HAGYz",
    "\x20class=\x22s-",
    "3.6495\x2018\x20",
    ".org/2000/",
    "#EXT-X-MED",
    "CXUjm",
    "lrUXP",
    "dOzMx",
    ".858C320.0",
    "GTtyC",
    "38.7918C76",
    "LhELF",
    "\x20fill=\x22cur",
    "ggle=\x22tool",
    "45.6579\x2011",
    "g>\x0a\x20\x20\x20\x20\x20\x20\x20",
    "a-sync\x20ico",
    "a[data-typ",
    "class=\x22cus",
    "OGTIU",
    "HANhE",
    "\x20dừng\x22>\x0a\x20\x20",
    ".5588\x20174.",
    ".sub-opaci",
    "includes",
    "EjvDB",
    "8995\x2014.11",
    "Lỗi\x20khi\x20re",
    "2\x20243.281\x20",
    "qLmve",
    "978\x20401.88",
    "HD\x20720p",
    "fcFJq",
    "flex-grow-",
    "niform\x22\x20da",
    "icon\x22>\x0a\x20\x20\x20",
    "tting-menu",
    "s=\x22line-ce",
    "-sub",
    "server",
    "data-mx",
    "fgivK",
    "con\x22>\x0a\x20\x20\x20\x20",
    "0.0833\x208.1",
    "Đổ\x20bóng",
    "cửa\x20sổ\x22>\x0a\x20",
    "\x0a\x20\x20\x20\x20\x20\x20</d",
    "372\x20306.20",
    "BXyBv",
    "3.6605\x20216",
    "rack-displ",
    "jXUeK",
    "plMmv",
    "#toggle-bo",
    "=\x22128\x22\x20hei",
    "OnnjT",
    "\x2013.1633\x203",
    "4.414\x20404.",
    "615C216.88",
    "ZvPSQ",
    "24.8632\x2021",
    "olor\x22\x20styl",
    "catch",
    "4.206\x20-1.1",
    "YrqZi",
    "àu\x20chữ\x20Son",
    "94.797\x20281",
    "pan>\x0a\x20\x20\x20\x20\x20",
    "15\x2035.5\x2036",
    "\x2020.3879\x208",
    "tdEDo",
    "32\x200.81144",
    "\x20<span>",
    "4.074\x20328.",
    "e=\x22timer\x22>",
    "JjzHj",
    "xRDfH",
    "03C8.90852",
    "2\x22\x20xmlns=\x22",
    "99.316\x2069.",
    "055\x20186.32",
    "cAnOB",
    "/div>\x0a\x20\x20",
    "\x20\x20\x20\x20\x20</svg",
    "object",
    "ause\x20jw-bt",
    "TdzQk",
    "oMhoC",
    "ure",
    "22.9555\x2023",
    "BMJMY",
    "ATVLq",
    "entColor\x22>",
    ".jw-btn-pl",
    "aozuA",
    "oJerT",
    "YNZRr",
    "currentTim",
    "roke-width",
    "join=\x22roun",
    "34.54L90.9",
    "</span>\x0a\x20\x20",
    "dmzzH",
    "et\x22></i></",
    "2032\x2023.74",
    "\x2085.75V53.",
    "74\x2023L74\x204",
    "GbLIo",
    "mily\x22\x20clas",
    "urrent\x20lin",
    "lpFGn",
    "C44.9167\x207",
    "\x20\x20<span>Tậ",
    "Vzcuk",
    "QOXdA",
    "m\x20btn-prim",
    "l\x22>Phụ\x20đề\x20",
    "233.222\x2034",
    "8\x2053\x2078.73",
    "vtt_url",
    "\x2089.4001\x201",
    "\x20\x20<span>Ph",
    "59\x208-8\x208zm",
    "xjGdB",
    "ass=\x22dropd",
    "#sub-size",
    "nt-sub\x20sub",
    "\x20\x20<i\x20class",
    "ub-border-",
    "\x20\x20\x20<div\x20id",
    "27C53.9997",
    "1\x201v6c0\x20.5",
    "SbBxM",
    "lang=\x22su\x22\x20",
    "eVojY",
    "display",
    "meeFc",
    "buttons\x20w-",
    "#toggle-sp",
    "SOmNj",
    "MTkCf",
    "zgJoK",
    "cYbXf",
    "4L80\x20100.5",
    "\x20\x20\x20\x20\x20\x20\x20<i\x20",
    "25%",
    "oqJXU",
    "254992JNPSLr",
    "raised",
    "875\x2017.021",
    "trim",
    "8V38.7918V",
    "vaDQK",
    "bStwk",
    "82.3421\x2016",
    "25544\x2030.5",
    "MDNkU",
    "center\x20act",
    "C26.2453\x201",
    ".active\x20.d",
    "hviEp",
    "16pt",
    "postMessag",
    "\x2014.5L17\x201",
    "-bs-toggle",
    "\x20430\x22\x20fill",
    "2\x20344.366\x20",
    "path\x20d=\x22M4",
    "gLpFr",
    "67C78.9804",
    "-current\x20s",
    "nMoXd",
    "Màu\x20chữ</d",
    "1\x2021.7468\x20",
    "i\x20playback",
    "gle-right\x22",
    "\x20187.772C1",
    "-list-item",
    "6.66699\x2025",
    "tWFdB",
    "font\x22\x20clas",
    "buffering",
    "7\x2030.5815\x20",
    "left",
    "IhMxc",
    "263.801\x2017",
    "\x22currentCo",
    "setPlaybac",
    "\x2048.8971\x201",
    "98\x2010.6351",
    "on\x22\x20class=",
    "-sub\x20sub-b",
    "mUlMT",
    "ộ</div>\x0a\x20\x20",
    "42\x2068.4135",
    "ukrEE",
    "hụ\x20đề",
    "hVMku",
    "v\x20class=\x22l",
    "oát\x20PiP:",
    "gbWkY",
    "lưu\x20vào\x20lo",
    ".02148\x2013.",
    "\x20</path>\x0a\x20",
    "UNcec",
    "=\x22tooltip\x22",
    "n\x22>\x0a\x20\x20\x20\x20\x20\x20",
    "\x20\x20\x20<a\x20clas",
    "sMcYf",
    ".9623\x2034.3",
    "r-sub\x22\x20dat",
    "tn\x20item-pi",
    ".item-play",
    "itle=\x22Tắt\x20",
    "rbtZS",
    "13.3315\x2018",
  ];
  _0x4827 = function () {
    return _0x51c1a4;
  };
  return _0x4827();
}
let lastTimeUpdate = -0x29 * -0x39 + -0x116 + -0x80b,
  lastStorageUpdate = 0x1deb + 0x73d * -0x3 + 0x7 * -0x12c,
  lastMessageUpdate = 0xcd4 * -0x3 + -0x449 * -0x2 + 0x7 * 0x446,
  storageTimeout = null,
  lastSkipUpdate = -0x1 * 0x1cb3 + 0x665 + 0x164e;
playerInstance["on"]("time", function (_0x569b14) {
  const _0x34659e = _0x9f5b01,
    _0x4c365e = {
      sccHj: function (_0x26cf55, _0x5e78fa) {
        return _0x26cf55 / _0x5e78fa;
      },
      ykcJk: function (_0x4782ab, _0x1f8b30) {
        return _0x4782ab % _0x1f8b30;
      },
      QbEUs: function (_0x6d82c6, _0x300d1c) {
        return _0x6d82c6 + _0x300d1c;
      },
      oBDVQ: function (_0x3e1ed7, _0x59b3e0) {
        return _0x3e1ed7 < _0x59b3e0;
      },
      rSeoO: "Không thể " + "lưu vào lo" + "calStorage" + ":",
      SsPUt: function (_0x35f6a9, _0x39cee2) {
        return _0x35f6a9 - _0x39cee2;
      },
      Dfbsf: function (_0x10e65d, _0x45ed0c) {
        return _0x10e65d > _0x45ed0c;
      },
      aqmJt: function (_0x1f41a0, _0x41deb8) {
        return _0x1f41a0 - _0x41deb8;
      },
      WnvPD: function (_0xcf4315, _0x344c60) {
        return _0xcf4315(_0x344c60);
      },
      lQXck: ".jw-text-e" + "lapsed",
      mASxF: function (_0x1ad11d, _0x3b8984) {
        return _0x1ad11d(_0x3b8984);
      },
      xfMRX: function (_0x3fc205, _0x18e29e) {
        return _0x3fc205(_0x18e29e);
      },
      jQVHX: ".jw-text-d" + "uration",
      cQQiX: ".jw-text-c" + "ountdown",
      VNBji: function (_0x1865e3, _0x278525) {
        return _0x1865e3(_0x278525);
      },
      IvCeA: function (_0x38f332, _0x2124ed) {
        return _0x38f332 !== _0x2124ed;
      },
      elaZr: "undefined",
      gLpFr: function (_0x5e9346, _0x4a8bdc, _0x1aeff3) {
        return _0x5e9346(_0x4a8bdc, _0x1aeff3);
      },
      GZMnT: "PLAYER_TIM" + "E_UPDATE",
      OQfNc: "Không thể " + "gửi messag" + "e:",
      RygHI: function (_0x4acd99) {
        return _0x4acd99();
      },
    };
  var _0x40b427 = playerInstance["getPositio" + "n"](),
    _0x4736ca = playerInstance["getDuratio" + "n"](),
    _0x11bf55 = _0x4c365e["SsPUt"](_0x4736ca, _0x40b427),
    _0x54127f = Date["now"](),
    _0x241e67 =
      jwplayer["utils"] && jwplayer["utils"]["timeFormat"]
        ? jwplayer["utils"]["timeFormat"]
        : function (_0xad5bd3) {
            const _0x41528b = _0x34659e;
            _0xad5bd3 = Math["max"](
              0x1 * -0x1747 + 0x25cf * 0x1 + -0xe88,
              Math["floor"](_0xad5bd3),
            );
            var _0x2d79ad = Math["floor"](
                _0x4c365e["sccHj"](
                  _0xad5bd3,
                  0x1 * -0x245 + -0x2463 + 0x4c * 0x83,
                ),
              ),
              _0x55d611 = _0x4c365e["ykcJk"](
                _0xad5bd3,
                0x5d0 + 0x19a0 * -0x1 + 0x140c,
              );
            return _0x4c365e["QbEUs"](
              _0x4c365e["QbEUs"](
                _0x4c365e["QbEUs"](_0x2d79ad, ":"),
                _0x4c365e["oBDVQ"](_0x55d611, 0x1000 + -0x1dc3 + 0xdcd)
                  ? "0"
                  : "",
              ),
              _0x55d611,
            );
          };
  _0x4c365e["Dfbsf"](
    _0x4c365e["aqmJt"](_0x54127f, lastTimeUpdate),
    0x1550 + -0x5 * -0x48b + 0x6b * -0x67,
  ) &&
    (_0x4c365e["WnvPD"]($, _0x4c365e["lQXck"])["text"](
      _0x4c365e["mASxF"](_0x241e67, _0x40b427),
    ),
    _0x4c365e["xfMRX"]($, _0x4c365e["jQVHX"])["text"](
      _0x4c365e["WnvPD"](_0x241e67, _0x4736ca),
    ),
    _0x4c365e["WnvPD"]($, _0x4c365e["cQQiX"])["text"](
      _0x4c365e["QbEUs"]("-", _0x4c365e["VNBji"](_0x241e67, _0x11bf55)),
    ),
    (lastTimeUpdate = _0x54127f));
  _0x4c365e["IvCeA"](typeof Storage, _0x4c365e["elaZr"]) &&
    _0x4c365e["Dfbsf"](
      _0x4c365e["SsPUt"](_0x54127f, lastStorageUpdate),
      0x103d * 0x1 + -0x13 * -0x8f + -0x752,
    ) &&
    (_0x4c365e["xfMRX"](clearTimeout, storageTimeout),
    (storageTimeout = _0x4c365e["gLpFr"](
      setTimeout,
      () => {
        const _0x27c25e = _0x34659e;
        try {
          (localStorage["setItem"](resumeData, _0x40b427),
            (lastStorageUpdate = _0x54127f));
        } catch (_0x9f29f1) {
          console["warn"](_0x4c365e["rSeoO"], _0x9f29f1);
        }
      },
      -0x1e49 * 0x1 + 0x19cc + 0x4e1,
    )));
  _0x4c365e["Dfbsf"](
    _0x4c365e["SsPUt"](_0x54127f, lastSkipUpdate),
    0x2604 * -0x1 + 0x203a + -0x9b2 * -0x1,
  ) &&
    (_0x4c365e["VNBji"](handleIntroSkip, _0x40b427),
    _0x4c365e["gLpFr"](handleOutroSkip, _0x40b427, _0x4736ca),
    (lastSkipUpdate = _0x54127f));
  if (
    _0x4c365e["Dfbsf"](
      _0x4c365e["aqmJt"](_0x54127f, lastMessageUpdate),
      0x19bd + -0xcfb + -0x4f2,
    )
  )
    try {
      (window["parent"]["postMessag" + "e"](
        {
          type: _0x4c365e["GZMnT"],
          data: {
            current: _0x40b427,
            duration: _0x4736ca,
            remaining: _0x11bf55,
          },
        },
        "*",
      ),
        (lastMessageUpdate = _0x54127f));
    } catch (_0x4a8197) {
      console["warn"](_0x4c365e["OQfNc"], _0x4a8197);
    }
  _0x4c365e["RygHI"](updateDualSubtitles);
});
function handleIntroSkip(_0x44a6eb) {
  const _0x5eb71b = _0x9f5b01,
    _0x32f9a0 = {
      wunVS: function (_0x1308a7, _0x5265b7) {
        return _0x1308a7(_0x5265b7);
      },
      OrieF: "#skip-intr" + "o",
      BXyBv: function (_0x49b0f8, _0x2371aa) {
        return _0x49b0f8 !== _0x2371aa;
      },
      plMmv: function (_0x23c790, _0x1a7acf) {
        return _0x23c790 !== _0x1a7acf;
      },
      ovwac: function (_0x59dbe9, _0x12fbcc) {
        return _0x59dbe9 >= _0x12fbcc;
      },
      tIdMI: function (_0x5b5c44, _0x2c7704) {
        return _0x5b5c44 <= _0x2c7704;
      },
      FXUPq: function (_0x2d655c, _0x26e9f7) {
        return _0x2d655c && _0x26e9f7;
      },
      bStwk: function (_0x1a562b) {
        return _0x1a562b();
      },
    },
    _0x2e3c14 = _0x32f9a0["wunVS"]($, _0x32f9a0["OrieF"]);
  if (
    _0x32f9a0["BXyBv"](CONFIG["introStart"], null) &&
    _0x32f9a0["BXyBv"](CONFIG["introStart"], undefined) &&
    _0x32f9a0["plMmv"](CONFIG["introEnd"], null) &&
    _0x32f9a0["plMmv"](CONFIG["introEnd"], undefined) &&
    _0x32f9a0["ovwac"](_0x44a6eb, CONFIG["introStart"]) &&
    _0x32f9a0["tIdMI"](_0x44a6eb, CONFIG["introEnd"])
  ) {
    if (_0x32f9a0["FXUPq"](!introSkipped, autoSkipIntroFromParent))
      _0x32f9a0["bStwk"](skipIntro);
    else !introSkipped ? _0x2e3c14["show"]() : _0x2e3c14["hide"]();
  } else _0x2e3c14["hide"]();
}
function handleOutroSkip(_0x553912, _0x577325) {
  const _0x576008 = _0x9f5b01,
    _0x20a57c = {
      RanAN: function (_0x46c14e, _0x553b8c) {
        return _0x46c14e !== _0x553b8c;
      },
      PAQLK: function (_0x5ce2b3, _0x5c1e37) {
        return _0x5ce2b3 !== _0x5c1e37;
      },
      sDLoa: function (_0x17a42f, _0x21fa0a) {
        return _0x17a42f >= _0x21fa0a;
      },
      gbWkY: function (_0xad6133, _0x88ecf7) {
        return _0xad6133 !== _0x88ecf7;
      },
      lxQBa: "null",
      mtyJi: function (_0x24086f, _0x3d8795) {
        return _0x24086f > _0x3d8795;
      },
      YcluG: function (_0x2e4461, _0x448aa6) {
        return _0x2e4461 < _0x448aa6;
      },
      cvtXP: function (_0x3e7461, _0x28b21b) {
        return _0x3e7461(_0x28b21b);
      },
      KRHxg: "#skip-outr" + "o",
      KIjAp: function (_0x503e6d, _0x21f35e) {
        return _0x503e6d(_0x21f35e);
      },
      mYVdO: function (_0x1b2684, _0x256670) {
        return _0x1b2684(_0x256670);
      },
      isSJD: function (_0x58dd5a, _0x35df00) {
        return _0x58dd5a !== _0x35df00;
      },
      OFExJ: function (_0x53e6d3, _0x45f2ce) {
        return _0x53e6d3 >= _0x45f2ce;
      },
      BZeZv: function (_0x54a6dc, _0x2eda28) {
        return _0x54a6dc(_0x2eda28);
      },
      BVuVG: function (_0x4a4ef7, _0x9736cc) {
        return _0x4a4ef7 - _0x9736cc;
      },
      gsDIq: function (_0x4e4866, _0x1e3178) {
        return _0x4e4866 !== _0x1e3178;
      },
      UJUrx: function (_0xc93e77, _0x4d3139) {
        return _0xc93e77 >= _0x4d3139;
      },
      dwSZe: function (_0x6d060e, _0x5a2e54) {
        return _0x6d060e(_0x5a2e54);
      },
      qmVnp: function (_0x242d5e, _0x3e9421) {
        return _0x242d5e + _0x3e9421;
      },
      PEIpD: "next-auto",
    };
  if (
    _0x20a57c["RanAN"](CONFIG["outroStart"], null) &&
    _0x20a57c["PAQLK"](CONFIG["outroStart"], undefined) &&
    _0x20a57c["sDLoa"](
      CONFIG["outroStart"],
      0x74f * -0x5 + -0x21b8 + -0x4643 * -0x1,
    )
  )
    (nextEpisode &&
    _0x20a57c["gbWkY"](nextEpisode, _0x20a57c["lxQBa"]) &&
    _0x20a57c["sDLoa"](_0x553912, CONFIG["outroStart"]) &&
    _0x20a57c["mtyJi"](
      CONFIG["outroStart"],
      0x85 + -0x1 * -0x9b7 + -0x1 * 0xa3c,
    ) &&
    _0x20a57c["YcluG"](_0x553912, _0x577325)
      ? (_0x20a57c["cvtXP"]($, _0x20a57c["KRHxg"])["show"](),
        _0x20a57c["KIjAp"](startOutroCountdown, _0x553912))
      : _0x20a57c["mYVdO"]($, _0x20a57c["KRHxg"])["hide"](),
      _0x20a57c["PAQLK"](CONFIG["outroEnd"], null) &&
        _0x20a57c["isSJD"](CONFIG["outroEnd"], undefined) &&
        _0x20a57c["mtyJi"](CONFIG["outroEnd"], 0xbd5 + -0x25 * 0x38 + -0x3bd) &&
        _0x20a57c["OFExJ"](_0x553912, CONFIG["outroEnd"]) &&
        _0x20a57c["BZeZv"]($, _0x20a57c["KRHxg"])["hide"]());
  else {
    const _0x5371f9 = _0x20a57c["BVuVG"](
      _0x577325,
      0x2 * 0xd2b + 0xa7c + -0x24c8,
    );
    nextEpisode &&
    _0x20a57c["gsDIq"](nextEpisode, _0x20a57c["lxQBa"]) &&
    _0x20a57c["UJUrx"](_0x553912, _0x5371f9) &&
    _0x20a57c["YcluG"](_0x553912, _0x577325)
      ? (_0x20a57c["dwSZe"]($, _0x20a57c["KRHxg"])["show"](),
        _0x20a57c["KIjAp"](startOutroCountdown, _0x553912))
      : _0x20a57c["dwSZe"]($, _0x20a57c["KRHxg"])["hide"]();
  }
  _0x20a57c["OFExJ"](
    _0x20a57c["qmVnp"](_0x553912, 0x26 * -0x81 + -0x13a * -0x17 + -0x90f),
    _0x577325,
  ) && _0x20a57c["KIjAp"](skipToNextEpisode, _0x20a57c["PEIpD"]);
}
function skipIntro() {
  const _0x5ce0a3 = _0x9f5b01,
    _0x5bb371 = {
      kvsMv: function (_0x58c362, _0x2b0b01) {
        return _0x58c362(_0x2b0b01);
      },
      cSKay: "#skip-intr" + "o",
    };
  (playerInstance["seek"](CONFIG["introEnd"]),
    (introSkipped = !![]),
    _0x5bb371["kvsMv"]($, _0x5bb371["cSKay"])["hide"]());
}
function startOutroCountdown(_0x365e9b) {
  const _0x1afd8e = _0x9f5b01,
    _0x3637ff = {
      MfbSn: function (_0x3a6b95, _0x38c3f6) {
        return _0x3a6b95(_0x38c3f6);
      },
      AfKVF: "#skip-outr" + "o .progres" + "s",
      nEmWa: function (_0x4f0d8d, _0x9685b1) {
        return _0x4f0d8d !== _0x9685b1;
      },
      VHfMU: function (_0x4a0234, _0x1a2d35) {
        return _0x4a0234 >= _0x1a2d35;
      },
      ZFgkD: function (_0x16b1fa, _0x5b57a8) {
        return _0x16b1fa == _0x5b57a8;
      },
      LImHF: function (_0x580321, _0x288ad3) {
        return _0x580321 - _0x288ad3;
      },
      jlTtr: function (_0x5efb8a, _0x4faa09) {
        return _0x5efb8a * _0x4faa09;
      },
      gVBCF: function (_0x224df0, _0x234b1c) {
        return _0x224df0 / _0x234b1c;
      },
      JnPlX: "width",
      kGBoQ: function (_0x26611b, _0x309a3a) {
        return _0x26611b + _0x309a3a;
      },
      Spbtj: function (_0x2f8fe6, _0x43a729) {
        return _0x2f8fe6 * _0x43a729;
      },
      FHUoS: function (_0x386ea4, _0x3a06c4) {
        return _0x386ea4 / _0x3a06c4;
      },
    },
    _0x1ab7b2 = _0x3637ff["MfbSn"]($, _0x3637ff["AfKVF"]);
  if (
    _0x3637ff["nEmWa"](CONFIG["outroStart"], null) &&
    _0x3637ff["nEmWa"](CONFIG["outroStart"], undefined) &&
    _0x3637ff["VHfMU"](
      CONFIG["outroStart"],
      0x547 * -0x7 + 0x16 * 0x87 + 0x1957,
    )
  ) {
    let _0x41e296 = CONFIG["outroEnd"] || playerInstance["getDuratio" + "n"]();
    _0x3637ff["ZFgkD"](_0x41e296, 0x9 * 0x3c7 + -0x1fc1 + -0x23e) &&
      (_0x41e296 = playerInstance["getDuratio" + "n"]());
    const _0x54c867 = _0x3637ff["LImHF"](_0x41e296, CONFIG["outroStart"]),
      _0x29348f = _0x3637ff["LImHF"](_0x365e9b, CONFIG["outroStart"]),
      _0x1f395c = Math["min"](
        -0x142e + -0x1cc5 + 0x3157,
        Math["max"](
          0xaa2 + 0x11 * 0x175 + 0x2367 * -0x1,
          _0x3637ff["jlTtr"](
            _0x3637ff["gVBCF"](_0x29348f, _0x54c867),
            0x21d + -0x10 * -0x4e + -0x699,
          ),
        ),
      );
    _0x1ab7b2["css"](_0x3637ff["JnPlX"], _0x3637ff["kGBoQ"](_0x1f395c, "%"));
  } else {
    const _0x335fbc = -0x14d0 + 0xfb * -0x8 + 0x1cb2,
      _0x2544d7 = _0x3637ff["LImHF"](
        _0x365e9b,
        _0x3637ff["LImHF"](playerInstance["getDuratio" + "n"](), _0x335fbc),
      ),
      _0x90413f = Math["min"](
        -0x39 * 0x8a + -0x1205 * 0x1 + 0x3 * 0x1061,
        Math["max"](
          -0x3e5 + 0x8 * 0x30c + -0x1 * 0x147b,
          _0x3637ff["Spbtj"](
            _0x3637ff["FHUoS"](_0x2544d7, _0x335fbc),
            -0x8f * -0x3f + 0x23c0 + -0x468d,
          ),
        ),
      );
    _0x1ab7b2["css"](_0x3637ff["JnPlX"], _0x3637ff["kGBoQ"](_0x90413f, "%"));
  }
}
function skipToNextEpisode(_0x4fce29 = "next") {
  const _0x2d18cc = _0x9f5b01,
    _0x5579f0 = {
      jvTKv: function (_0x2a0c5b, _0x29b677) {
        return _0x2a0c5b !== _0x29b677;
      },
      buDkW: "null",
      XFXbO: "CHANGE_EPI" + "SODE",
    };
  nextEpisode &&
    _0x5579f0["jvTKv"](nextEpisode, _0x5579f0["buDkW"]) &&
    window["parent"]["postMessag" + "e"](
      {
        type: _0x5579f0["XFXbO"],
        episodeId: nextEpisode["id"],
        action: _0x4fce29,
      },
      "*",
    );
}
function addTimelineMarkers() {
  const _0x4a78cc = _0x9f5b01,
    _0x4821e0 = {
      XdDiT: function (_0x687354, _0x4b604d) {
        return _0x687354(_0x4b604d);
      },
      XzyVq: ".jw-slider" + "-container",
      JDoxl: function (_0x1c4656, _0x4c5785) {
        return _0x1c4656 === _0x4c5785;
      },
      DrZtQ: ".jw-intro," + " .jw-outro",
      eBNgg: function (_0x22c4e9, _0x5be1c6) {
        return _0x22c4e9 !== _0x5be1c6;
      },
      ypIPL: function (_0x3f4013, _0x3367f4) {
        return _0x3f4013 !== _0x3367f4;
      },
      JQICP: function (_0x3f0e74, _0xf2d73c) {
        return _0x3f0e74 !== _0xf2d73c;
      },
      BGzLq: function (_0x3594f2, _0x574786) {
        return _0x3594f2 >= _0x574786;
      },
      CiWss: function (_0x5c49a5, _0x23f1db) {
        return _0x5c49a5 > _0x23f1db;
      },
      jRWAX: function (_0x40ba9c, _0xc0baf3) {
        return _0x40ba9c < _0xc0baf3;
      },
      vgryy: function (_0x10d16c, _0x1579ff) {
        return _0x10d16c * _0x1579ff;
      },
      zDFUk: function (_0x1e303b, _0xb520db) {
        return _0x1e303b / _0xb520db;
      },
      gVqIT: function (_0x4e8387, _0x1dfb44) {
        return _0x4e8387 * _0x1dfb44;
      },
      GIlRi: function (_0x5dd467, _0x1578f4) {
        return _0x5dd467 - _0x1578f4;
      },
      HVqyx: function (_0x45f6d8, _0x3d5fc6) {
        return _0x45f6d8(_0x3d5fc6);
      },
      GQhZF: function (_0x5ae3f0, _0x3c14ac) {
        return _0x5ae3f0 !== _0x3c14ac;
      },
      LAxTS: function (_0x5d15ce, _0x49466a) {
        return _0x5d15ce > _0x49466a;
      },
      zYOkL: function (_0x28313e, _0x3dcdce) {
        return _0x28313e !== _0x3dcdce;
      },
      uEkMw: function (_0x4cae75, _0xb46ccd) {
        return _0x4cae75 >= _0xb46ccd;
      },
      ZynVP: function (_0x4f9d84, _0x2a0079) {
        return _0x4f9d84 == _0x2a0079;
      },
    },
    _0x2d5be4 = playerInstance["getDuratio" + "n"]();
  if (!_0x2d5be4) return;
  const _0x2b395e = _0x4821e0["XdDiT"]($, _0x4821e0["XzyVq"]);
  if (
    _0x4821e0["JDoxl"](
      _0x2b395e["length"],
      -0x1 * 0x2230 + 0x9c0 + -0xb8 * -0x22,
    )
  )
    return;
  _0x4821e0["XdDiT"]($, _0x4821e0["DrZtQ"])["remove"]();
  if (
    _0x4821e0["eBNgg"](CONFIG["introStart"], null) &&
    _0x4821e0["ypIPL"](CONFIG["introStart"], undefined) &&
    _0x4821e0["eBNgg"](CONFIG["introEnd"], null) &&
    _0x4821e0["JQICP"](CONFIG["introEnd"], undefined) &&
    _0x4821e0["BGzLq"](
      CONFIG["introStart"],
      -0x176a + -0x2 * 0x1248 + 0x6 * 0x9ff,
    ) &&
    _0x4821e0["CiWss"](
      CONFIG["introEnd"],
      -0x9 * -0x33f + -0x277 * -0x3 + 0x354 * -0xb,
    ) &&
    _0x4821e0["jRWAX"](CONFIG["introStart"], CONFIG["introEnd"])
  ) {
    const _0x4209fb = _0x4821e0["vgryy"](
        _0x4821e0["zDFUk"](CONFIG["introStart"], _0x2d5be4),
        0x38 * -0x8 + -0x79 * -0x1d + 0x3 * -0x3db,
      ),
      _0x577334 = _0x4821e0["gVqIT"](
        _0x4821e0["zDFUk"](
          _0x4821e0["GIlRi"](CONFIG["introEnd"], CONFIG["introStart"]),
          _0x2d5be4,
        ),
        -0x1ae8 + 0x17c0 + 0x38c,
      ),
      _0x5418a4 = _0x4821e0["HVqyx"](
        $,
        "\n      <di" +
          'v class="j' +
          "w-reset jw" +
          '-intro" \n ' +
          "          " +
          'style="mar' +
          "gin-left: " +
          _0x4209fb +
          "%; width: " +
          _0x577334 +
          ('%">\n      ' + "</div>\n   " + "\x20"),
      );
    _0x2b395e["append"](_0x5418a4);
  }
  if (
    _0x4821e0["eBNgg"](CONFIG["outroStart"], null) &&
    _0x4821e0["GQhZF"](CONFIG["outroStart"], undefined) &&
    _0x4821e0["LAxTS"](CONFIG["outroStart"], 0x14ae + 0x1535 + 0x29e3 * -0x1) &&
    _0x4821e0["GQhZF"](CONFIG["outroEnd"], null) &&
    _0x4821e0["zYOkL"](CONFIG["outroEnd"], undefined) &&
    _0x4821e0["uEkMw"](
      CONFIG["outroEnd"],
      0x4e7 * -0x1 + 0x1 * 0xcb1 + -0x7ca * 0x1,
    )
  ) {
    const _0x3d8741 = _0x4821e0["gVqIT"](
      _0x4821e0["zDFUk"](CONFIG["outroStart"], _0x2d5be4),
      -0x227a * -0x1 + 0x7aa + -0x29c0,
    );
    let _0x3de5be = CONFIG["outroEnd"] || playerInstance["getDuratio" + "n"]();
    _0x4821e0["ZynVP"](_0x3de5be, -0x1e52 + 0x581 + 0x18d1) &&
      (_0x3de5be = playerInstance["getDuratio" + "n"]());
    const _0x12f0eb = _0x4821e0["vgryy"](
        _0x4821e0["zDFUk"](
          _0x4821e0["GIlRi"](_0x3de5be, CONFIG["outroStart"]),
          _0x2d5be4,
        ),
        0x32c * -0x1 + -0x1 * -0x412 + -0x2 * 0x41,
      ),
      _0x477e7b = _0x4821e0["HVqyx"](
        $,
        "\n      <di" +
          'v class="j' +
          "w-reset jw" +
          '-outro" \n ' +
          "          " +
          'style="mar' +
          "gin-left: " +
          _0x3d8741 +
          "%; width: " +
          _0x12f0eb +
          ('%">\n      ' + "</div>\n   " + "\x20"),
      );
    _0x2b395e["append"](_0x477e7b);
  }
}
($(document)["on"]("click", ".jw-btn-pl" + "ay", function () {
  const _0x1a5e1a = _0x9f5b01,
    _0x314b59 = {
      tjAzX: function (_0x378463, _0xcc6a1f) {
        return _0x378463 && _0xcc6a1f;
      },
      cgHyP: function (_0x94daa0, _0x28014a) {
        return _0x94daa0 === _0x28014a;
      },
      WJprc: "playing",
    };
  if (_0x314b59["tjAzX"](isLive, !isHost)) return;
  _0x314b59["cgHyP"](playerInstance["getState"](), _0x314b59["WJprc"])
    ? playerInstance["pause"]()
    : playerInstance["play"]();
}),
  playerInstance["on"]("setupError", function (_0x8db7e4) {
    const _0x5d2796 = _0x9f5b01,
      _0x2added = {
        tKgcA: function (_0x19b6ed, _0x5a1ad6, _0x546974) {
          return _0x19b6ed(_0x5a1ad6, _0x546974);
        },
        ibPpw: "Setup erro" + "r:",
      };
    _0x2added["tKgcA"](alert, _0x2added["ibPpw"], _0x8db7e4);
  }));
function initializeTooltips() {
  const _0x5455ab = _0x9f5b01,
    _0x3c1364 = { BjEHJ: "[data-bs-t" + 'oggle="too' + 'ltip"]' },
    _0x5a43e4 = document["querySelec" + "torAll"](_0x3c1364["BjEHJ"]);
  [..._0x5a43e4]["map"]((_0x326491) => new bootstrap["Tooltip"](_0x326491));
}
($(document)["on"]("click", ".skip-10-p" + "rev", () => {
  const _0x20aa05 = _0x9f5b01,
    _0x459637 = {
      vwClo: function (_0x17d707, _0xcd097a) {
        return _0x17d707 - _0xcd097a;
      },
    },
    _0x514f2c = playerInstance["getPositio" + "n"]();
  playerInstance["seek"](
    Math["max"](
      0xa3f * 0x1 + -0x3 * -0x373 + -0x1498,
      _0x459637["vwClo"](_0x514f2c, -0xb0 * 0x13 + -0x19f * -0xf + -0xb37),
    ),
  );
}),
  $(document)["on"]("click", ".skip-10-n" + "ext", () => {
    const _0x570d2c = _0x9f5b01,
      _0x3a20e7 = {
        jlzWP: function (_0x34fdb2, _0x244bbd) {
          return _0x34fdb2 + _0x244bbd;
        },
      },
      _0x5e5a67 = playerInstance["getPositio" + "n"](),
      _0xab1883 = playerInstance["getDuratio" + "n"]();
    playerInstance["seek"](
      Math["min"](
        _0xab1883,
        _0x3a20e7["jlzWP"](_0x5e5a67, 0x1c8d + 0x2f5 + 0x1f78 * -0x1),
      ),
    );
  }));
let isMuted = ![],
  isDragging = ![];
playerInstance["on"]("volume", function (_0x5b8d46) {
  const _0xf8add0 = _0x9f5b01,
    _0x5568dd = {
      vJISc: function (_0x1b407a, _0x186dc7) {
        return _0x1b407a(_0x186dc7);
      },
      WhvkW: ".iv-load",
      qOySA: "width",
      PWVUX: function (_0x2ff7bf, _0x45fae9) {
        return _0x2ff7bf + _0x45fae9;
      },
      QRVwL: function (_0x27a400, _0x2d5490) {
        return _0x27a400 === _0x2d5490;
      },
      tHjwb: function (_0x54302a, _0x2c4c0d) {
        return _0x54302a(_0x2c4c0d);
      },
      JCOZa: ".btn-muted",
      EvcKC: "fa-volume-" + "mute",
      pXMFc: "fa-volume-" + "high",
      oUFOY: function (_0xf5d3bf, _0x231c60) {
        return _0xf5d3bf(_0x231c60);
      },
      HYDKA: function (_0x1df7d7, _0x23f9ee) {
        return _0x1df7d7(_0x23f9ee);
      },
    },
    _0x462918 = _0x5b8d46["volume"];
  (_0x5568dd["vJISc"]($, _0x5568dd["WhvkW"])["css"](
    _0x5568dd["qOySA"],
    _0x5568dd["PWVUX"](_0x462918, "%"),
  ),
    _0x5568dd["QRVwL"](_0x462918, -0x2 * -0xd + -0x1cfb + 0x1ce1)
      ? (_0x5568dd["tHjwb"]($, _0x5568dd["JCOZa"])["addClass"](
          _0x5568dd["EvcKC"],
        ),
        _0x5568dd["tHjwb"]($, _0x5568dd["JCOZa"])["removeClas" + "s"](
          _0x5568dd["pXMFc"],
        ))
      : (_0x5568dd["oUFOY"]($, _0x5568dd["JCOZa"])["addClass"](
          _0x5568dd["pXMFc"],
        ),
        _0x5568dd["HYDKA"]($, _0x5568dd["JCOZa"])["removeClas" + "s"](
          _0x5568dd["EvcKC"],
        )));
});
function updateVolume(_0x41e195) {
  const _0x132dd6 = _0x9f5b01,
    _0x1cd10a = {
      wxOZQ: function (_0x502a4d, _0x1f4d34) {
        return _0x502a4d(_0x1f4d34);
      },
      eVojY: "#volume",
      dWxpi: function (_0x345635, _0x5846eb) {
        return _0x345635 / _0x5846eb;
      },
      SlmEY: function (_0x402617, _0x1ebcfe) {
        return _0x402617 - _0x1ebcfe;
      },
      aqeqp: ".iv-load",
      HAGYz: "width",
      bbCAB: function (_0xa7d7d, _0x39e4e9) {
        return _0xa7d7d + _0x39e4e9;
      },
      tZbMc: function (_0x1a2981, _0x3f9806) {
        return _0x1a2981 * _0x3f9806;
      },
      JENkb: function (_0x465b02, _0x18a0c6) {
        return _0x465b02 === _0x18a0c6;
      },
      yRiJJ: ".btn-muted",
      hhrMI: "fa-volume-" + "mute",
      YrqZi: "fa-volume-" + "high",
      ELDUF: function (_0x24954f, _0x453a5c) {
        return _0x24954f(_0x453a5c);
      },
      WcaSJ: function (_0x3b3dd3, _0x223ed1) {
        return _0x3b3dd3(_0x223ed1);
      },
    },
    _0x2f52e9 = _0x1cd10a["wxOZQ"]($, _0x1cd10a["eVojY"])[
      -0xc72 + 0x203f + 0x1 * -0x13cd
    ]["getBoundin" + "gClientRec" + "t"]();
  let _0x13a0c8 = _0x1cd10a["dWxpi"](
    _0x1cd10a["SlmEY"](_0x41e195, _0x2f52e9["left"]),
    _0x2f52e9["width"],
  );
  ((_0x13a0c8 = Math["max"](
    0x2404 + 0x522 + 0x1493 * -0x2,
    Math["min"](-0x5 * -0xe5 + 0xc58 * -0x3 + 0x2090, _0x13a0c8),
  )),
    _0x1cd10a["wxOZQ"]($, _0x1cd10a["aqeqp"])["css"](
      _0x1cd10a["HAGYz"],
      _0x1cd10a["bbCAB"](
        _0x1cd10a["tZbMc"](
          _0x13a0c8,
          0x2 * 0x27f + -0xf7a * 0x1 + -0xae0 * -0x1,
        ),
        "%",
      ),
    ),
    playerInstance["setVolume"](
      _0x1cd10a["tZbMc"](_0x13a0c8, 0x223e + 0x1 * -0x505 + -0x1cd5),
    ),
    _0x1cd10a["JENkb"](_0x13a0c8, 0x5f3 * 0x1 + 0x1559 + -0x1b4c)
      ? ((isMuted = !![]),
        _0x1cd10a["wxOZQ"]($, _0x1cd10a["yRiJJ"])["addClass"](
          _0x1cd10a["hhrMI"],
        ),
        _0x1cd10a["wxOZQ"]($, _0x1cd10a["yRiJJ"])["removeClas" + "s"](
          _0x1cd10a["YrqZi"],
        ))
      : ((isMuted = ![]),
        _0x1cd10a["ELDUF"]($, _0x1cd10a["yRiJJ"])["addClass"](
          _0x1cd10a["YrqZi"],
        ),
        _0x1cd10a["WcaSJ"]($, _0x1cd10a["yRiJJ"])["removeClas" + "s"](
          _0x1cd10a["hhrMI"],
        )));
}
($(document)["on"]("mousedown", "#volume", function (_0x207fbd) {
  const _0x5f1002 = _0x9f5b01,
    _0x5657d6 = {
      kfdnc: function (_0x40eae7, _0x42f479) {
        return _0x40eae7(_0x42f479);
      },
    };
  ((isDragging = !![]), _0x5657d6["kfdnc"](updateVolume, _0x207fbd["clientX"]));
}),
  $(document)["on"]("mousemove", function (_0x3d3000) {
    const _0x1eb8fb = _0x9f5b01,
      _0x38f7a1 = {
        QRZrS: function (_0x555325, _0x5cd4c2) {
          return _0x555325(_0x5cd4c2);
        },
      };
    isDragging && _0x38f7a1["QRZrS"](updateVolume, _0x3d3000["clientX"]);
  }),
  $(document)["on"]("mouseup", function (_0x173914) {
    isDragging = ![];
  }),
  $(document)["on"]("click", "#volume", function (_0x52a809) {
    const _0x16275e = _0x9f5b01,
      _0x8814f2 = {
        LEPrv: function (_0x5d536e, _0x5435f5) {
          return _0x5d536e(_0x5435f5);
        },
      };
    _0x8814f2["LEPrv"](updateVolume, _0x52a809["clientX"]);
  }),
  $(document)["on"]("click", ".btn-muted", function () {
    const _0x55f654 = _0x9f5b01,
      _0x1fa85d = {
        qHmjT: function (_0x3bdc50, _0x2cd8e4) {
          return _0x3bdc50(_0x2cd8e4);
        },
        AntVr: ".iv-load",
        jXUeK: "width",
        neYkS: ".btn-muted",
        mGjeA: "fa-volume-" + "mute",
        yjcmx: function (_0x5957c3, _0x2d27d2) {
          return _0x5957c3(_0x2d27d2);
        },
        cXZre: "fa-volume-" + "high",
        nGFhD: function (_0x11c50a, _0x51a4e3) {
          return _0x11c50a(_0x51a4e3);
        },
        jCTFd: "100%",
      };
    ((isMuted = !isMuted),
      isMuted
        ? (playerInstance["setVolume"](0x19ea + -0x16db + -0x30f * 0x1),
          _0x1fa85d["qHmjT"]($, _0x1fa85d["AntVr"])["css"](
            _0x1fa85d["jXUeK"],
            "0%",
          ),
          _0x1fa85d["qHmjT"]($, _0x1fa85d["neYkS"])["addClass"](
            _0x1fa85d["mGjeA"],
          ),
          _0x1fa85d["yjcmx"]($, _0x1fa85d["neYkS"])["removeClas" + "s"](
            _0x1fa85d["cXZre"],
          ))
        : (playerInstance["setVolume"](-0x6f3 + 0x42f + 0x328),
          _0x1fa85d["nGFhD"]($, _0x1fa85d["AntVr"])["css"](
            _0x1fa85d["jXUeK"],
            _0x1fa85d["jCTFd"],
          ),
          _0x1fa85d["yjcmx"]($, _0x1fa85d["neYkS"])["addClass"](
            _0x1fa85d["cXZre"],
          ),
          _0x1fa85d["yjcmx"]($, _0x1fa85d["neYkS"])["removeClas" + "s"](
            _0x1fa85d["mGjeA"],
          )));
  }),
  $(document)["on"]("click", ".item-max", function () {
    const _0x187d64 = _0x9f5b01,
      _0x100fe1 = {
        NqZeF: function (_0x52fbbe, _0x3b0bf0) {
          return _0x52fbbe(_0x3b0bf0);
        },
        SCdkO: ".item-max",
        SYPii: "d-none",
        zylBE: ".item-min",
      };
    (playerInstance["setFullscr" + "een"](!![]),
      _0x100fe1["NqZeF"]($, _0x100fe1["SCdkO"])["addClass"](_0x100fe1["SYPii"]),
      _0x100fe1["NqZeF"]($, _0x100fe1["zylBE"])["removeClas" + "s"](
        _0x100fe1["SYPii"],
      ));
  }),
  $(document)["on"]("click", ".item-min", function () {
    const _0xcc3560 = _0x9f5b01,
      _0x35c09d = {
        aozuA: function (_0x703634, _0x3d3457) {
          return _0x703634(_0x3d3457);
        },
        SRkKw: ".item-max",
        SNjsj: "d-none",
        eVfDZ: ".item-min",
      };
    (playerInstance["setFullscr" + "een"](![]),
      _0x35c09d["aozuA"]($, _0x35c09d["SRkKw"])["removeClas" + "s"](
        _0x35c09d["SNjsj"],
      ),
      _0x35c09d["aozuA"]($, _0x35c09d["eVfDZ"])["addClass"](
        _0x35c09d["SNjsj"],
      ));
  }),
  playerInstance["on"]("fullscreen", function (_0x16251f) {
    const _0x212a52 = _0x9f5b01,
      _0xd80208 = {
        IKbJg: function (_0xb109, _0x2b4b61) {
          return _0xb109(_0x2b4b61);
        },
        BOPKk: ".item-max",
        EjvDB: "d-none",
        OGTIU: function (_0x559d6a, _0xb2e40e) {
          return _0x559d6a(_0xb2e40e);
        },
        LqmOP: ".item-min",
        ntpGt: function (_0x587fb8, _0x518220) {
          return _0x587fb8(_0x518220);
        },
      };
    _0x16251f["fullscreen"]
      ? (_0xd80208["IKbJg"]($, _0xd80208["BOPKk"])["addClass"](
          _0xd80208["EjvDB"],
        ),
        _0xd80208["OGTIU"]($, _0xd80208["LqmOP"])["removeClas" + "s"](
          _0xd80208["EjvDB"],
        ))
      : (_0xd80208["ntpGt"]($, _0xd80208["BOPKk"])["removeClas" + "s"](
          _0xd80208["EjvDB"],
        ),
        _0xd80208["OGTIU"]($, _0xd80208["LqmOP"])["addClass"](
          _0xd80208["EjvDB"],
        ));
  }),
  $(document)["on"]("click", ".item-pip", function () {
    const _0x1c30f4 = _0x9f5b01,
      _0xad23da = {
        PJhQi: "Lỗi khi th" + "oát PiP:",
        pcWWo: "Lỗi khi bậ" + "t PiP:",
        aGisZ: "video",
        ukQQT: function (_0x55b780, _0x9f3bb3) {
          return _0x55b780(_0x9f3bb3);
        },
        nRqeM:
          "Trình duyệ" +
          "t của bạn " +
          "không hỗ t" +
          "rợ chế độ " +
          "Picture-in" +
          "-Picture",
      };
    if (
      document["pictureInP" + "ictureEnab" + "led"] ||
      document["webkitPict" + "ureInPictu" + "reEnabled"]
    ) {
      const _0x53b4ea = playerInstance["getContain" + "er"]()[
        "querySelec" + "tor"
      ](_0xad23da["aGisZ"]);
      document["pictureInP" + "ictureElem" + "ent"]
        ? document["exitPictur" + "eInPicture"]()["catch"]((_0x14f3c7) => {
            const _0x54440e = _0x1c30f4;
            console["error"](_0xad23da["PJhQi"], _0x14f3c7);
          })
        : _0x53b4ea["requestPic" + "tureInPict" + "ure"]()["catch"](
            (_0x71d41b) => {
              const _0x21e1d7 = _0x1c30f4;
              console["error"](_0xad23da["pcWWo"], _0x71d41b);
            },
          );
    } else _0xad23da["ukQQT"](alert, _0xad23da["nRqeM"]);
  }),
  $(document)["on"]("click", "#toggle-sp" + "eed", function () {
    const _0x3f1bef = _0x9f5b01,
      _0x4bea3d = {
        UvlWN: function (_0x254688, _0x450f4f) {
          return _0x254688(_0x450f4f);
        },
        khtrP: "#sub-speed",
        iiEls: function (_0x177a7d, _0x4e1d36) {
          return _0x177a7d(_0x4e1d36);
        },
        jzuZQ: ".sub-slide" + ", .content" + "-slide",
      };
    _0x4bea3d["iiEls"]($, _0x4bea3d["jzuZQ"])["fadeOut"](
      0x685 * 0x1 + -0x1fb1 + -0xc96 * -0x2,
      function () {
        const _0x3c6c93 = _0x3f1bef;
        _0x4bea3d["UvlWN"]($, _0x4bea3d["khtrP"])["fadeIn"](
          0x1a * -0x97 + -0x191d + 0x13 * 0x221,
        );
      },
    );
  }),
  $(document)["on"]("click", ".sub-back", function () {
    const _0x32a36c = _0x9f5b01,
      _0x35381a = {
        oVANr: function (_0x5308c4, _0x56d847) {
          return _0x5308c4(_0x56d847);
        },
        Hixts: ".sub-slide",
        iOSML: "level-2",
        DCSzt: "#sub-capti" + "on",
        vaDQK: function (_0x48ef4c, _0x10d637) {
          return _0x48ef4c(_0x10d637);
        },
        zfbDC: ".content-s" + "lide",
        dqiHj: function (_0x48adbc, _0x3e0129) {
          return _0x48adbc(_0x3e0129);
        },
        OzYHQ: ".level-1",
      },
      _0x17dffd = _0x35381a["oVANr"]($, this)["closest"](_0x35381a["Hixts"]);
    let _0x6604b1;
    (_0x17dffd["hasClass"](_0x35381a["iOSML"])
      ? (_0x6604b1 = _0x35381a["oVANr"]($, _0x35381a["DCSzt"]))
      : (_0x6604b1 = _0x35381a["vaDQK"]($, _0x35381a["zfbDC"])),
      _0x35381a["dqiHj"]($, _0x35381a["OzYHQ"])["hide"](),
      _0x17dffd["fadeOut"](-0x1ec2 + 0x306 * 0x4 + 0x12aa, function () {
        const _0x474605 = _0x32a36c;
        _0x6604b1["fadeIn"](0x23f6 + 0x265 * -0x3 + 0x8b * -0x35);
      }));
  }),
  $(document)["on"]("click", "#toggle-qu" + "ality", function () {
    const _0x3867be = _0x9f5b01,
      _0x1486f0 = {
        IHYnu: function (_0x47a2c9, _0x2d42e7) {
          return _0x47a2c9(_0x2d42e7);
        },
        qweGV: "#sub-quali" + "ty",
        xLLOZ: function (_0x49ad7f, _0x4836b8) {
          return _0x49ad7f(_0x4836b8);
        },
        vnFDL: ".sub-slide" + ", .content" + "-slide",
      };
    _0x1486f0["xLLOZ"]($, _0x1486f0["vnFDL"])["fadeOut"](
      0x1 * -0x337 + -0x12f2 + 0x1629,
      function () {
        const _0xd7626e = _0x3867be;
        _0x1486f0["IHYnu"]($, _0x1486f0["qweGV"])["fadeIn"](
          0x3e * 0x3d + 0x5ad + 0x6d1 * -0x3,
        );
      },
    );
  }),
  $(document)["on"]("click", "#toggle-ca" + "ption", function () {
    const _0x21d413 = _0x9f5b01,
      _0x4ed9ea = {
        QMGlF: function (_0x4bde5d, _0x2bc9b7) {
          return _0x4bde5d(_0x2bc9b7);
        },
        djgTL: "#sub-capti" + "on",
        hIjRE: function (_0x39b1ab, _0x483a40) {
          return _0x39b1ab(_0x483a40);
        },
        WORau: ".sub-slide" + ", .content" + "-slide",
      };
    _0x4ed9ea["hIjRE"]($, _0x4ed9ea["WORau"])["fadeOut"](
      0x9d9 * 0x1 + 0x1bc + -0xb95 * 0x1,
      function () {
        const _0x5881e7 = _0x21d413;
        _0x4ed9ea["QMGlF"]($, _0x4ed9ea["djgTL"])["fadeIn"](
          0x1 * 0x138e + -0x1dc3 + 0xa35,
        );
      },
    );
  }),
  $(document)["on"]("click", "#sub-speed" + " .cs-item", function () {
    const _0x372327 = _0x9f5b01,
      _0x22caed = {
        ktplq: function (_0x34bfe6, _0x18e4ac) {
          return _0x34bfe6(_0x18e4ac);
        },
        tAvVN: "data",
        DRRrm: function (_0x5ee4ad, _0x2acef1) {
          return _0x5ee4ad <= _0x2acef1;
        },
        YsQke: "5|1|4|2|3|" + "0",
        lNDyR: function (_0x4d6aec, _0x228ba3) {
          return _0x4d6aec(_0x228ba3);
        },
        iPrNM: ".content-s" + "lide",
        PBBet: ".jw-playba" + "ck-rate .c" + "s-item",
        KsLzB: "active",
        DTcCx: ".jw-speed-" + "text",
        ADwJv: function (_0x3232a3, _0x36381f) {
          return _0x3232a3 + _0x36381f;
        },
        HTlSN: function (_0x3d8daa, _0x33b10f) {
          return _0x3d8daa(_0x33b10f);
        },
        KLWeY: "#sub-speed",
        chiCo: "Lỗi khi se" + "t tốc độ:",
      },
      _0x939a0f = _0x22caed["ktplq"](
        parseFloat,
        _0x22caed["ktplq"]($, this)["attr"](_0x22caed["tAvVN"]),
      );
    if (
      _0x22caed["ktplq"](isNaN, _0x939a0f) ||
      _0x22caed["DRRrm"](_0x939a0f, 0x1f5b + 0x16 * 0x43 + -0x251d)
    )
      return;
    try {
      const _0xa38c9f = _0x22caed["YsQke"]["split"]("|");
      let _0x1788c1 = -0x141c + 0x50f + 0xf0d;
      while (!![]) {
        switch (_0xa38c9f[_0x1788c1++]) {
          case "0":
            _0x22caed["lNDyR"]($, _0x22caed["iPrNM"])["show"]();
            continue;
          case "1":
            _0x22caed["lNDyR"]($, _0x22caed["PBBet"])["removeClas" + "s"](
              _0x22caed["KsLzB"],
            );
            continue;
          case "2":
            _0x22caed["lNDyR"]($, _0x22caed["DTcCx"])["text"](
              _0x22caed["ADwJv"](_0x939a0f, "x"),
            );
            continue;
          case "3":
            _0x22caed["HTlSN"]($, _0x22caed["KLWeY"])["hide"]();
            continue;
          case "4":
            _0x22caed["HTlSN"]($, this)["addClass"](_0x22caed["KsLzB"]);
            continue;
          case "5":
            playerInstance["setPlaybac" + "kRate"](_0x939a0f);
            continue;
        }
        break;
      }
    } catch (_0x1a11d4) {
      console["error"](_0x22caed["chiCo"], _0x1a11d4);
    }
  }),
  playerInstance["on"]("levels", function (_0x33360e) {
    const _0x3c021b = _0x9f5b01,
      _0x2d6111 = {
        ATVLq: function (_0x41a027, _0x74faa7) {
          return _0x41a027 !== _0x74faa7;
        },
        qcdrl: "undefined",
        yYhoA: function (_0x4b7ba1, _0x461a59) {
          return _0x4b7ba1 === _0x461a59;
        },
        IeaKG: function (_0x43461a, _0x1d8c61) {
          return _0x43461a(_0x1d8c61);
        },
        KMnzx: ".jw-qualit" + "y-menu",
        srKUN: "active",
        CAInC: function (_0x7d98ad, _0x5dce3e) {
          return _0x7d98ad(_0x5dce3e);
        },
        eMSLt: "Auto",
        JLTgP: function (_0x34c0a3, _0x3b8779) {
          return _0x34c0a3 === _0x3b8779;
        },
        FoVIN: function (_0x5e9bf7, _0x3fc3bf) {
          return _0x5e9bf7 + _0x3fc3bf;
        },
        dOzMx: function (_0x923d45, _0x13db1a) {
          return _0x923d45 + _0x13db1a;
        },
        iWOaA: "Auto (",
        Qotrv: function (_0x3133dd, _0x5d9738) {
          return _0x3133dd(_0x5d9738);
        },
        bygqo: ".jw-title-" + "quality",
        luocW: function (_0xaaa6a8, _0x1c417e) {
          return _0xaaa6a8(_0x1c417e);
        },
        rMOfu: ".q-play",
      },
      _0x4cdb9a = _0x33360e["levels"],
      _0x13e72d = -(0x1 * 0x251f + -0xb20 + -0x19fe);
    _0x2d6111["CAInC"]($, _0x2d6111["KMnzx"])["empty"]();
    let _0x1fb057 = _0x2d6111["eMSLt"];
    if (_0x2d6111["JLTgP"](_0x13e72d, -(-0x9ca + 0x1377 + -0x9ac))) {
      const _0x6912f4 = playerInstance["getVisualQ" + "uality"]();
      _0x6912f4 &&
        _0x6912f4["level"] &&
        _0x6912f4["level"]["height"] &&
        (_0x1fb057 = _0x2d6111["FoVIN"](
          _0x2d6111["dOzMx"](
            _0x2d6111["iWOaA"],
            _0x2d6111["IeaKG"](
              formatQualityLabel,
              _0x6912f4["level"]["height"],
            ),
          ),
          ")",
        ));
    }
    _0x2d6111["Qotrv"]($, _0x2d6111["KMnzx"])["append"](
      "\n    <a cl" +
        'ass="cs-it' +
        "em line-ce" +
        "nter " +
        (_0x2d6111["yYhoA"](_0x13e72d, -(-0x1 * 0x1a93 + -0x2386 + 0x3e1a))
          ? _0x2d6111["srKUN"]
          : "") +
        ('" data-lev' +
          'el="-1">\n ' +
          "       <di" +
          'v class="c' +
          'si-title">') +
        _0x1fb057 +
        ("</div>\n   " +
          "     <i cl" +
          'ass="fa-so' +
          "lid fa-che" +
          'ck"></i>\n ' +
          "   </a>\n  "),
    );
    const _0x16565a = [..._0x4cdb9a]["sort"](
      (_0x45fb72, _0x14cd2e) =>
        (_0x14cd2e["height"] || -0x5 * -0x17e + -0xb * 0x145 + 0x681) -
        (_0x45fb72["height"] || 0x779 * 0x5 + 0x1fe + -0x275b),
    );
    (_0x16565a["forEach"]((_0x1a2800, _0x1bd06d) => {
      const _0x4f7a15 = _0x3c021b;
      if (_0x2d6111["ATVLq"](typeof _0x1a2800["height"], _0x2d6111["qcdrl"])) {
        const _0x5d4513 = _0x4cdb9a["findIndex"](
            (_0x25fae1) => _0x25fae1 === _0x1a2800,
          ),
          _0x2365a0 = _0x2d6111["yYhoA"](_0x5d4513, _0x13e72d),
          _0x2778ac = _0x2d6111["IeaKG"](
            formatQualityLabel,
            _0x1a2800["height"],
          );
        _0x2d6111["IeaKG"]($, _0x2d6111["KMnzx"])["append"](
          "\n        <" +
            'a class="c' +
            "s-item lin" +
            "e-center " +
            (_0x2365a0 ? _0x2d6111["srKUN"] : "") +
            ('" data-lev' + 'el="') +
            _0x5d4513 +
            ('">\n       ' + "     <div " + 'class="csi' + '-title">') +
            _0x2778ac +
            ("</div>\n   " +
              "         <" +
              'i class="f' +
              "a-solid fa" +
              '-check"></' +
              "i>\n       " +
              " </a>\n    "),
        );
      }
    }),
      _0x2d6111["Qotrv"]($, _0x2d6111["bygqo"])["text"](_0x2d6111["eMSLt"]),
      _0x2d6111["luocW"]($, _0x2d6111["rMOfu"])["text"](_0x2d6111["eMSLt"]));
  }));
function _0xfa96(_0x827aa2, _0x5a6e1f) {
  _0x827aa2 = _0x827aa2 - (-0x795 * -0x4 + -0x506 + -0x1777);
  const _0x1292c8 = _0x4827();
  let _0x555d5d = _0x1292c8[_0x827aa2];
  return _0x555d5d;
}
function updateQualityText(_0x1d32b5, _0x8899a1) {
  const _0x4581d3 = _0x9f5b01,
    _0x11f201 = {
      jFBjS: "Auto",
      OdwzX: function (_0x5bb613, _0x7ebaf9) {
        return _0x5bb613 === _0x7ebaf9;
      },
      lpElE: function (_0x106a52, _0x9ed76c) {
        return _0x106a52 + _0x9ed76c;
      },
      AqMsa: function (_0x4410e9, _0x480587) {
        return _0x4410e9 + _0x480587;
      },
      pGjxM: "Auto (",
      nooqz: function (_0x4e603d, _0x42d7ad) {
        return _0x4e603d(_0x42d7ad);
      },
      LyArC: function (_0x45f81, _0x429c74) {
        return _0x45f81 + _0x429c74;
      },
      cZyPn: function (_0x2ac0da, _0x321b16) {
        return _0x2ac0da >= _0x321b16;
      },
      BIhoV: ".jw-title-" + "quality",
      iPToK: function (_0x3b5ddb, _0x2319c4) {
        return _0x3b5ddb(_0x2319c4);
      },
      mWhgL: ".q-play",
    };
  let _0x48962b = _0x11f201["jFBjS"];
  if (_0x11f201["OdwzX"](_0x1d32b5, -(-0x5 * -0x241 + 0x10f4 + -0x1c38))) {
    const _0x515e3d = playerInstance["getVisualQ" + "uality"]();
    if (_0x515e3d && _0x515e3d["level"] && _0x515e3d["level"]["height"])
      _0x48962b = _0x11f201["lpElE"](
        _0x11f201["AqMsa"](
          _0x11f201["pGjxM"],
          _0x11f201["nooqz"](formatQualityTitle, _0x515e3d["level"]["height"]),
        ),
        ")",
      );
    else {
      const _0x240a9d = _0x8899a1["find"](
        (_0x58f11e) =>
          _0x58f11e["bitrate"] === _0x515e3d?.["reason"]?.["bitrate"],
      );
      _0x240a9d &&
        (_0x48962b = _0x11f201["AqMsa"](
          _0x11f201["LyArC"](
            _0x11f201["pGjxM"],
            _0x11f201["nooqz"](formatQualityTitle, _0x240a9d["height"]),
          ),
          ")",
        ));
    }
  } else {
    if (
      _0x11f201["cZyPn"](_0x1d32b5, 0x98c + 0x2 * -0x1110 + 0x11e * 0x16) &&
      _0x8899a1[_0x1d32b5]
    ) {
      const _0x28251e = _0x8899a1[_0x1d32b5];
      _0x48962b = _0x11f201["nooqz"](formatQualityTitle, _0x28251e["height"]);
    }
  }
  (_0x11f201["nooqz"]($, _0x11f201["BIhoV"])["text"](_0x48962b),
    _0x11f201["iPToK"]($, _0x11f201["mWhgL"])["text"](_0x48962b));
}
function formatQualityLabel(_0x2091e1) {
  const _0x3065d6 = _0x9f5b01,
    _0x543652 = {
      vrbNH: "Auto",
      ErdEC: "FHD 1080p",
      pavLG: "HD 720p",
      rebXM: "480p",
      VQcrY: "360p",
      rLYJX: "240p",
      BlXRn: "144p",
      XviNE: function (_0x45e118, _0x8cf763) {
        return _0x45e118 + _0x8cf763;
      },
    };
  if (!_0x2091e1) return _0x543652["vrbNH"];
  const _0x596ba9 = {
    0x870: "4K",
    0x5a0: "2K",
    0x438: _0x543652["ErdEC"],
    0x2d0: _0x543652["pavLG"],
    0x1e0: _0x543652["rebXM"],
    0x168: _0x543652["VQcrY"],
    0xf0: _0x543652["rLYJX"],
    0x90: _0x543652["BlXRn"],
  };
  return _0x596ba9[_0x2091e1] || _0x543652["XviNE"](_0x2091e1, "p");
}
function formatQualityTitle(_0x48e1b9) {
  const _0x10759e = _0x9f5b01,
    _0x26d47b = {
      hftRj: "Auto",
      FkLdA: "FHD",
      qpZqi: "480p",
      HZFJf: "360p",
      CJTEn: "240p",
      ZlPPw: "144p",
      sMcYf: function (_0x1411e2, _0x37e7dc) {
        return _0x1411e2 + _0x37e7dc;
      },
    };
  if (!_0x48e1b9) return _0x26d47b["hftRj"];
  const _0xcedf19 = {
    0x870: "4K",
    0x5a0: "2K",
    0x438: _0x26d47b["FkLdA"],
    0x2d0: "HD",
    0x1e0: _0x26d47b["qpZqi"],
    0x168: _0x26d47b["HZFJf"],
    0xf0: _0x26d47b["CJTEn"],
    0x90: _0x26d47b["ZlPPw"],
  };
  return _0xcedf19[_0x48e1b9] || _0x26d47b["sMcYf"](_0x48e1b9, "p");
}
(playerInstance["on"]("visualQual" + "ity", function (_0x125d77) {
  const _0x234195 = _0x9f5b01,
    _0x517c7a = {
      fQWNO: function (_0x164b6b, _0x328b91) {
        return _0x164b6b === _0x328b91;
      },
      tjKWL: "Auto",
      mfjNL: function (_0x23572a, _0x324169) {
        return _0x23572a + _0x324169;
      },
      SlkgS: function (_0x2c24f6, _0x1402b7) {
        return _0x2c24f6 + _0x1402b7;
      },
      fAfJD: "Auto (",
      IsaqZ: function (_0xfe0b99, _0x1d38b1) {
        return _0xfe0b99(_0x1d38b1);
      },
      VpDgp: function (_0x19dff6, _0x41e98e) {
        return _0x19dff6(_0x41e98e);
      },
      NRIzk:
        ".jw-qualit" +
        "y-menu .cs" +
        "-item[data" +
        '-level="-1' +
        '"] .csi-ti' +
        "tle",
      eBtpp: ".jw-title-" + "quality",
      balzT: function (_0x4bae24, _0x3ef975) {
        return _0x4bae24(_0x3ef975);
      },
      TuURN: ".q-play",
    },
    _0x37f2ca = playerInstance["getCurrent" + "Quality"]();
  if (_0x517c7a["fQWNO"](_0x37f2ca, -(-0x3a * 0xa9 + 0x53 * -0x74 + 0x4be7))) {
    const _0x1da412 = _0x125d77["level"]["height"];
    let _0x2d6261 = _0x517c7a["tjKWL"];
    (_0x1da412 &&
      ((_0x2d6261 = _0x517c7a["mfjNL"](
        _0x517c7a["SlkgS"](
          _0x517c7a["fAfJD"],
          _0x517c7a["IsaqZ"](formatQualityLabel, _0x1da412),
        ),
        ")",
      )),
      _0x517c7a["VpDgp"]($, _0x517c7a["NRIzk"])["text"](_0x2d6261)),
      _0x517c7a["IsaqZ"]($, _0x517c7a["eBtpp"])["text"](_0x2d6261),
      _0x517c7a["balzT"]($, _0x517c7a["TuURN"])["text"](_0x2d6261));
  }
}),
  playerInstance["on"]("levelsChan" + "ged", function (_0x115554) {
    const _0x34e052 = _0x9f5b01,
      _0x130158 = {
        TmdBj: function (_0x3e1dd0, _0x25089b) {
          return _0x3e1dd0(_0x25089b);
        },
        ephNo: ".jw-qualit" + "y-menu .cs" + "-item",
        MgSkx: "active",
        ryWoe: function (_0x5c6e53, _0x427876, _0x18c866) {
          return _0x5c6e53(_0x427876, _0x18c866);
        },
      },
      _0x590434 = _0x115554["currentQua" + "lity"],
      _0x5a1b32 = playerInstance["getQuality" + "Levels"]();
    (_0x130158["TmdBj"]($, _0x130158["ephNo"])["removeClas" + "s"](
      _0x130158["MgSkx"],
    ),
      _0x130158["TmdBj"](
        $,
        ".jw-qualit" +
          "y-menu .cs" +
          "-item[data" +
          '-level="' +
          _0x590434 +
          "\x22]",
      )["addClass"](_0x130158["MgSkx"]),
      _0x130158["ryWoe"](updateQualityText, _0x590434, _0x5a1b32));
  }),
  $(document)["on"](
    "click",
    ".jw-qualit" + "y-menu .cs" + "-item",
    function () {
      const _0x5f4bad = _0x9f5b01,
        _0x5361b3 = {
          YjDtk: function (_0x251526, _0x1acb91) {
            return _0x251526(_0x1acb91);
          },
          wDaMO: "level",
          kMnZw: function (_0x31a514, _0x38dbf8) {
            return _0x31a514(_0x38dbf8);
          },
          vghEk: ".jw-qualit" + "y-menu .cs" + "-item",
          kvnej: "active",
          OdwJw: function (_0x31bd14, _0x21bf2b) {
            return _0x31bd14 === _0x21bf2b;
          },
          eFlim: "Auto",
          XjnlT: function (_0x3adbc0, _0x33a3a5) {
            return _0x3adbc0 + _0x33a3a5;
          },
          uQnYP: function (_0x568dd9, _0x5b0458) {
            return _0x568dd9 + _0x5b0458;
          },
          uLTcK: "Auto (",
          tjmxE: function (_0x2cbe50, _0x3f7fc5) {
            return _0x2cbe50(_0x3f7fc5);
          },
          FVxZA: ".jw-title-" + "quality",
          XOLWe: function (_0xe05064, _0x1261b0) {
            return _0xe05064(_0x1261b0);
          },
          QjNql: ".q-play",
          FDAqE: function (_0x209fea, _0x4a97ab, _0x43cef4) {
            return _0x209fea(_0x4a97ab, _0x43cef4);
          },
          ytOWs: function (_0x372daa, _0x7b75e8) {
            return _0x372daa(_0x7b75e8);
          },
          bszow: "#sub-quali" + "ty",
          upJay: ".content-s" + "lide",
        },
        _0x456c9b = _0x5361b3["YjDtk"](
          parseInt,
          _0x5361b3["YjDtk"]($, this)["data"](_0x5361b3["wDaMO"]),
        );
      (playerInstance["setCurrent" + "Quality"](_0x456c9b),
        _0x5361b3["kMnZw"]($, _0x5361b3["vghEk"])["removeClas" + "s"](
          _0x5361b3["kvnej"],
        ),
        _0x5361b3["YjDtk"]($, this)["addClass"](_0x5361b3["kvnej"]));
      if (
        _0x5361b3["OdwJw"](_0x456c9b, -(0x3d * -0x11 + -0x25 * 0x77 + 0x1541))
      ) {
        let _0x49d6e9 = _0x5361b3["eFlim"];
        const _0x11b9ce =
          playerInstance["getVisualQ" + "uality"] &&
          playerInstance["getVisualQ" + "uality"]();
        (_0x11b9ce &&
          _0x11b9ce["level"] &&
          _0x11b9ce["level"]["height"] &&
          (_0x49d6e9 = _0x5361b3["XjnlT"](
            _0x5361b3["uQnYP"](
              _0x5361b3["uLTcK"],
              _0x5361b3["kMnZw"](
                formatQualityTitle,
                _0x11b9ce["level"]["height"],
              ),
            ),
            ")",
          )),
          _0x5361b3["tjmxE"]($, _0x5361b3["FVxZA"])["text"](_0x49d6e9),
          _0x5361b3["XOLWe"]($, _0x5361b3["QjNql"])["text"](
            _0x5361b3["eFlim"],
          ));
      } else {
        const _0xd62f15 = playerInstance["getQuality" + "Levels"]();
        _0x5361b3["FDAqE"](updateQualityText, _0x456c9b, _0xd62f15);
      }
      (_0x5361b3["ytOWs"]($, _0x5361b3["bszow"])["hide"](),
        _0x5361b3["tjmxE"]($, _0x5361b3["upJay"])["show"]());
    },
  ),
  playerInstance["on"]("captionsLi" + "st", function (_0x2e8a26) {
    const _0x128421 = _0x9f5b01,
      _0x3fb097 = {
        UVuxs: function (_0x58cccb, _0x413800) {
          return _0x58cccb !== _0x413800;
        },
        ffgXJ: "None",
        qiBzs: function (_0x5b71c9, _0x10a047) {
          return _0x5b71c9 !== _0x10a047;
        },
        jsaqF: "Off",
        LrKps: function (_0x2a64ca, _0xfddb82) {
          return _0x2a64ca === _0xfddb82;
        },
        dYRUY: function (_0x3f624c, _0x25b816) {
          return _0x3f624c(_0x25b816);
        },
        GipEB: ".jw-main-c" + "aption-men" + "u",
        rcQqz: "active",
        pWVJG: ".jw-sub-ca" + "ption-menu",
        HDPOK: function (_0x159ca1, _0x24d890) {
          return _0x159ca1(_0x24d890);
        },
        iNllN: function (_0x454307, _0x3cf8c9) {
          return _0x454307(_0x3cf8c9);
        },
        zQkeG: "#sub-off",
        cAEab: function (_0x5b5bab, _0x5b0dad) {
          return _0x5b5bab > _0x5b0dad;
        },
        zgJoK: ".p_b-right" + " .item-sub",
        lExTQ: "d-none",
        xjqTd: "#sub-on",
      },
      _0x1a5148 = _0x2e8a26["tracks"];
    ((subtitleTracks = CONFIG["subtitles"]),
      _0x3fb097["dYRUY"]($, _0x3fb097["GipEB"])["empty"](),
      _0x3fb097["HDPOK"]($, _0x3fb097["pWVJG"])["empty"]());
    if (
      _0x3fb097["LrKps"](
        _0x1a5148["length"],
        0xc7 * 0x19 + -0x2f7 + -0x20f * 0x8,
      )
    ) {
      _0x3fb097["iNllN"]($, _0x3fb097["zQkeG"])["click"]();
      return;
    }
    if (_0x3fb097["cAEab"](_0x1a5148["length"], 0x13c0 + 0x15fc + -0x29bc)) {
      const _0x4f4cf8 =
        _0x1a5148["findIndex"]((_0x461cec) => _0x461cec["id"] === "default") ??
        -0xb3c * -0x1 + -0xcad + 0x172;
      (playerInstance["setCurrent" + "Captions"](_0x4f4cf8),
        _0x3fb097["iNllN"]($, _0x3fb097["zgJoK"])["removeClas" + "s"](
          _0x3fb097["lExTQ"],
        ));
    }
    (_0x3fb097["dYRUY"]($, _0x3fb097["GipEB"])["addClass"](_0x3fb097["rcQqz"]),
      _0x3fb097["HDPOK"]($, _0x3fb097["xjqTd"])["addClass"](_0x3fb097["rcQqz"]),
      _0x1a5148["forEach"]((_0x3cd5b4, _0x6c7b03) => {
        const _0x545102 = _0x128421;
        if (
          _0x3cd5b4["label"] &&
          _0x3fb097["UVuxs"](_0x3cd5b4["label"], _0x3fb097["ffgXJ"]) &&
          _0x3fb097["qiBzs"](_0x3cd5b4["label"], _0x3fb097["jsaqF"])
        ) {
          const _0x2f53e0 = _0x3fb097["LrKps"](
            _0x6c7b03,
            playerInstance["getCurrent" + "Captions"](),
          );
          (_0x3fb097["dYRUY"]($, _0x3fb097["GipEB"])["append"](
            "\n        <" +
              'a class="d' +
              "ropdown-it" +
              "em " +
              (_0x2f53e0 ? _0x3fb097["rcQqz"] : "") +
              ('" href="#"' + ' data="') +
              _0x6c7b03 +
              '" label="' +
              _0x3cd5b4["label"] +
              ('">\n       ' + "     <span" + ' class="s-' + 'title">') +
              _0x3cd5b4["label"] +
              ("</span>\n  " +
                "          " +
                "<div class" +
                '="w-check"' +
                "><i class=" +
                '"fa-solid ' +
                'fa-check">' +
                "</i></div>" +
                "\n        <" +
                "/a>\n      "),
          ),
            _0x3fb097["dYRUY"]($, _0x3fb097["pWVJG"])["append"](
              "\n        <" +
                'a class="d' +
                "ropdown-it" +
                'em" href="' +
                '#" data="' +
                _0x6c7b03 +
                '" label="' +
                _0x3cd5b4["label"] +
                ('">\n       ' + "     <span" + ' class="s-' + 'title">') +
                _0x3cd5b4["label"] +
                ("</span>\n  " +
                  "          " +
                  "<div class" +
                  '="w-check"' +
                  "><i class=" +
                  '"fa-solid ' +
                  'fa-check">' +
                  "</i></div>" +
                  "\n        <" +
                  "/a>\n      "),
            ));
        }
      }));
  }),
  $(document)["on"](
    "click",
    ".jw-main-c" + "aption-men" + "u.active ." + "dropdown-i" + "tem",
    function () {
      const _0x293154 = _0x9f5b01,
        _0x2e28a8 = {
          IqlrW: function (_0x4079c2, _0x4897bc) {
            return _0x4079c2(_0x4897bc);
          },
          xYihv: function (_0xeab36e, _0x4766a8) {
            return _0xeab36e(_0x4766a8);
          },
          tKlQt: "data",
          vvZhA: ".jw-main-c" + "aption-men" + "u .dropdow" + "n-item",
          PbGMn: "active",
          NRCMx: function (_0x5b5f99, _0x556412) {
            return _0x5b5f99(_0x556412);
          },
        },
        _0x2900dd = _0x2e28a8["IqlrW"](
          parseInt,
          _0x2e28a8["xYihv"]($, this)["attr"](_0x2e28a8["tKlQt"]),
        );
      (playerInstance["setCurrent" + "Captions"](_0x2900dd),
        _0x2e28a8["IqlrW"]($, _0x2e28a8["vvZhA"])["removeClas" + "s"](
          _0x2e28a8["PbGMn"],
        ),
        _0x2e28a8["NRCMx"]($, this)["addClass"](_0x2e28a8["PbGMn"]));
    },
  ),
  $(document)["on"](
    "click",
    ".jw-audio-" + "menu .drop" + "down-item",
    function () {
      const _0x487c2f = _0x9f5b01,
        _0x372c67 = {
          Wukss: function (_0x2bf04a, _0x110f66, _0x15773e) {
            return _0x2bf04a(_0x110f66, _0x15773e);
          },
          jWDrr: function (_0x2d1c92, _0x2fd059) {
            return _0x2d1c92(_0x2fd059);
          },
          RMVjK: ".jw-audio-" + "menu .drop" + "down-item",
          SryJH: "active",
          qUkdO: function (_0x535e64, _0x3c4037) {
            return _0x535e64(_0x3c4037);
          },
          ZwHRh: function (_0x1a9b78, _0x403e3a, _0x2c7c1c) {
            return _0x1a9b78(_0x403e3a, _0x2c7c1c);
          },
          QYNzQ: function (_0xb3421d, _0x3fe3c6) {
            return _0xb3421d(_0x3fe3c6);
          },
          poEQM: "data",
          ShDWa: "mySecretKe" + "y2024",
          JiDnt: "playlistIt" + "em",
          bWCxq: "applicatio" + "n/x-mpegUR" + "L",
        };
      (_0x372c67["jWDrr"]($, _0x372c67["RMVjK"])["removeClas" + "s"](
        _0x372c67["SryJH"],
      ),
        _0x372c67["qUkdO"]($, this)["addClass"](_0x372c67["SryJH"]));
      const _0x3dd1ce = _0x372c67["ZwHRh"](
          hexXorDecrypt,
          _0x372c67["QYNzQ"]($, this)["attr"](_0x372c67["poEQM"]),
          _0x372c67["ShDWa"],
        ),
        _0x3b1b97 =
          playerInstance["getPositio" + "n"]() ||
          -0x7a9 + 0x1 * -0xe31 + -0xaed * -0x2;
      (playerInstance["once"](_0x372c67["JiDnt"], function () {
        const _0x2e122a = _0x487c2f;
        _0x372c67["Wukss"](
          setTimeout,
          function () {
            const _0x56ef2a = _0x2e122a;
            (playerInstance["seek"](_0x3b1b97), playerInstance["play"]());
          },
          0x1 * -0x154f + -0x137f * -0x1 + 0x2fc * 0x1,
        );
      }),
        playerInstance["load"]({
          file: _0x3dd1ce,
          type: _0x372c67["bWCxq"],
          autostart: !![],
        }));
    },
  ),
  playerInstance["on"]("complete", function () {
    const _0x567774 = _0x9f5b01,
      _0x493202 = {
        kJoyN: function (_0x1bd843, _0x422446) {
          return _0x1bd843 !== _0x422446;
        },
        EllKL: "undefined",
        CeWDA: "Your brows" + "er is too " + "old!",
      };
    _0x493202["kJoyN"](typeof Storage, _0x493202["EllKL"])
      ? localStorage["removeItem"](resumeData)
      : console["log"](_0x493202["CeWDA"]);
  }),
  $(document)["on"]("click", "#toggle-fo" + "nt", function () {
    const _0x4c8bd2 = _0x9f5b01,
      _0x1eb332 = {
        STtEK: function (_0x4653dd, _0x4d561e) {
          return _0x4653dd(_0x4d561e);
        },
        uNmSh: "#sub-color",
        icJPv: function (_0x1b596c, _0xcea677) {
          return _0x1b596c == _0xcea677;
        },
        hMQDu: ".sub-color",
        hCcPD: function (_0x2470f0, _0x159e00) {
          return _0x2470f0(_0x159e00);
        },
        HdHvQ: ".player-dm" + ":has(.cont" + "ent-slide)",
        gzcIZ: function (_0x2cdee2, _0x9e473a) {
          return _0x2cdee2(_0x9e473a);
        },
        MfyXm: ".sub-slide" + ", .content" + "-slide",
      };
    (_0x1eb332["icJPv"](
      _0x1eb332["STtEK"]($, _0x1eb332["hMQDu"])["length"],
      0x1f * -0x1f + -0x1 * 0x118d + 0x154e,
    ) &&
      _0x1eb332["hCcPD"]($, _0x1eb332["HdHvQ"])["append"](
        '<div id="s' +
          'ub-color" ' +
          'class="sub' +
          "-slide lev" +
          "el-2 sub-c" +
          'olor" styl' +
          'e="display' +
          ': none;">\n' +
          "      <div" +
          ' class="dr' +
          "opdown-tit" +
          'le">\n     ' +
          "   <span c" +
          'lass="s-ti' +
          "tle sub-ba" +
          "ck line-ce" +
          'nter">\n   ' +
          "       <i " +
          'class="fa-' +
          "solid fa-a" +
          'ngle-left"' +
          "></i>\n    " +
          "      Phụ " +
          "đề chính /" +
          " Màu chữ\n " +
          "       </s" +
          "pan>\n     " +
          " </div>\n  " +
          "    <div c" +
          'lass="cs-l' +
          "ist jw-pla" +
          "yback-rate" +
          '">\n       ' +
          "\x20" +
          arrayColor["map"]((_0x3fa6c8) =>
            renderItemColor(_0x3fa6c8["color"], _0x3fa6c8["label"], "color"),
          )["join"]("") +
          ("\n      </d" + "iv>\n    </" + "div>"),
      ),
      _0x1eb332["gzcIZ"]($, _0x1eb332["MfyXm"])["fadeOut"](
        0x255f + -0x2526 + -0x39,
        function () {
          const _0x2c101a = _0x4c8bd2;
          _0x1eb332["STtEK"]($, _0x1eb332["uNmSh"])["fadeIn"](
            0x1 * 0x1273 + 0x21db + -0xce * 0x41,
          );
        },
      ));
  }),
  $(document)["on"]("click", "#toggle-co" + "lor-sub", function () {
    const _0xcb6e62 = _0x9f5b01,
      _0xf92b7b = {
        JOEKP: function (_0x2232f5, _0x3d2ce3) {
          return _0x2232f5(_0x3d2ce3);
        },
        PHXMI: "#sub-color" + "-sub",
        LqaKL: function (_0x5c4add, _0x41018e) {
          return _0x5c4add == _0x41018e;
        },
        mxUoV: function (_0x4626af, _0x583be0) {
          return _0x4626af(_0x583be0);
        },
        IOdei: ".sub-color" + "-sub",
        uHjgh: function (_0x4b41a5, _0x3e88e5) {
          return _0x4b41a5(_0x3e88e5);
        },
        XzbVb: ".player-dm" + ":has(.cont" + "ent-slide)",
        pvZoc: ".sub-slide" + ", .content" + "-slide",
      };
    (_0xf92b7b["LqaKL"](
      _0xf92b7b["mxUoV"]($, _0xf92b7b["IOdei"])["length"],
      0x583 + 0x18c * -0x7 + 0x551,
    ) &&
      _0xf92b7b["uHjgh"]($, _0xf92b7b["XzbVb"])["append"](
        '<div id="s' +
          "ub-color-s" +
          'ub" class=' +
          '"sub-slide' +
          " level-2 s" +
          "ub-color-s" +
          'ub" style=' +
          '"display: ' +
          'none;">\n  ' +
          "    <div c" +
          'lass="drop' +
          "down-title" +
          '">\n       ' +
          " <span cla" +
          'ss="s-titl' +
          "e sub-back" +
          " line-cent" +
          'er">\n     ' +
          "     <i cl" +
          'ass="fa-so' +
          "lid fa-ang" +
          'le-left"><' +
          "/i>\n      " +
          "    Song n" +
          "gữ / Màu c" +
          "hữ\n       " +
          " </span>\n " +
          "     </div" +
          ">\n      <d" +
          'iv class="' +
          "cs-list jw" +
          "-playback-" +
          'rate">\n   ' +
          "     " +
          arrayColor["map"]((_0x40c1c4) =>
            renderItemColor(
              _0x40c1c4["color"],
              _0x40c1c4["label"],
              "color",
              "white",
              currentConfigSub,
            ),
          )["join"]("") +
          ("\n      </d" + "iv>\n    </" + "div>"),
      ),
      _0xf92b7b["mxUoV"]($, _0xf92b7b["pvZoc"])["fadeOut"](
        0x5 * 0x43c + 0x577 * -0x3 + -0x4c7,
        function () {
          const _0x583d22 = _0xcb6e62;
          _0xf92b7b["JOEKP"]($, _0xf92b7b["PHXMI"])["fadeIn"](
            -0x7c * -0x49 + 0x6b7 * 0x1 + -0x2a13,
          );
        },
      ));
  }),
  $(document)["on"]("click", ".sub-color" + "-sub .cs-i" + "tem", function () {
    const _0x4d29e1 = _0x9f5b01,
      _0x488873 = {
        QMrfT: function (_0x291092, _0x658fea) {
          return _0x291092(_0x658fea);
        },
        Dorfu: "#sub-capti" + "on",
        JGwwX: function (_0x412fe2, _0x98ea18) {
          return _0x412fe2(_0x98ea18);
        },
        JMqdB: "data",
        jZgOz: function (_0x359dfe, _0x160fc0) {
          return _0x359dfe(_0x160fc0);
        },
        mfjon: "span[lang=" + '"su"]',
        YUITB: "color",
        ZtUOw: function (_0x16c1a2, _0x2b2a99) {
          return _0x16c1a2(_0x2b2a99);
        },
        zcHbe: ".sub-color" + "-sub .cs-i" + "tem",
        BwriO: "active",
        oJerT: "a[data-typ" + 'e="color-s' + 'ub"] .csi-' + "current",
        tqjrm: function (_0x6078d8, _0x46e05a) {
          return _0x6078d8(_0x46e05a);
        },
        gXlDG: "#sub-color" + "-sub",
        ACvIQ: "#video_pop" + " .player-d" + "m",
        NSRmN: "display",
        lrgGt: "none",
      },
      _0x322a14 = _0x488873["JGwwX"]($, this)["attr"](_0x488873["JMqdB"]);
    currentConfigSub["color"] = _0x322a14;
    const _0x50cbe5 = _0x488873["jZgOz"]($, _0x488873["mfjon"]);
    (_0x50cbe5["css"](_0x488873["YUITB"], _0x322a14),
      _0x488873["ZtUOw"]($, _0x488873["zcHbe"])["removeClas" + "s"](
        _0x488873["BwriO"],
      ),
      _0x488873["QMrfT"](
        $,
        ".sub-color" + "-sub .cs-i" + 'tem[data="' + _0x322a14 + "\x22]",
      )["addClass"](_0x488873["BwriO"]),
      _0x488873["ZtUOw"]($, _0x488873["oJerT"])["html"](
        "<div class" +
          '="csi-colo' +
          'r" style="' +
          "background" +
          "-color: " +
          _0x322a14 +
          (';"></div><' + "span>") +
          arrayColor["find"]((_0x34a64e) => _0x34a64e["color"] === _0x322a14)[
            "label"
          ] +
          ("</span><i " +
            'class="fa-' +
            "solid fa-a" +
            "ngle-right" +
            '"></i>'),
      ),
      _0x488873["tqjrm"]($, _0x488873["gXlDG"])["fadeOut"](
        -0x1cb5 + 0x7a8 * 0x2 + 0xd65,
        function () {
          const _0x40170c = _0x4d29e1;
          _0x488873["QMrfT"]($, _0x488873["Dorfu"])["fadeIn"](
            -0xe9c + -0x15fa + 0x2496 * 0x1,
          );
        },
      ),
      _0x488873["JGwwX"]($, _0x488873["ACvIQ"])["css"](
        _0x488873["NSRmN"],
        _0x488873["lrgGt"],
      ));
  }),
  $(document)["on"]("click", ".sub-color" + " .cs-item", function () {
    const _0x491040 = _0x9f5b01,
      _0x5829a1 = {
        TZLhK: function (_0x513b76, _0x6ec437) {
          return _0x513b76(_0x6ec437);
        },
        IXtyS: "#sub-capti" + "on",
        gJtio: function (_0x3806cd, _0x5ef037) {
          return _0x3806cd(_0x5ef037);
        },
        TcbQz: "data",
        kFSnp: function (_0x3bedc1, _0x575b53) {
          return _0x3bedc1(_0x575b53);
        },
        mUlMT: ".sub-color" + " .cs-item",
        LUXSp: "active",
        hIqgR: function (_0x2cb2b7, _0x2c0b6f) {
          return _0x2cb2b7(_0x2c0b6f);
        },
        rPsip: "a[data-typ" + 'e="color"]' + " .csi-curr" + "ent",
        OQzIO: "#sub-color",
        rzNph: function (_0x4bfb8b, _0x54afaf) {
          return _0x4bfb8b(_0x54afaf);
        },
        NmcDu: "#video_pop" + " .player-d" + "m",
        cAnOB: "display",
        Ngups: "none",
      },
      _0x5dd39a = _0x5829a1["gJtio"]($, this)["attr"](_0x5829a1["TcbQz"]),
      _0x5dcff0 = playerInstance["getConfig"]()["captions"];
    (playerInstance["setCaption" + "s"]({ ..._0x5dcff0, color: _0x5dd39a }),
      _0x5829a1["kFSnp"]($, _0x5829a1["mUlMT"])["removeClas" + "s"](
        _0x5829a1["LUXSp"],
      ),
      _0x5829a1["kFSnp"](
        $,
        ".sub-color" + " .cs-item[" + 'data="' + _0x5dd39a + "\x22]",
      )["addClass"](_0x5829a1["LUXSp"]),
      _0x5829a1["hIqgR"]($, _0x5829a1["rPsip"])["html"](
        "<div class" +
          '="csi-colo' +
          'r" style="' +
          "background" +
          "-color: " +
          _0x5dd39a +
          (';"></div><' + "span>") +
          arrayColor["find"]((_0x5c79e1) => _0x5c79e1["color"] === _0x5dd39a)[
            "label"
          ] +
          ("</span><i " +
            'class="fa-' +
            "solid fa-a" +
            "ngle-right" +
            '"></i>'),
      ),
      _0x5829a1["gJtio"]($, _0x5829a1["OQzIO"])["fadeOut"](
        0x246d + 0x14e5 + -0x3952,
        function () {
          const _0x533f87 = _0x491040;
          _0x5829a1["TZLhK"]($, _0x5829a1["IXtyS"])["fadeIn"](
            -0x1ae9 * -0x1 + 0x1871 + -0x335a,
          );
        },
      ),
      _0x5829a1["rzNph"]($, _0x5829a1["NmcDu"])["css"](
        _0x5829a1["cAnOB"],
        _0x5829a1["Ngups"],
      ));
  }),
  $(document)["on"]("click", "#toggle-si" + "ze", function () {
    const _0x771312 = _0x9f5b01,
      _0x1b94b2 = {
        QMTAv: function (_0x4df6e6, _0x5859df) {
          return _0x4df6e6(_0x5859df);
        },
        IMamH: "#sub-size",
        KDcZa: function (_0x2ed971, _0x3bd750) {
          return _0x2ed971 == _0x3bd750;
        },
        GlOOh: ".player-dm" + ":has(.cont" + "ent-slide)",
        zHFcc: ".sub-slide" + ", .content" + "-slide",
      };
    (_0x1b94b2["KDcZa"](
      _0x1b94b2["QMTAv"]($, _0x1b94b2["IMamH"])["length"],
      -0x22ac + 0x21 * -0x14 + 0x2540,
    ) &&
      _0x1b94b2["QMTAv"]($, _0x1b94b2["GlOOh"])["append"](
        '<div id="s' +
          'ub-size" c' +
          'lass="sub-' +
          "slide leve" +
          "l-2 sub-si" +
          'ze" style=' +
          '"display: ' +
          'none;">\n  ' +
          "    <div c" +
          'lass="drop' +
          "down-title" +
          '">\n       ' +
          " <span cla" +
          'ss="s-titl' +
          "e sub-back" +
          " line-cent" +
          'er">\n     ' +
          "     <i cl" +
          'ass="fa-so' +
          "lid fa-ang" +
          'le-left"><' +
          "/i>\n      " +
          "    Phụ đề" +
          " chính / C" +
          "ỡ chữ\n    " +
          "    </span" +
          ">\n      </" +
          "div>\n     " +
          " <div clas" +
          's="cs-list' +
          " jw-playba" +
          'ck-rate">\n' +
          "        " +
          arraySize["map"]((_0x1f3290) =>
            renderItemFont(_0x1f3290["size"], _0x1f3290["label"], "fontSize"),
          )["join"]("") +
          ("\n      </d" + "iv>\n    </" + "div>"),
      ),
      _0x1b94b2["QMTAv"]($, _0x1b94b2["zHFcc"])["fadeOut"](
        -0x1230 + 0x7 * -0x557 + 0x3791,
        function () {
          const _0x15af1c = _0x771312;
          _0x1b94b2["QMTAv"]($, _0x1b94b2["IMamH"])["fadeIn"](
            -0x13a * -0x9 + -0x1a86 * -0x1 + -0x2590,
          );
        },
      ));
  }),
  $(document)["on"]("click", "#toggle-si" + "ze-sub", function () {
    const _0x27f6b5 = _0x9f5b01,
      _0x4d372d = {
        XUZgT: function (_0x256ad7, _0x3be390) {
          return _0x256ad7(_0x3be390);
        },
        OVnPe: "#sub-size-" + "sub",
        QOXdA: function (_0x34406e, _0x3315da) {
          return _0x34406e == _0x3315da;
        },
        olTbr: ".player-dm" + ":has(.cont" + "ent-slide)",
        ZJFCX: function (_0x267ff4, _0x4f11c3) {
          return _0x267ff4(_0x4f11c3);
        },
        ndlMU: ".sub-slide" + ", .content" + "-slide",
      };
    (_0x4d372d["QOXdA"](
      _0x4d372d["XUZgT"]($, _0x4d372d["OVnPe"])["length"],
      0x22b4 + 0xd49 + -0x2ffd,
    ) &&
      _0x4d372d["XUZgT"]($, _0x4d372d["olTbr"])["append"](
        '<div id="s' +
          "ub-size-su" +
          'b" class="' +
          "sub-slide " +
          "level-2 su" +
          "b-size-sub" +
          '" style="d' +
          "isplay: no" +
          'ne;">\n    ' +
          "  <div cla" +
          'ss="dropdo' +
          'wn-title">' +
          "\n        <" +
          "span class" +
          '="s-title ' +
          "sub-back l" +
          "ine-center" +
          '">\n       ' +
          "   <i clas" +
          's="fa-soli' +
          "d fa-angle" +
          '-left"></i' +
          ">\n        " +
          "  Song ngữ" +
          " / Cỡ chữ\n" +
          "        </" +
          "span>\n    " +
          "  </div>\n " +
          "     <div " +
          'class="cs-' +
          "list jw-pl" +
          "ayback-rat" +
          'e">\n      ' +
          "\x20\x20" +
          arraySizeFont["map"]((_0x406c2c) =>
            renderItemFont(
              _0x406c2c["size"],
              _0x406c2c["label"],
              "size",
              currentConfigSub,
            ),
          )["join"]("") +
          ("\n      </d" + "iv>\n    </" + "div>"),
      ),
      _0x4d372d["ZJFCX"]($, _0x4d372d["ndlMU"])["fadeOut"](
        0x1 * 0x1b76 + -0x239b * 0x1 + -0x8b * -0xf,
        function () {
          const _0x4e10cf = _0x27f6b5;
          _0x4d372d["XUZgT"]($, _0x4d372d["OVnPe"])["fadeIn"](
            0x867 + -0x1c3a + -0x19 * -0xcb,
          );
        },
      ));
  }),
  $(document)["on"]("click", ".sub-size " + ".cs-item", function () {
    const _0x145793 = _0x9f5b01,
      _0x419a95 = {
        hmtkv: function (_0x32f175, _0x433121) {
          return _0x32f175(_0x433121);
        },
        qRcEf: "#sub-capti" + "on",
        jFCLZ: function (_0x2411f7, _0x5c509b) {
          return _0x2411f7(_0x5c509b);
        },
        sqikB: "data",
        ZgkCb: ".sub-size " + ".cs-item",
        pFTOZ: "active",
        kGisQ: function (_0x105ec4, _0x36475d) {
          return _0x105ec4(_0x36475d);
        },
        DbkRL: function (_0x546695, _0x3d828a) {
          return _0x546695(_0x3d828a);
        },
        GlyEv: "a[data-typ" + 'e="fontSiz' + 'e"] .csi-c' + "urrent spa" + "n",
        PLjbK: "#sub-size",
        oxCHf: "#video_pop" + " .player-d" + "m",
        Cqxlg: "display",
        txHJk: "none",
      },
      _0x3bab65 = _0x419a95["jFCLZ"]($, this)["attr"](_0x419a95["sqikB"]),
      _0x575514 = playerInstance["getConfig"]()["captions"];
    (playerInstance["setCaption" + "s"]({ ..._0x575514, fontSize: _0x3bab65 }),
      _0x419a95["jFCLZ"]($, _0x419a95["ZgkCb"])["removeClas" + "s"](
        _0x419a95["pFTOZ"],
      ),
      _0x419a95["kGisQ"](
        $,
        ".sub-size " + ".cs-item[d" + 'ata="' + _0x3bab65 + "\x22]",
      )["addClass"](_0x419a95["pFTOZ"]),
      _0x419a95["DbkRL"]($, _0x419a95["GlyEv"])["text"](
        arraySize["find"]((_0x18c0db) => _0x18c0db["size"] === _0x3bab65)[
          "label"
        ],
      ),
      _0x419a95["hmtkv"]($, _0x419a95["PLjbK"])["fadeOut"](
        0xb35 * -0x3 + -0xf * 0xf4 + 0x57 * 0x8d,
        function () {
          const _0x29ec1a = _0x145793;
          _0x419a95["hmtkv"]($, _0x419a95["qRcEf"])["fadeIn"](
            -0x8b * 0x4 + 0x3d6 * 0x7 + -0x1b * 0xea,
          );
        },
      ),
      _0x419a95["kGisQ"]($, _0x419a95["oxCHf"])["css"](
        _0x419a95["Cqxlg"],
        _0x419a95["txHJk"],
      ));
  }),
  $(document)["on"]("click", ".sub-size-" + "sub .cs-it" + "em", function () {
    const _0x173756 = _0x9f5b01,
      _0x308e3b = {
        NEVSo: function (_0x4ec768, _0x33d115) {
          return _0x4ec768(_0x33d115);
        },
        klRxU: "#sub-capti" + "on",
        YaTMj: function (_0x55a989, _0x458a64) {
          return _0x55a989(_0x458a64);
        },
        QELVV: "data",
        jYCCH: "span[lang=" + '"su"]',
        aUvxT: "font-size",
        akMUi: function (_0x404b81, _0x43e906) {
          return _0x404b81 + _0x43e906;
        },
        GbLIo: ".sub-size-" + "sub .cs-it" + "em",
        sVYNO: "active",
        KYvBE: function (_0x257135, _0xe75de1) {
          return _0x257135(_0xe75de1);
        },
        QRRWa: function (_0x2f64d3, _0x34e308) {
          return _0x2f64d3(_0x34e308);
        },
        HMtvF:
          "a[data-typ" + 'e="fontSiz' + 'e-sub"] .c' + "si-current" + " span",
        Vxnjz: "#sub-size-" + "sub",
        oVuBV: "#video_pop" + " .player-d" + "m",
        AdPGU: "display",
        mmsQb: "none",
      },
      _0x1f3483 = _0x308e3b["YaTMj"]($, this)["attr"](_0x308e3b["QELVV"]);
    currentConfigSub["size"] = _0x1f3483;
    const _0x57aa3a = _0x308e3b["NEVSo"]($, _0x308e3b["jYCCH"]);
    (_0x57aa3a["css"](_0x308e3b["aUvxT"], _0x308e3b["akMUi"](_0x1f3483, "%")),
      _0x308e3b["NEVSo"]($, _0x308e3b["GbLIo"])["removeClas" + "s"](
        _0x308e3b["sVYNO"],
      ),
      _0x308e3b["KYvBE"](
        $,
        ".sub-size-" + "sub .cs-it" + 'em[data="' + _0x1f3483 + "\x22]",
      )["addClass"](_0x308e3b["sVYNO"]),
      _0x308e3b["QRRWa"]($, _0x308e3b["HMtvF"])["text"](
        arraySizeFont["find"]((_0xd0f8ef) => _0xd0f8ef["size"] === _0x1f3483)[
          "label"
        ],
      ),
      _0x308e3b["YaTMj"]($, _0x308e3b["Vxnjz"])["fadeOut"](
        -0x1e95 + -0x6a6 + -0x1b * -0x161,
        function () {
          const _0x214c15 = _0x173756;
          _0x308e3b["NEVSo"]($, _0x308e3b["klRxU"])["fadeIn"](
            -0x10 * -0x47 + -0x18a * 0x12 + 0x1744,
          );
        },
      ),
      _0x308e3b["QRRWa"]($, _0x308e3b["oVuBV"])["css"](
        _0x308e3b["AdPGU"],
        _0x308e3b["mmsQb"],
      ));
  }),
  $(document)["on"]("click", "#toggle-op" + "acity-font", function () {
    const _0x3c7302 = _0x9f5b01,
      _0x1c79ce = {
        iZtoX: function (_0x266768, _0x3062fe) {
          return _0x266768(_0x3062fe);
        },
        jKadb: "#sub-opaci" + "ty-font",
        VcfaD: function (_0xd8b080, _0x45890c) {
          return _0xd8b080 == _0x45890c;
        },
        OeaOy: function (_0xffd09, _0x78f4a4) {
          return _0xffd09(_0x78f4a4);
        },
        CoRtg: function (_0x1f3944, _0x249682) {
          return _0x1f3944(_0x249682);
        },
        qAKEJ: ".player-dm" + ":has(.cont" + "ent-slide)",
        AivBk: ".sub-slide" + ", .content" + "-slide",
      };
    (_0x1c79ce["VcfaD"](
      _0x1c79ce["OeaOy"]($, _0x1c79ce["jKadb"])["length"],
      0x1 * -0xa4e + 0x2c * -0xb3 + 0x7 * 0x5de,
    ) &&
      _0x1c79ce["CoRtg"]($, _0x1c79ce["qAKEJ"])["append"](
        '<div id="s' +
          "ub-opacity" +
          '-font" cla' +
          'ss="sub-sl' +
          "ide level-" +
          "2 sub-opac" +
          'ity-font" ' +
          'style="dis' +
          "play: none" +
          ';">\n      ' +
          "<div class" +
          '="dropdown' +
          '-title">\n ' +
          "       <sp" +
          'an class="' +
          "s-title su" +
          "b-back lin" +
          'e-center">' +
          "\n         " +
          " <i class=" +
          '"fa-solid ' +
          "fa-angle-l" +
          'eft"></i>\n' +
          "          " +
          "Phụ đề chí" +
          "nh / Độ tr" +
          "ong\n      " +
          "  </span>\n" +
          "      </di" +
          "v>\n      <" +
          "div class=" +
          '"cs-list j' +
          "w-playback" +
          '-rate">\n  ' +
          "      " +
          arrayOpacity["map"]((_0x76e25a) =>
            renderItemFont(
              _0x76e25a["opacity"],
              _0x76e25a["label"],
              "fontOpacit" + "y",
            ),
          )["join"]("") +
          ("\n      </d" + "iv>\n    </" + "div>"),
      ),
      _0x1c79ce["CoRtg"]($, _0x1c79ce["AivBk"])["fadeOut"](
        -0x4 * 0x78d + 0x5 * -0x5cd + -0x3b35 * -0x1,
        function () {
          const _0x2bf36f = _0x3c7302;
          _0x1c79ce["iZtoX"]($, _0x1c79ce["jKadb"])["fadeIn"](
            -0x49 * 0x35 + -0x205f * 0x1 + 0x2 * 0x17be,
          );
        },
      ));
  }),
  $(document)["on"]("click", "#toggle-op" + "acity-sub", function () {
    const _0x3cda12 = _0x9f5b01,
      _0x37a81c = {
        SrKfr: function (_0x139d6e, _0x2d8234) {
          return _0x139d6e(_0x2d8234);
        },
        UNcec: "#sub-opaci" + "ty-font-su" + "b",
        BkUrr: function (_0x31e1e5, _0x2b7c70) {
          return _0x31e1e5 == _0x2b7c70;
        },
        bljqz: function (_0x514e46, _0xd02662) {
          return _0x514e46(_0xd02662);
        },
        LSIFg: function (_0x488021, _0x48ea4c) {
          return _0x488021(_0x48ea4c);
        },
        eOArX: ".player-dm" + ":has(.cont" + "ent-slide)",
        aAEwi: function (_0x46273c, _0x5e93de) {
          return _0x46273c(_0x5e93de);
        },
        NOlXs: ".sub-slide" + ", .content" + "-slide",
      };
    (_0x37a81c["BkUrr"](
      _0x37a81c["bljqz"]($, _0x37a81c["UNcec"])["length"],
      0x8ae * 0x1 + -0x23e2 + 0x1b34,
    ) &&
      _0x37a81c["LSIFg"]($, _0x37a81c["eOArX"])["append"](
        '<div id="s' +
          "ub-opacity" +
          '-font-sub"' +
          ' class="su' +
          "b-slide le" +
          "vel-2 sub-" +
          "opacity-fo" +
          'nt-sub" st' +
          'yle="displ' +
          'ay: none;"' +
          ">\n      <d" +
          'iv class="' +
          "dropdown-t" +
          'itle">\n   ' +
          "     <span" +
          ' class="s-' +
          "title sub-" +
          "back line-" +
          'center">\n ' +
          "         <" +
          'i class="f' +
          "a-solid fa" +
          "-angle-lef" +
          't"></i>\n  ' +
          "        So" +
          "ng ngữ / Đ" +
          "ộ trong\n  " +
          "      </sp" +
          "an>\n      " +
          "</div>\n   " +
          "   <div cl" +
          'ass="cs-li' +
          "st jw-play" +
          'back-rate"' +
          ">\n        " +
          arrayOpacity["map"]((_0x37f363) =>
            renderItemFont(
              _0x37f363["opacity"],
              _0x37f363["label"],
              "opacity",
              currentConfigSub,
            ),
          )["join"]("") +
          ("\n      </d" + "iv>\n    </" + "div>"),
      ),
      _0x37a81c["aAEwi"]($, _0x37a81c["NOlXs"])["fadeOut"](
        0x1a6 + -0x1eaa + 0x1d04,
        function () {
          const _0x14ac1f = _0x3cda12;
          _0x37a81c["SrKfr"]($, _0x37a81c["UNcec"])["fadeIn"](
            0xb * 0x221 + 0x125b + -0x29c6,
          );
        },
      ));
  }),
  $(document)["on"](
    "click",
    ".sub-opaci" + "ty-font .c" + "s-item",
    function () {
      const _0x206eec = _0x9f5b01,
        _0x19ce01 = {
          BknGl: function (_0x3fec4e, _0x55da05) {
            return _0x3fec4e(_0x55da05);
          },
          XmLhD: "#sub-capti" + "on",
          lzuPb: "data",
          rxQab: ".sub-opaci" + "ty-font .c" + "s-item",
          clhTI: "active",
          avZGf: function (_0x8e3620, _0x47df37) {
            return _0x8e3620(_0x47df37);
          },
          dhVBo:
            "a[data-typ" + 'e="fontOpa' + 'city"] .cs' + "i-current " + "span",
          xSPzQ: function (_0x340e5d, _0x3745c1) {
            return _0x340e5d(_0x3745c1);
          },
          NnRVN: "#sub-opaci" + "ty-font",
          QToYy: function (_0x316c94, _0x130b81) {
            return _0x316c94(_0x130b81);
          },
          WjHKq: "#video_pop" + " .player-d" + "m",
          mYAjZ: "display",
          ZBozY: "none",
        },
        _0x214c33 = _0x19ce01["BknGl"]($, this)["attr"](_0x19ce01["lzuPb"]),
        _0x16e44a = playerInstance["getConfig"]()["captions"];
      (playerInstance["setCaption" + "s"]({
        ..._0x16e44a,
        fontOpacity: _0x19ce01["BknGl"](parseInt, _0x214c33),
      }),
        _0x19ce01["BknGl"]($, _0x19ce01["rxQab"])["removeClas" + "s"](
          _0x19ce01["clhTI"],
        ),
        _0x19ce01["BknGl"](
          $,
          ".sub-opaci" +
            "ty-font .c" +
            "s-item[dat" +
            'a="' +
            _0x214c33 +
            "\x22]",
        )["addClass"](_0x19ce01["clhTI"]),
        _0x19ce01["avZGf"]($, _0x19ce01["dhVBo"])["text"](
          arrayOpacity["find"](
            (_0x557b8a) => _0x557b8a["opacity"] === _0x214c33,
          )["label"],
        ),
        _0x19ce01["xSPzQ"]($, _0x19ce01["NnRVN"])["fadeOut"](
          -0x1 * 0x1961 + 0xcaa * 0x2 + 0xd,
          function () {
            const _0x23af74 = _0x206eec;
            _0x19ce01["BknGl"]($, _0x19ce01["XmLhD"])["fadeIn"](
              -0x4d0 + -0x1199 + 0x1669,
            );
          },
        ),
        _0x19ce01["QToYy"]($, _0x19ce01["WjHKq"])["css"](
          _0x19ce01["mYAjZ"],
          _0x19ce01["ZBozY"],
        ));
    },
  ),
  $(document)["on"](
    "click",
    ".sub-opaci" + "ty-font-su" + "b .cs-item",
    function () {
      const _0x4584e4 = _0x9f5b01,
        _0x58618d = {
          WZNkr: function (_0x3bd499, _0x3bb629) {
            return _0x3bd499(_0x3bb629);
          },
          nKVoz: "#sub-capti" + "on",
          YQJFg: function (_0x57aa92, _0x741e18) {
            return _0x57aa92(_0x741e18);
          },
          WoqYd: "data",
          EcUxa: "span[lang=" + '"su"]',
          XjAtW: "opacity",
          tyZKy: function (_0x598cf5, _0x4c0019) {
            return _0x598cf5 + _0x4c0019;
          },
          AdOOv: function (_0x308d27, _0x4d7a6c) {
            return _0x308d27(_0x4d7a6c);
          },
          asxOI: ".sub-opaci" + "ty-font-su" + "b .cs-item",
          Sfdpr: "active",
          KWrTo: function (_0x266df4, _0x133077) {
            return _0x266df4(_0x133077);
          },
          sPwOP: function (_0x2a78c7, _0x24140b) {
            return _0x2a78c7(_0x24140b);
          },
          vLatw:
            "a[data-typ" +
            'e="fontOpa' +
            'city-sub"]' +
            " .csi-curr" +
            "ent span",
          jFNjc: function (_0x5599f4, _0x4b6b9b) {
            return _0x5599f4(_0x4b6b9b);
          },
          xjGdB: "#sub-opaci" + "ty-font-su" + "b",
          eTAFu: "#video_pop" + " .player-d" + "m",
          AwTEg: "display",
          aRWRf: "none",
        },
        _0xae3dff = _0x58618d["YQJFg"]($, this)["attr"](_0x58618d["WoqYd"]);
      currentConfigSub["opacity"] = _0xae3dff;
      const _0x37fed3 = _0x58618d["WZNkr"]($, _0x58618d["EcUxa"]);
      (_0x37fed3["css"](_0x58618d["XjAtW"], _0x58618d["tyZKy"](_0xae3dff, "%")),
        _0x58618d["AdOOv"]($, _0x58618d["asxOI"])["removeClas" + "s"](
          _0x58618d["Sfdpr"],
        ),
        _0x58618d["KWrTo"](
          $,
          ".sub-opaci" +
            "ty-font-su" +
            "b .cs-item" +
            '[data="' +
            _0xae3dff +
            "\x22]",
        )["addClass"](_0x58618d["Sfdpr"]),
        _0x58618d["sPwOP"]($, _0x58618d["vLatw"])["text"](
          arrayOpacity["find"](
            (_0x1e8d2a) => _0x1e8d2a["opacity"] === _0xae3dff,
          )["label"],
        ),
        _0x58618d["jFNjc"]($, _0x58618d["xjGdB"])["fadeOut"](
          -0xc8e * 0x2 + -0x1ef3 + 0x71 * 0x7f,
          function () {
            const _0x5c287f = _0x4584e4;
            _0x58618d["WZNkr"]($, _0x58618d["nKVoz"])["fadeIn"](
              -0x1066 + -0x1faa + 0x3010,
            );
          },
        ),
        _0x58618d["WZNkr"]($, _0x58618d["eTAFu"])["css"](
          _0x58618d["AwTEg"],
          _0x58618d["aRWRf"],
        ));
    },
  ),
  $(document)["on"]("click", "#toggle-fo" + "nt-family", function () {
    const _0x485388 = _0x9f5b01,
      _0x58e16c = {
        iKonn: function (_0x46862f, _0x3ef391) {
          return _0x46862f(_0x3ef391);
        },
        cfyva: "#sub-font-" + "family",
        ZwlvK: "Arial",
        igHTx: function (_0x18ada3, _0x56af31) {
          return _0x18ada3 == _0x56af31;
        },
        usXKD: ".player-dm" + ":has(.cont" + "ent-slide)",
        fBBwH: function (_0x5d91ce, _0x44b5cc) {
          return _0x5d91ce(_0x44b5cc);
        },
        Njmwd: ".sub-slide" + ", .content" + "-slide",
      },
      _0x2f5b2a =
        playerInstance["getConfig"]()["captions"]["fontFamily"] ||
        _0x58e16c["ZwlvK"];
    (_0x58e16c["igHTx"](
      _0x58e16c["iKonn"]($, _0x58e16c["cfyva"])["length"],
      0x1dd0 + 0x1 * -0x1921 + 0x4af * -0x1,
    ) &&
      _0x58e16c["iKonn"]($, _0x58e16c["usXKD"])["append"](
        '<div id="s' +
          "ub-font-fa" +
          'mily" clas' +
          's="sub-sli' +
          "de level-2" +
          " sub-font-" +
          'family" st' +
          'yle="displ' +
          'ay: none;"' +
          ">\n      <d" +
          'iv class="' +
          "dropdown-t" +
          'itle">\n   ' +
          "     <span" +
          ' class="s-' +
          "title sub-" +
          "back line-" +
          'center">\n ' +
          "         <" +
          'i class="f' +
          "a-solid fa" +
          "-angle-lef" +
          't"></i>\n  ' +
          "        Ph" +
          "ụ đề chính" +
          " / Font ch" +
          "ữ\n        " +
          "</span>\n  " +
          "    </div>" +
          "\n      <di" +
          'v class="c' +
          "s-list jw-" +
          "playback-r" +
          'ate">\n    ' +
          "    " +
          arrayFont["map"](
            (_0x139c6b) =>
              "\n         " +
              " <a class=" +
              '"cs-item l' +
              "ine-center" +
              "\x20" +
              (_0x2f5b2a === _0x139c6b["font"] ? "active" : "") +
              '" data="' +
              _0x139c6b["font"] +
              ('">\n       ' + "     <div " + 'class="csi' + '-title">') +
              _0x139c6b["label"] +
              ("</div>\n   " +
                "         <" +
                'i class="f' +
                "a-solid fa" +
                '-check"></' +
                "i>\n       " +
                "   </a>\n  " +
                "      "),
          )["join"]("") +
          ("\n      </d" + "iv>\n    </" + "div>"),
      ),
      _0x58e16c["fBBwH"]($, _0x58e16c["Njmwd"])["fadeOut"](
        0x2 * -0x82f + 0x7 * 0x359 + -0x711,
        function () {
          const _0xffc3f1 = _0x485388;
          _0x58e16c["iKonn"]($, _0x58e16c["cfyva"])["fadeIn"](
            0x3e4 + -0x1a5 * 0x1 + 0x23f * -0x1,
          );
        },
      ));
  }),
  $(document)["on"]("click", "#toggle-fo" + "nt-family-" + "sub", function () {
    const _0x1a3dcc = _0x9f5b01,
      _0x1dd838 = {
        gZEso: function (_0x2d3778, _0x551409) {
          return _0x2d3778(_0x551409);
        },
        gXZEo: "#sub-font-" + "family-sub",
        pfdas: "Arial",
        agybY: function (_0x550846, _0x56fe2d) {
          return _0x550846 == _0x56fe2d;
        },
        PBVwj: function (_0xe8c4b3, _0x5c3250) {
          return _0xe8c4b3(_0x5c3250);
        },
        JQoym: ".player-dm" + ":has(.cont" + "ent-slide)",
        ydaVb: function (_0x35f83c, _0x5da249) {
          return _0x35f83c(_0x5da249);
        },
        qoFia: ".sub-slide" + ", .content" + "-slide",
      },
      _0x7267dd = currentConfigSub["font"] || _0x1dd838["pfdas"];
    (_0x1dd838["agybY"](
      _0x1dd838["gZEso"]($, _0x1dd838["gXZEo"])["length"],
      -0xfa9 * 0x1 + 0x381 * -0x7 + 0x2830,
    ) &&
      _0x1dd838["PBVwj"]($, _0x1dd838["JQoym"])["append"](
        '<div id="s' +
          "ub-font-fa" +
          'mily-sub" ' +
          'class="sub' +
          "-slide lev" +
          "el-2 sub-f" +
          "ont-family" +
          '-sub" styl' +
          'e="display' +
          ': none;">\n' +
          "      <div" +
          ' class="dr' +
          "opdown-tit" +
          'le">\n     ' +
          "   <span c" +
          'lass="s-ti' +
          "tle sub-ba" +
          "ck line-ce" +
          'nter">\n   ' +
          "       <i " +
          'class="fa-' +
          "solid fa-a" +
          'ngle-left"' +
          "></i>\n    " +
          "      Song" +
          " ngữ / Fon" +
          "t chữ\n    " +
          "    </span" +
          ">\n      </" +
          "div>\n     " +
          " <div clas" +
          's="cs-list' +
          " jw-playba" +
          'ck-rate">\n' +
          "        " +
          arrayFont["map"](
            (_0x46cc59) =>
              "\n         " +
              " <a class=" +
              '"cs-item l' +
              "ine-center" +
              "\x20" +
              (_0x7267dd === _0x46cc59["font"] ? "active" : "") +
              '" data="' +
              _0x46cc59["font"] +
              ('">\n       ' + "     <div " + 'class="csi' + '-title">') +
              _0x46cc59["label"] +
              ("</div>\n   " +
                "         <" +
                'i class="f' +
                "a-solid fa" +
                '-check"></' +
                "i>\n       " +
                "   </a>\n  " +
                "      "),
          )["join"]("") +
          ("\n      </d" + "iv>\n    </" + "div>"),
      ),
      _0x1dd838["ydaVb"]($, _0x1dd838["qoFia"])["fadeOut"](
        -0x7 * 0x437 + -0x2f9 * -0x1 + 0x6a2 * 0x4,
        function () {
          const _0x30b86a = _0x1a3dcc;
          _0x1dd838["gZEso"]($, _0x1dd838["gXZEo"])["fadeIn"](
            0x2b5 + -0x7c3 * 0x1 + 0x1 * 0x50e,
          );
        },
      ));
  }),
  $(document)["on"](
    "click",
    ".sub-font-" + "family .cs" + "-item",
    function () {
      const _0x6fc1c4 = _0x9f5b01,
        _0x9d39ee = {
          TquQo: function (_0x511425, _0x551688) {
            return _0x511425(_0x551688);
          },
          iWXxG: "#sub-capti" + "on",
          eFUow: "data",
          cpQgF: ".sub-font-" + "family .cs" + "-item",
          CcKZy: "active",
          vmoSJ:
            "a[data-typ" + 'e="fontFam' + 'ily"] .csi' + "-current s" + "pan",
          LOxNV: function (_0x1f6db9, _0x1f0e09) {
            return _0x1f6db9(_0x1f0e09);
          },
          OHeKI: "#sub-font-" + "family",
          jmxts: "#video_pop" + " .player-d" + "m",
          BCygT: "display",
          NIWoa: "none",
        },
        _0x113463 = _0x9d39ee["TquQo"]($, this)["attr"](_0x9d39ee["eFUow"]),
        _0x20c8d9 = playerInstance["getConfig"]()["captions"];
      (playerInstance["setCaption" + "s"]({
        ..._0x20c8d9,
        fontFamily: _0x113463,
      }),
        _0x9d39ee["TquQo"]($, _0x9d39ee["cpQgF"])["removeClas" + "s"](
          _0x9d39ee["CcKZy"],
        ),
        _0x9d39ee["TquQo"](
          $,
          ".sub-font-" +
            "family .cs" +
            "-item[data" +
            "=\x22" +
            _0x113463 +
            "\x22]",
        )["addClass"](_0x9d39ee["CcKZy"]),
        _0x9d39ee["TquQo"]($, _0x9d39ee["vmoSJ"])["text"](
          arrayFont["find"]((_0x1f3e11) => _0x1f3e11["font"] === _0x113463)[
            "label"
          ],
        ),
        _0x9d39ee["LOxNV"]($, _0x9d39ee["OHeKI"])["fadeOut"](
          -0xdab + 0x86b * -0x1 + -0xb * -0x202,
          function () {
            const _0x5273fb = _0x6fc1c4;
            _0x9d39ee["TquQo"]($, _0x9d39ee["iWXxG"])["fadeIn"](
              0x1626 + 0x3c * -0x19 + -0x104a,
            );
          },
        ),
        _0x9d39ee["TquQo"]($, _0x9d39ee["jmxts"])["css"](
          _0x9d39ee["BCygT"],
          _0x9d39ee["NIWoa"],
        ));
    },
  ),
  $(document)["on"](
    "click",
    ".sub-font-" + "family-sub" + " .cs-item",
    function () {
      const _0x249d59 = _0x9f5b01,
        _0x18f0af = {
          XzSUD: function (_0x3325ba, _0x6851c) {
            return _0x3325ba(_0x6851c);
          },
          CitmG: "#sub-capti" + "on",
          ehDSu: "data",
          rQYwW: "span[lang=" + '"su"]',
          dQaQB: "font-famil" + "y",
          sSURS: function (_0x27af58, _0xbece9c) {
            return _0x27af58(_0xbece9c);
          },
          EptsP: ".sub-font-" + "family-sub" + " .cs-item",
          lrhnD: "active",
          SGNvR: function (_0x198ece, _0x89c9ff) {
            return _0x198ece(_0x89c9ff);
          },
          nchFv: function (_0x1bebca, _0x23ad93) {
            return _0x1bebca(_0x23ad93);
          },
          GMrtj:
            "a[data-typ" +
            'e="fontFam' +
            'ily-sub"] ' +
            ".csi-curre" +
            "nt span",
          TDKAD: "#sub-font-" + "family-sub",
          pvqef: "#video_pop" + " .player-d" + "m",
          gEOdt: "display",
          TFrQX: "none",
        },
        _0xbecbb0 = _0x18f0af["XzSUD"]($, this)["attr"](_0x18f0af["ehDSu"]);
      currentConfigSub["font"] = _0xbecbb0;
      const _0x44df17 = _0x18f0af["XzSUD"]($, _0x18f0af["rQYwW"]);
      (_0x44df17["css"](_0x18f0af["dQaQB"], _0xbecbb0),
        _0x18f0af["sSURS"]($, _0x18f0af["EptsP"])["removeClas" + "s"](
          _0x18f0af["lrhnD"],
        ),
        _0x18f0af["SGNvR"](
          $,
          ".sub-font-" +
            "family-sub" +
            " .cs-item[" +
            'data="' +
            _0xbecbb0 +
            "\x22]",
        )["addClass"](_0x18f0af["lrhnD"]),
        _0x18f0af["nchFv"]($, _0x18f0af["GMrtj"])["text"](
          arrayFont["find"]((_0x3178ac) => _0x3178ac["font"] === _0xbecbb0)[
            "label"
          ],
        ),
        _0x18f0af["SGNvR"]($, _0x18f0af["TDKAD"])["fadeOut"](
          -0x17d3 + 0x6d9 + 0x2 * 0x87d,
          function () {
            const _0x3339b6 = _0x249d59;
            _0x18f0af["XzSUD"]($, _0x18f0af["CitmG"])["fadeIn"](
              0x37a + 0x43 * -0x3 + -0x2b1,
            );
          },
        ),
        _0x18f0af["nchFv"]($, _0x18f0af["pvqef"])["css"](
          _0x18f0af["gEOdt"],
          _0x18f0af["TFrQX"],
        ));
    },
  ),
  $(document)["on"]("click", "#toggle-bo" + "rder-font", function () {
    const _0x5f5bcd = _0x9f5b01,
      _0x386663 = {
        SNxac: function (_0x35f340, _0x2df7bc) {
          return _0x35f340(_0x2df7bc);
        },
        yoEQT: "#sub-borde" + "r-font",
        cvVrz: "none",
        sLkSu: function (_0x53d0d3, _0x168888) {
          return _0x53d0d3 == _0x168888;
        },
        xqbma: function (_0x38afba, _0x516e4b) {
          return _0x38afba(_0x516e4b);
        },
        BbMGT: function (_0x5ad246, _0x2d9af3) {
          return _0x5ad246(_0x2d9af3);
        },
        VriEo: ".player-dm" + ":has(.cont" + "ent-slide)",
        zkxYT: function (_0x2f47fe) {
          return _0x2f47fe();
        },
        dnPCn: ".sub-slide" + ", .content" + "-slide",
      },
      _0x39c0a8 =
        playerInstance["getConfig"]()["captions"]["edgeStyle"] ||
        _0x386663["cvVrz"];
    (_0x386663["sLkSu"](
      _0x386663["xqbma"]($, _0x386663["yoEQT"])["length"],
      -0x1aa5 + 0x15a * 0x12 + 0x251,
    ) &&
      _0x386663["BbMGT"]($, _0x386663["VriEo"])["append"](
        '<div id="s' +
          "ub-border-" +
          'font" clas' +
          's="sub-sli' +
          "de level-2" +
          " sub-borde" +
          'r-font" st' +
          'yle="displ' +
          'ay: none;"' +
          ">\n      <d" +
          'iv class="' +
          "dropdown-t" +
          'itle">\n   ' +
          "     <span" +
          ' class="s-' +
          "title sub-" +
          "back line-" +
          'center">\n ' +
          "         <" +
          'i class="f' +
          "a-solid fa" +
          "-angle-lef" +
          't"></i>\n  ' +
          "        Ph" +
          "ụ đề chính" +
          " / Viền ch" +
          "ữ\n        " +
          "</span>\n  " +
          "    </div>" +
          "\n      <di" +
          'v class="c' +
          "s-list jw-" +
          "playback-r" +
          'ate">\n    ' +
          "    " +
          _0x386663["zkxYT"](renderItemBorder) +
          ("\n      </d" + "iv>\n    </" + "div>"),
      ),
      _0x386663["xqbma"]($, _0x386663["dnPCn"])["fadeOut"](
        0x2 * -0xf16 + -0x79d + 0x25c9,
        function () {
          const _0x76620c = _0x5f5bcd;
          _0x386663["SNxac"]($, _0x386663["yoEQT"])["fadeIn"](
            0x17b * -0x2 + -0x4b4 + 0x7aa,
          );
        },
      ));
  }),
  $(document)["on"](
    "click",
    ".sub-borde" + "r-font .cs" + "-item",
    function () {
      const _0xf22e92 = _0x9f5b01,
        _0x4a3bf7 = {
          VQFrM: function (_0xd0b4f, _0x287d3d) {
            return _0xd0b4f(_0x287d3d);
          },
          SOmNj: "#sub-capti" + "on",
          AsocU: function (_0x3e8fd3, _0x45a76a) {
            return _0x3e8fd3(_0x45a76a);
          },
          fcFJq: "data",
          zjCej: function (_0x192a35, _0x5be689) {
            return _0x192a35(_0x5be689);
          },
          keZUh: ".sub-borde" + "r-font .cs" + "-item",
          kyWvv: "active",
          TdzQk: function (_0x162cb6, _0x46b40b) {
            return _0x162cb6(_0x46b40b);
          },
          dsWIe:
            "a[data-typ" + 'e="edgeSty' + 'le"] .csi-' + "current sp" + "an",
          ACFRA: function (_0x1d8572, _0x400e62) {
            return _0x1d8572 === _0x400e62;
          },
          PFzIT: "none",
          YWeOW: "Không viền",
          mDtPQ: function (_0x176bfe, _0x528313) {
            return _0x176bfe === _0x528313;
          },
          BSlRF: "raised",
          WBspm: "Bo viền",
          bFKxK: "Đổ bóng",
          meeFc: function (_0x32e14d, _0x454eee) {
            return _0x32e14d(_0x454eee);
          },
          cuKQL: "#sub-borde" + "r-font",
          ldgsU: function (_0x282c3a, _0x543d05) {
            return _0x282c3a(_0x543d05);
          },
          xzCEb: "#video_pop" + " .player-d" + "m",
          DKxHi: "display",
        },
        _0x105197 = _0x4a3bf7["AsocU"]($, this)["attr"](_0x4a3bf7["fcFJq"]),
        _0x1e4ae3 = playerInstance["getConfig"]()["captions"];
      (playerInstance["setCaption" + "s"]({
        ..._0x1e4ae3,
        edgeStyle: _0x105197,
      }),
        _0x4a3bf7["zjCej"]($, _0x4a3bf7["keZUh"])["removeClas" + "s"](
          _0x4a3bf7["kyWvv"],
        ),
        _0x4a3bf7["TdzQk"](
          $,
          ".sub-borde" +
            "r-font .cs" +
            "-item[data" +
            "=\x22" +
            _0x105197 +
            "\x22]",
        )["addClass"](_0x4a3bf7["kyWvv"]),
        _0x4a3bf7["TdzQk"]($, _0x4a3bf7["dsWIe"])["text"](
          _0x4a3bf7["ACFRA"](_0x105197, _0x4a3bf7["PFzIT"])
            ? _0x4a3bf7["YWeOW"]
            : _0x4a3bf7["mDtPQ"](_0x105197, _0x4a3bf7["BSlRF"])
              ? _0x4a3bf7["WBspm"]
              : _0x4a3bf7["bFKxK"],
        ),
        _0x4a3bf7["meeFc"]($, _0x4a3bf7["cuKQL"])["fadeOut"](
          -0x82f + -0x8 * -0x1 + 0x827,
          function () {
            const _0x404d5a = _0xf22e92;
            _0x4a3bf7["VQFrM"]($, _0x4a3bf7["SOmNj"])["fadeIn"](
              0x1712 + 0x1f * -0x9b + -0x44d,
            );
          },
        ),
        _0x4a3bf7["ldgsU"]($, _0x4a3bf7["xzCEb"])["css"](
          _0x4a3bf7["DKxHi"],
          _0x4a3bf7["PFzIT"],
        ));
    },
  ),
  $(document)["on"]("click", "#toggle-ba" + "ckground", function () {
    const _0x5eef6b = _0x9f5b01,
      _0x43b082 = {
        fgivK: function (_0xb97462, _0x362973) {
          return _0xb97462(_0x362973);
        },
        UzpnZ: "#sub-backg" + "round",
        OEoTN: function (_0xe10f69, _0x3bbb0c) {
          return _0xe10f69 == _0x3bbb0c;
        },
        pygvE: function (_0x30d606, _0x496d0c) {
          return _0x30d606(_0x496d0c);
        },
        pnKPj: ".player-dm" + ":has(.cont" + "ent-slide)",
        XMMPa: function (_0x8aabe7, _0x35c0ea) {
          return _0x8aabe7(_0x35c0ea);
        },
        jEKqs: ".sub-slide" + ", .content" + "-slide",
      };
    (_0x43b082["OEoTN"](
      _0x43b082["fgivK"]($, _0x43b082["UzpnZ"])["length"],
      0x1768 + 0x53 * 0x1 + -0x17bb,
    ) &&
      _0x43b082["pygvE"]($, _0x43b082["pnKPj"])["append"](
        '<div id="s' +
          "ub-backgro" +
          'und" class' +
          '="sub-slid' +
          "e level-2 " +
          "sub-backgr" +
          'ound" styl' +
          'e="display' +
          ': none;">\n' +
          "      <div" +
          ' class="dr' +
          "opdown-tit" +
          'le">\n     ' +
          "   <span c" +
          'lass="s-ti' +
          "tle sub-ba" +
          "ck line-ce" +
          'nter">\n   ' +
          "       <i " +
          'class="fa-' +
          "solid fa-a" +
          'ngle-left"' +
          "></i>\n    " +
          "      Phụ " +
          "đề chính /" +
          " Màu nền\n " +
          "       </s" +
          "pan>\n     " +
          " </div>\n  " +
          "    <div c" +
          'lass="cs-l' +
          "ist jw-pla" +
          "yback-rate" +
          '">\n       ' +
          "\x20" +
          arrayBackground["map"]((_0x7e2af2) =>
            renderItemColor(
              _0x7e2af2["background"],
              _0x7e2af2["label"],
              "background" + "Color",
              "#000000",
            ),
          )["join"]("") +
          ("\n      </d" + "iv>\n    </" + "div>"),
      ),
      _0x43b082["XMMPa"]($, _0x43b082["jEKqs"])["fadeOut"](
        -0x3 * 0x8dd + 0x1c27 + -0xa * 0x28,
        function () {
          const _0xe21ab7 = _0x5eef6b;
          _0x43b082["fgivK"]($, _0x43b082["UzpnZ"])["fadeIn"](
            -0x18d * 0xd + 0x1d61 + -0x28 * 0x3b,
          );
        },
      ));
  }),
  $(document)["on"]("click", ".sub-backg" + "round .cs-" + "item", function () {
    const _0x9e7f3f = _0x9f5b01,
      _0x545519 = {
        fUhAX: function (_0x46efab, _0x1ad1e1) {
          return _0x46efab(_0x1ad1e1);
        },
        KViIx: "#sub-capti" + "on",
        mkBFg: function (_0xe11d3c, _0x37dd02) {
          return _0xe11d3c(_0x37dd02);
        },
        hOzaU: "data",
        NqkOH: function (_0x1086a4, _0x5510df) {
          return _0x1086a4(_0x5510df);
        },
        IrHfv: ".sub-backg" + "round .cs-" + "item",
        ajQdM: "active",
        ODcWR: function (_0x1aa637, _0x3bc850) {
          return _0x1aa637(_0x3bc850);
        },
        EvKdp:
          "a[data-typ" + 'e="backgro' + 'undColor"]' + " .csi-curr" + "ent",
        QxSdn: "#sub-backg" + "round",
        tLAoD: function (_0x1e0719, _0x201b5a) {
          return _0x1e0719(_0x201b5a);
        },
        fhuwT: "#video_pop" + " .player-d" + "m",
        YNWgp: "display",
        UzouI: "none",
      },
      _0x29d3a4 = _0x545519["mkBFg"]($, this)["attr"](_0x545519["hOzaU"]),
      _0x11926d = playerInstance["getConfig"]()["captions"];
    (playerInstance["setCaption" + "s"]({
      ..._0x11926d,
      backgroundColor: _0x29d3a4,
    }),
      _0x545519["NqkOH"]($, _0x545519["IrHfv"])["removeClas" + "s"](
        _0x545519["ajQdM"],
      ),
      _0x545519["ODcWR"](
        $,
        ".sub-backg" +
          "round .cs-" +
          "item[data=" +
          "\x22" +
          _0x29d3a4 +
          "\x22]",
      )["addClass"](_0x545519["ajQdM"]),
      _0x545519["ODcWR"]($, _0x545519["EvKdp"])["html"](
        "<div class" +
          '="csi-colo' +
          'r" style="' +
          "background" +
          "-color: " +
          _0x29d3a4 +
          (';"></div><' + "span>") +
          arrayBackground["find"](
            (_0x19d6cc) => _0x19d6cc["background"] === _0x29d3a4,
          )["label"] +
          ("</span><i " +
            'class="fa-' +
            "solid fa-a" +
            "ngle-right" +
            '"></i>'),
      ),
      _0x545519["fUhAX"]($, _0x545519["QxSdn"])["fadeOut"](
        0x21d4 + -0x2001 + -0x1d3,
        function () {
          const _0x1b9927 = _0x9e7f3f;
          _0x545519["fUhAX"]($, _0x545519["KViIx"])["fadeIn"](
            0xddd + 0x1296 + -0x1 * 0x2073,
          );
        },
      ),
      _0x545519["tLAoD"]($, _0x545519["fhuwT"])["css"](
        _0x545519["YNWgp"],
        _0x545519["UzouI"],
      ));
  }),
  $(document)["on"](
    "click",
    "#toggle-op" + "acity-back" + "ground",
    function () {
      const _0x47946c = _0x9f5b01,
        _0x33994f = {
          CvZuw: function (_0x4b6839, _0x2fc70d) {
            return _0x4b6839(_0x2fc70d);
          },
          dqxGD: "#sub-opaci" + "ty-backgro" + "und",
          flEin: function (_0x5544b9, _0x35e5f1) {
            return _0x5544b9 == _0x35e5f1;
          },
          rhPIr: function (_0x7fc06, _0xe29a26) {
            return _0x7fc06(_0xe29a26);
          },
          YmjZq: ".player-dm" + ":has(.cont" + "ent-slide)",
          wrvff: ".sub-slide" + ", .content" + "-slide",
        };
      (_0x33994f["flEin"](
        _0x33994f["CvZuw"]($, _0x33994f["dqxGD"])["length"],
        0x17 * -0x22 + -0x187b * 0x1 + 0x1b89,
      ) &&
        _0x33994f["rhPIr"]($, _0x33994f["YmjZq"])["append"](
          '<div id="s' +
            "ub-opacity" +
            "-backgroun" +
            'd" class="' +
            "sub-slide " +
            "level-2 su" +
            "b-opacity-" +
            "background" +
            '" style="d' +
            "isplay: no" +
            'ne;">\n    ' +
            "  <div cla" +
            'ss="dropdo' +
            'wn-title">' +
            "\n        <" +
            "span class" +
            '="s-title ' +
            "sub-back l" +
            "ine-center" +
            '">\n       ' +
            "   <i clas" +
            's="fa-soli' +
            "d fa-angle" +
            '-left"></i' +
            ">\n        " +
            "  Phụ đề c" +
            "hính / Độ " +
            "trong Nền\n" +
            "        </" +
            "span>\n    " +
            "  </div>\n " +
            "     <div " +
            'class="cs-' +
            "list jw-pl" +
            "ayback-rat" +
            'e">\n      ' +
            "\x20\x20" +
            arrayOpacity["map"]((_0x31c9cd) =>
              renderItemFont(
                _0x31c9cd["opacity"],
                _0x31c9cd["label"],
                "background" + "Opacity",
              ),
            )["join"]("") +
            ("\n      </d" + "iv>\n    </" + "div>"),
        ),
        _0x33994f["rhPIr"]($, _0x33994f["wrvff"])["fadeOut"](
          0x1849 * -0x1 + 0xdc1 + 0xa88,
          function () {
            const _0x51aff0 = _0x47946c;
            _0x33994f["CvZuw"]($, _0x33994f["dqxGD"])["fadeIn"](
              -0xbde * -0x1 + 0x20a3 + -0x2c81,
            );
          },
        ));
    },
  ),
  $(document)["on"](
    "click",
    ".sub-opaci" + "ty-backgro" + "und .cs-it" + "em",
    function () {
      const _0x1d3cd5 = _0x9f5b01,
        _0x282324 = {
          RAKMU: function (_0x5f6ae, _0x2239a1) {
            return _0x5f6ae(_0x2239a1);
          },
          QbVtW: "#sub-capti" + "on",
          FILbU: "data",
          RkzPB: ".sub-opaci" + "ty-backgro" + "und .cs-it" + "em",
          HANhE: "active",
          JDSyx:
            "a[data-typ" +
            'e="backgro' +
            "undOpacity" +
            '"] .csi-cu' +
            "rrent span",
          ekMRH: function (_0x59deda, _0x58c7bf) {
            return _0x59deda(_0x58c7bf);
          },
          YYMbd: "#sub-opaci" + "ty-backgro" + "und",
          cxfLg: function (_0x436c95, _0x8ad3c3) {
            return _0x436c95(_0x8ad3c3);
          },
          zydDf: "#video_pop" + " .player-d" + "m",
          ggcyK: "display",
          CUKtO: "none",
        },
        _0x5eca24 = _0x282324["RAKMU"]($, this)["attr"](_0x282324["FILbU"]),
        _0x40637a = playerInstance["getConfig"]()["captions"];
      (playerInstance["setCaption" + "s"]({
        ..._0x40637a,
        backgroundOpacity: _0x282324["RAKMU"](parseInt, _0x5eca24),
      }),
        _0x282324["RAKMU"]($, _0x282324["RkzPB"])["removeClas" + "s"](
          _0x282324["HANhE"],
        ),
        _0x282324["RAKMU"](
          $,
          ".sub-opaci" +
            "ty-backgro" +
            "und .cs-it" +
            'em[data="' +
            _0x5eca24 +
            "\x22]",
        )["addClass"](_0x282324["HANhE"]),
        _0x282324["RAKMU"]($, _0x282324["JDSyx"])["text"](
          arrayOpacity["find"](
            (_0x521645) => _0x521645["opacity"] === _0x5eca24,
          )["label"],
        ),
        _0x282324["ekMRH"]($, _0x282324["YYMbd"])["fadeOut"](
          -0x3e + -0x25d * -0x7 + -0x104d,
          function () {
            const _0x57529d = _0x1d3cd5;
            _0x282324["RAKMU"]($, _0x282324["QbVtW"])["fadeIn"](
              0x1b83 + 0x1e19 + -0x399c,
            );
          },
        ),
        _0x282324["cxfLg"]($, _0x282324["zydDf"])["css"](
          _0x282324["ggcyK"],
          _0x282324["CUKtO"],
        ));
    },
  ),
  $(document)["on"]("click", "#toggle-su" + "bs", function () {
    const _0x3331ec = _0x9f5b01,
      _0x13d33c = {
        GVXws: "white",
        bPvxI: function (_0x30c1c3, _0x3913e1) {
          return _0x30c1c3 + _0x3913e1;
        },
        oqJXU: "none",
        kkvwF: "#000000",
        uHaFe: function (_0x3d3739, _0x280b7c) {
          return _0x3d3739 + _0x280b7c;
        },
        BdXPh: "Arial",
        vdOJs: function (_0x251950, _0x1fa0bb) {
          return _0x251950 == _0x1fa0bb;
        },
        mxYgh: function (_0x4abcb2, _0x52ff27) {
          return _0x4abcb2(_0x52ff27);
        },
        PSlwH: "#video_pop",
        ubMOX: function (_0x1a790c, _0x1345aa) {
          return _0x1a790c(_0x1345aa);
        },
        VWFrt: "#rp-player",
        IkUXL: "Trắng",
        OVqEz: function (_0x549de4, _0x25fab2) {
          return _0x549de4 === _0x25fab2;
        },
        jcMxG: "Không viền",
        tRmof: function (_0x1976ac, _0x2abb49) {
          return _0x1976ac === _0x2abb49;
        },
        eYtuw: "raised",
        szlVK: "Bo viền",
        rbtZS: "Đổ bóng",
        WsVtx: "Đen",
      },
      _0x501da8 = playerInstance["getConfig"]()["captions"];
    playerInstance["pause"]();
    const _0x3ec41e = _0x501da8["color"] || _0x13d33c["GVXws"],
      _0x5df957 = _0x13d33c["bPvxI"](_0x501da8["fontSize"] || "14", "pt"),
      _0x59850d = _0x13d33c["bPvxI"](
        _0x501da8["fontOpacit" + "y"] || -0x137 * -0x9 + -0x17a2 + 0xd17 * 0x1,
        "%",
      ),
      _0x1d43e0 = _0x501da8["edgeStyle"] || _0x13d33c["oqJXU"],
      _0x3bcc2b = _0x501da8["background" + "Color"] || _0x13d33c["kkvwF"],
      _0x2199bc = _0x13d33c["uHaFe"](
        _0x501da8["background" + "Opacity"] ||
          0x972 + 0x1 * 0x1566 + -0x2a * 0xbc,
        "%",
      ),
      _0x8ccaf0 = _0x501da8["fontFamily"] || _0x13d33c["BdXPh"];
    _0x13d33c["vdOJs"](
      _0x13d33c["mxYgh"]($, _0x13d33c["PSlwH"])["length"],
      -0x4 * 0xf + 0x1983 + 0x86d * -0x3,
    ) &&
      _0x13d33c["ubMOX"]($, _0x13d33c["VWFrt"])["append"](
        '<div id="v' +
          'ideo_pop">' +
          "\n         " +
          "       <di" +
          'v class="p' +
          'op-mask"><' +
          "/div>\n    " +
          "          " +
          "  <div cla" +
          'ss="pop-ce' +
          "nter pop-s" +
          'ub">\n     ' +
          "          " +
          "   <div cl" +
          'ass="pc-ti' +
          'tle w-100"' +
          ">Tuỳ chỉnh" +
          " phụ đề</d" +
          "iv>\n      " +
          "          " +
          "  <div cla" +
          'ss="cs-dua' +
          'l">\n      ' +
          "          " +
          "    <div c" +
          'lass="csl-' +
          'primary">\n' +
          "          " +
          "          " +
          "  <div cla" +
          'ss="dropdo' +
          "wn-title p" +
          'y-1 mb-2">' +
          "\n         " +
          "          " +
          "     <span" +
          ' class="s-' +
          "title smal" +
          'l">Phụ đề ' +
          "chính</spa" +
          "n>\n       " +
          "          " +
          "     </div" +
          ">\n        " +
          "          " +
          "    <div c" +
          'lass="cs-l' +
          "ist jw-mai" +
          "n-sub-sett" +
          'ing">\n    ' +
          "          " +
          "        <a" +
          ' class="cs' +
          "-item line" +
          '-center" d' +
          'ata-type="' +
          'color" dat' +
          'a-title="M' +
          'àu chữ">\n ' +
          "          " +
          "          " +
          "     <div " +
          'class="csi' +
          '-title">Mà' +
          "u chữ</div" +
          ">\n        " +
          "          " +
          "        <d" +
          'iv class="' +
          "csi-curren" +
          "t line-cen" +
          'ter">\n    ' +
          "          " +
          "          " +
          "    <div c" +
          'lass="csi-' +
          'color" sty' +
          'le="backgr' +
          "ound-color" +
          ":\x20" +
          _0x3ec41e +
          (';"></div>\n' +
            "          " +
            "          " +
            "        <s" +
            "pan>") +
          (arrayColor["find"]((_0xc05a8e) => _0xc05a8e["color"] === _0x3ec41e)[
            "label"
          ] || _0x13d33c["IkUXL"]) +
          ("</span>\n  " +
            "          " +
            "          " +
            "      <i c" +
            'lass="fa-s' +
            "olid fa-an" +
            'gle-right"' +
            "></i>\n    " +
            "          " +
            "          " +
            "  </div>\n " +
            "          " +
            "          " +
            "   </a><a " +
            'class="cs-' +
            "item line-" +
            'center" da' +
            'ta-type="f' +
            'ontSize" d' +
            "ata-title=" +
            '"Cỡ chữ">\n' +
            "          " +
            "          " +
            "      <div" +
            ' class="cs' +
            'i-title">C' +
            "ỡ chữ</div" +
            ">\n        " +
            "          " +
            "        <d" +
            'iv class="' +
            "csi-curren" +
            "t line-cen" +
            'ter">\n    ' +
            "          " +
            "          " +
            "    <span>") +
          _0x5df957 +
          ("</span>\n  " +
            "          " +
            "          " +
            "      <i c" +
            'lass="fa-s' +
            "olid fa-an" +
            'gle-right"' +
            "></i>\n    " +
            "          " +
            "          " +
            "  </div>\n " +
            "          " +
            "          " +
            "   </a>\n  " +
            "          " +
            "          " +
            "  <a class" +
            '="cs-item ' +
            "line-cente" +
            'r" data-ty' +
            'pe="fontOp' +
            'acity" dat' +
            'a-value="') +
          _0x59850d +
          ('" data-tit' +
            'le="Độ tro' +
            'ng">\n     ' +
            "          " +
            "          " +
            " <div clas" +
            's="csi-tit' +
            'le">Độ tro' +
            "ng</div>\n " +
            "          " +
            "          " +
            "     <div " +
            'class="csi' +
            "-current l" +
            "ine-center" +
            '">\n       ' +
            "          " +
            "          " +
            " <span>") +
          _0x59850d +
          ("</span>\n  " +
            "          " +
            "          " +
            "      <i c" +
            'lass="fa-s' +
            "olid fa-an" +
            'gle-right"' +
            "></i>\n    " +
            "          " +
            "          " +
            "  </div>\n " +
            "          " +
            "          " +
            "   </a><a " +
            'class="cs-' +
            "item line-" +
            'center" da' +
            'ta-type="e' +
            'dgeStyle" ' +
            "data-value" +
            "=\x22") +
          _0x1d43e0 +
          ('" data-tit' +
            'le="Viền c' +
            'hữ">\n     ' +
            "          " +
            "          " +
            " <div clas" +
            's="csi-tit' +
            'le">Viền c' +
            "hữ</div>\n " +
            "          " +
            "          " +
            "     <div " +
            'class="csi' +
            "-current l" +
            "ine-center" +
            '">\n       ' +
            "          " +
            "          " +
            " <span>") +
          (_0x13d33c["OVqEz"](_0x1d43e0, _0x13d33c["oqJXU"])
            ? _0x13d33c["jcMxG"]
            : _0x13d33c["tRmof"](_0x1d43e0, _0x13d33c["eYtuw"])
              ? _0x13d33c["szlVK"]
              : _0x13d33c["rbtZS"]) +
          ("</span>\n  " +
            "          " +
            "          " +
            "      <i c" +
            'lass="fa-s' +
            "olid fa-an" +
            'gle-right"' +
            "></i>\n    " +
            "          " +
            "          " +
            "  </div>\n " +
            "          " +
            "          " +
            "   </a><a " +
            'id="toggle' +
            '-font" cla' +
            'ss="cs-ite' +
            "m line-cen" +
            'ter" data-' +
            'type="back' +
            "groundColo" +
            'r" data-va' +
            'lue="') +
          _0x3bcc2b +
          ('" data-tit' +
            'le="Màu nề' +
            'n">\n      ' +
            "          " +
            "          " +
            "<div class" +
            '="csi-titl' +
            'e">Màu nền' +
            "</div>\n   " +
            "          " +
            "          " +
            "   <div cl" +
            'ass="csi-c' +
            "urrent lin" +
            'e-center">' +
            "\n         " +
            "          " +
            "         <" +
            "div class=" +
            '"csi-color' +
            '" style="b' +
            "ackground-" +
            "color: ") +
          _0x3bcc2b +
          (';"></div>\n' +
            "          " +
            "          " +
            "        <s" +
            "pan>") +
          (arrayBackground["find"](
            (_0x19c081) => _0x19c081["background"] === _0x3bcc2b,
          )["label"] || _0x13d33c["WsVtx"]) +
          ("</span>\n  " +
            "          " +
            "          " +
            "      <i c" +
            'lass="fa-s' +
            "olid fa-an" +
            'gle-right"' +
            "></i>\n    " +
            "          " +
            "          " +
            "  </div>\n " +
            "          " +
            "          " +
            "   </a><a " +
            'class="cs-' +
            "item line-" +
            'center" da' +
            'ta-type="b' +
            "ackgroundO" +
            'pacity" da' +
            'ta-value="') +
          _0x2199bc +
          ('" data-tit' +
            'le="Độ tro' +
            'ng Nền">\n ' +
            "          " +
            "          " +
            "     <div " +
            'class="csi' +
            '-title">Độ' +
            " trong Nền" +
            "</div>\n   " +
            "          " +
            "          " +
            "   <div cl" +
            'ass="csi-c' +
            "urrent lin" +
            'e-center">' +
            "\n         " +
            "          " +
            "         <" +
            "span>") +
          _0x2199bc +
          ("</span>\n  " +
            "          " +
            "          " +
            "      <i c" +
            'lass="fa-s' +
            "olid fa-an" +
            'gle-right"' +
            "></i>\n    " +
            "          " +
            "          " +
            "  </div>\n " +
            "          " +
            "          " +
            "   </a><a " +
            'class="cs-' +
            "item line-" +
            'center" da' +
            'ta-type="f' +
            'ontFamily"' +
            " data-valu" +
            'e="') +
          _0x8ccaf0 +
          ('" data-tit' +
            'le="Font c' +
            'hữ">\n     ' +
            "          " +
            "          " +
            " <div clas" +
            's="csi-tit' +
            'le">Font c' +
            "hữ</div>\n " +
            "          " +
            "          " +
            "     <div " +
            'class="csi' +
            "-current l" +
            "ine-center" +
            '">\n       ' +
            "          " +
            "          " +
            " <span>") +
          _0x8ccaf0 +
          ("</span>\n  " +
            "          " +
            "          " +
            "      <i c" +
            'lass="fa-s' +
            "olid fa-an" +
            'gle-right"' +
            "></i>\n    " +
            "          " +
            "          " +
            "  </div>\n " +
            "          " +
            "          " +
            "   </a></d" +
            "iv>\n      " +
            "          " +
            "    </div>" +
            "\n         " +
            "          " +
            " <div clas" +
            's="csl-sec' +
            'ondary">\n ' +
            "          " +
            "          " +
            " <div clas" +
            's="dropdow' +
            "n-title py" +
            '-1 mb-2">\n' +
            "          " +
            "          " +
            "    <span " +
            'class="s-t' +
            "itle small" +
            '">Song ngữ' +
            "</span>\n  " +
            "          " +
            "          " +
            "</div>\n   " +
            "          " +
            "         <" +
            "div class=" +
            '"cs-list j' +
            "w-sub-sub-" +
            'setting">\n' +
            "          " +
            "          " +
            '  <a id="t' +
            "oggle-colo" +
            'r-sub" cla' +
            'ss="cs-ite' +
            "m line-cen" +
            'ter" data-' +
            'type="colo' +
            'r-sub" dat' +
            'a-title="M' +
            "àu chữ Son" +
            'g ngữ">\n  ' +
            "          " +
            "          " +
            "    <div c" +
            'lass="csi-' +
            'title">Màu' +
            " chữ</div>" +
            "\n         " +
            "          " +
            "       <di" +
            'v class="c' +
            "si-current" +
            " line-cent" +
            'er">\n     ' +
            "          " +
            "          " +
            "   <div cl" +
            'ass="csi-c' +
            'olor" styl' +
            'e="backgro' +
            "und-color:" +
            "\x20") +
          currentConfigSub["color"] +
          (';"></div>\n' +
            "          " +
            "          " +
            "        <s" +
            "pan>") +
          (arrayColor["find"](
            (_0x1b179f) => _0x1b179f["color"] === currentConfigSub["color"],
          )["label"] || _0x13d33c["IkUXL"]) +
          ("</span>\n  " +
            "          " +
            "          " +
            "      <i c" +
            'lass="fa-s' +
            "olid fa-an" +
            'gle-right"' +
            "></i>\n    " +
            "          " +
            "          " +
            "  </div>\n " +
            "          " +
            "          " +
            "   </a><a " +
            'id="toggle' +
            '-size-sub"' +
            ' class="cs' +
            "-item line" +
            '-center" d' +
            'ata-type="' +
            "fontSize-s" +
            'ub" data-t' +
            'itle="Cỡ c' +
            "hữ Song ng" +
            'ữ">\n      ' +
            "          " +
            "          " +
            "<div class" +
            '="csi-titl' +
            'e">Cỡ chữ<' +
            "/div>\n    " +
            "          " +
            "          " +
            "  <div cla" +
            'ss="csi-cu' +
            "rrent line" +
            '-center">\n' +
            "          " +
            "          " +
            "        <s" +
            "pan>") +
          currentConfigSub["size"] +
          ("%</span>\n " +
            "          " +
            "          " +
            "       <i " +
            'class="fa-' +
            "solid fa-a" +
            "ngle-right" +
            '"></i>\n   ' +
            "          " +
            "          " +
            "   </div>\n" +
            "          " +
            "          " +
            "    </a><a" +
            ' class="cs' +
            "-item line" +
            '-center" d' +
            'ata-type="' +
            "fontOpacit" +
            'y-sub" dat' +
            'a-title="Đ' +
            "ộ trong So" +
            'ng ngữ">\n ' +
            "          " +
            "          " +
            "     <div " +
            'class="csi' +
            '-title">Độ' +
            " trong</di" +
            "v>\n       " +
            "          " +
            "         <" +
            "div class=" +
            '"csi-curre' +
            "nt line-ce" +
            'nter">\n   ' +
            "          " +
            "          " +
            "     <span" +
            ">") +
          currentConfigSub["opacity"] +
          ("%</span>\n " +
            "          " +
            "          " +
            "       <i " +
            'class="fa-' +
            "solid fa-a" +
            "ngle-right" +
            '"></i>\n   ' +
            "          " +
            "          " +
            "   </div>\n" +
            "          " +
            "          " +
            "    </a>\n " +
            "          " +
            "          " +
            "   <a clas" +
            's="cs-item' +
            " line-cent" +
            'er" data-t' +
            'ype="fontF' +
            'amily-sub"' +
            " data-titl" +
            'e="Font ch' +
            "ữ Song ngữ" +
            '">\n       ' +
            "          " +
            "         <" +
            "div class=" +
            '"csi-title' +
            '">Font chữ' +
            "</div>\n   " +
            "          " +
            "          " +
            "   <div cl" +
            'ass="csi-c' +
            "urrent lin" +
            'e-center">' +
            "\n         " +
            "          " +
            "         <" +
            "span>") +
          currentConfigSub["font"] +
          ("</span>\n  " +
            "          " +
            "          " +
            "      <i c" +
            'lass="fa-s' +
            "olid fa-an" +
            'gle-right"' +
            "></i>\n    " +
            "          " +
            "          " +
            "  </div>\n " +
            "          " +
            "          " +
            "   </a></d" +
            "iv>\n      " +
            "          " +
            "    </div>" +
            "\n         " +
            "         <" +
            "/div>\n    " +
            "          " +
            "    <div c" +
            'lass="pop-' +
            "buttons w-" +
            '100 mt-3">' +
            "\n         " +
            "          " +
            ' <a id="cl' +
            "ose-pop-su" +
            'b" class="' +
            "btn btn-bl" +
            "ock w-100 " +
            'btn-light"' +
            ">Chọn xong" +
            "</a>\n     " +
            "          " +
            "   </div>\n" +
            "          " +
            "      </di" +
            "v>\n       " +
            "         <" +
            "div class=" +
            '"player-dm' +
            ' level-2" ' +
            'style="dis' +
            "play: none" +
            ';">\n      ' +
            "          " +
            "  <div cla" +
            'ss="sub-sl' +
            "ide level-" +
            "2 absolute" +
            '-menu">\n  ' +
            "          " +
            "        <d" +
            'iv class="' +
            "dropdown-t" +
            'itle">\n   ' +
            "          " +
            "         <" +
            "span class" +
            '="s-title ' +
            "back-level" +
            " line-cent" +
            'er small">' +
            "\n         " +
            "          " +
            "     <i cl" +
            'ass="fa-so' +
            "lid fa-ang" +
            'le-left"><' +
            "/i>\n      " +
            "          " +
            "        <s" +
            'pa class="' +
            "sub-menu-t" +
            'itle"></sp' +
            "a>\n       " +
            "          " +
            "     </spa" +
            "n>\n      \n" +
            "          " +
            "          " +
            "</div>\n   " +
            "          " +
            "       <di" +
            'v class="c' +
            "s-list sub" +
            "-menu-list" +
            '-item">\n  ' +
            "          " +
            "        </" +
            "div>\n     " +
            "          " +
            "   </div>\n" +
            "          " +
            "      </di" +
            "v>\n       " +
            "       </d" +
            "iv>"),
      );
  }),
  $(document)["on"]("click", "#close-pop" + "-sub", function () {
    const _0x22f453 = _0x9f5b01,
      _0x266650 = {
        euVFC: function (_0x14d5dc, _0x58baf8) {
          return _0x14d5dc(_0x58baf8);
        },
        mxFeO: "#video_pop",
      };
    (_0x266650["euVFC"]($, _0x266650["mxFeO"])["remove"](),
      playerInstance["play"]());
  }),
  $(document)["on"](
    "click",
    "#video_pop" + " .cs-item[" + "data-type]",
    function (_0x10d7d4) {
      const _0x5ca409 = _0x9f5b01,
        _0x17ab05 = {
          leXdi: function (_0x59dc4e, _0x48f5b2) {
            return _0x59dc4e(_0x48f5b2);
          },
          zkqnX: "title",
          fTKiS: "#video_pop" + " .player-d" + "m .sub-men" + "u-title",
          vynGT: function (_0x532c04, _0x538ca0) {
            return _0x532c04(_0x538ca0);
          },
          iCXBI: "type",
          esJzi: function (_0x4c17db, _0x23ea77) {
            return _0x4c17db == _0x23ea77;
          },
          KkTWV: function (_0x1e0580, _0x4a7aee) {
            return _0x1e0580(_0x4a7aee);
          },
          MzcyU: "#video_pop" + " .player-d" + "m",
          PMRVz: "display",
          Sxmje: "block",
          HnXsR: function (_0x5b76cb, _0x4a4328) {
            return _0x5b76cb == _0x4a4328;
          },
          Tkbgo: function (_0x2c7e51, _0x2c3301) {
            return _0x2c7e51(_0x2c3301);
          },
          mmlWy: "none",
          vpLeq: "absolute",
          XHvHs: function (_0x1f24f9, _0xb58eb0) {
            return _0x1f24f9 - _0xb58eb0;
          },
          sjGQg: function (_0x40a9ef, _0x4482fb) {
            return _0x40a9ef + _0x4482fb;
          },
          piiMh: function (_0x629fce, _0x2b34e5) {
            return _0x629fce(_0x2b34e5);
          },
          cZhnn: "#video_pop" + " .sub-slid" + "e",
          TWsat: "#video_pop" + " .sub-menu" + "-list-item",
          AIOIZ: "color",
          Scgpt:
            "#video_pop" + " .player-d" + "m .sub-men" + "u-list-ite" + "m",
          XPJaw: "sub-color",
          rtFzU:
            "sub-size s" +
            "ub-opacity" +
            "-font sub-" +
            "border-fon" +
            "t sub-back" +
            "ground sub" +
            "-opacity-b" +
            "ackground " +
            "sub-font-f" +
            "amily sub-" +
            "color-sub " +
            "sub-size-s" +
            "ub sub-opa" +
            "city-font-" +
            "sub sub-fo" +
            "nt-family-" +
            "sub",
          AXGnc: "fontSize",
          rnCqZ: "sub-size",
          dmzzH:
            "sub-color " +
            "sub-opacit" +
            "y-font sub" +
            "-border-fo" +
            "nt sub-bac" +
            "kground su" +
            "b-opacity-" +
            "background" +
            " sub-font-" +
            "family sub" +
            "-color-sub" +
            " sub-size-" +
            "sub sub-op" +
            "acity-font" +
            "-sub sub-f" +
            "ont-family" +
            "-sub",
          vVGCT: "fontOpacit" + "y",
          QWlbD: "sub-opacit" + "y-font",
          sLboE:
            "sub-color " +
            "sub-size s" +
            "ub-border-" +
            "font sub-b" +
            "ackground " +
            "sub-opacit" +
            "y-backgrou" +
            "nd sub-fon" +
            "t-family s" +
            "ub-color-s" +
            "ub sub-siz" +
            "e-sub sub-" +
            "opacity-fo" +
            "nt-sub sub" +
            "-font-fami" +
            "ly-sub",
          dmczG: "edgeStyle",
          tdEDo: function (_0x41cc42, _0x2eaf09) {
            return _0x41cc42(_0x2eaf09);
          },
          NwEIY: function (_0x4e3044) {
            return _0x4e3044();
          },
          Vzcuk: function (_0xb3dd35, _0x3e85ee) {
            return _0xb3dd35(_0x3e85ee);
          },
          NfzxJ: "sub-border" + "-font",
          cnamn:
            "sub-color " +
            "sub-size s" +
            "ub-opacity" +
            "-font sub-" +
            "background" +
            " sub-opaci" +
            "ty-backgro" +
            "und sub-fo" +
            "nt-family " +
            "sub-color-" +
            "sub sub-si" +
            "ze-sub sub" +
            "-opacity-f" +
            "ont-sub su" +
            "b-font-fam" +
            "ily-sub",
          OMsSZ: "background" + "Color",
          gjhVA: "sub-backgr" + "ound",
          JfAgk:
            "sub-color " +
            "sub-size s" +
            "ub-opacity" +
            "-font sub-" +
            "border-fon" +
            "t sub-opac" +
            "ity-backgr" +
            "ound sub-f" +
            "ont-family" +
            " sub-color" +
            "-sub sub-s" +
            "ize-sub su" +
            "b-opacity-" +
            "font-sub s" +
            "ub-font-fa" +
            "mily-sub",
          cQrey: "background" + "Opacity",
          GwIfL: function (_0x38d080, _0x1f0d8e) {
            return _0x38d080(_0x1f0d8e);
          },
          GsLZG: "sub-opacit" + "y-backgrou" + "nd",
          cogcH:
            "sub-color " +
            "sub-size s" +
            "ub-opacity" +
            "-font sub-" +
            "border-fon" +
            "t sub-back" +
            "ground sub" +
            "-font-fami" +
            "ly sub-col" +
            "or-sub sub" +
            "-size-sub " +
            "sub-opacit" +
            "y-font-sub" +
            " sub-font-" +
            "family-sub",
          nMoXd: "fontFamily",
          MTkCf: "sub-font-f" + "amily",
          qmgiC:
            "sub-color " +
            "sub-size s" +
            "ub-opacity" +
            "-font sub-" +
            "border-fon" +
            "t sub-back" +
            "ground sub" +
            "-opacity-b" +
            "ackground " +
            "sub-color-" +
            "sub sub-si" +
            "ze-sub sub" +
            "-opacity-f" +
            "ont-sub su" +
            "b-font-fam" +
            "ily-sub",
          cYbXf: "color-sub",
          xtDUB: "sub-color-" + "sub",
          mUfXS:
            "sub-size-s" +
            "ub sub-opa" +
            "city-font-" +
            "sub sub-bo" +
            "rder-font-" +
            "sub sub-ba" +
            "ckground-s" +
            "ub sub-opa" +
            "city-backg" +
            "round-sub " +
            "sub-font-f" +
            "amily-sub " +
            "sub-color " +
            "sub-opacit" +
            "y-font sub" +
            "-border-fo" +
            "nt sub-bac" +
            "kground su" +
            "b-opacity-" +
            "background" +
            " sub-font-" +
            "family",
          IQKyq: "fontSize-s" + "ub",
          CYMpu: "sub-size-s" + "ub",
          CeKec:
            "sub-color-" +
            "sub sub-op" +
            "acity-font" +
            "-sub sub-b" +
            "order-font" +
            "-sub sub-b" +
            "ackground-" +
            "sub sub-op" +
            "acity-back" +
            "ground-sub" +
            " sub-font-" +
            "family-sub" +
            " sub-color" +
            " sub-opaci" +
            "ty-font su" +
            "b-border-f" +
            "ont sub-ba" +
            "ckground s" +
            "ub-opacity" +
            "-backgroun" +
            "d sub-font" +
            "-family",
          bYJHz: "fontOpacit" + "y-sub",
          GhbSt: function (_0x500b15, _0x2b9d94) {
            return _0x500b15(_0x2b9d94);
          },
          xbjZL: "sub-opacit" + "y-font-sub",
          Rbetj:
            "sub-color-" +
            "sub sub-si" +
            "ze-sub sub" +
            "-border-fo" +
            "nt-sub sub" +
            "-backgroun" +
            "d-sub sub-" +
            "opacity-ba" +
            "ckground-s" +
            "ub sub-fon" +
            "t-family-s" +
            "ub sub-col" +
            "or sub-opa" +
            "city-font " +
            "sub-border" +
            "-font sub-" +
            "background" +
            " sub-opaci" +
            "ty-backgro" +
            "und sub-fo" +
            "nt-family",
          WXEaK: "fontFamily" + "-sub",
          rNGEp: "sub-font-f" + "amily-sub",
          DBWEm:
            "sub-color-" +
            "sub sub-si" +
            "ze-sub sub" +
            "-opacity-f" +
            "ont-sub su" +
            "b-border-f" +
            "ont-sub su" +
            "b-backgrou" +
            "nd-sub sub" +
            "-opacity-b" +
            "ackground-" +
            "sub sub-co" +
            "lor sub-op" +
            "acity-font" +
            " sub-borde" +
            "r-font sub" +
            "-backgroun" +
            "d sub-opac" +
            "ity-backgr" +
            "ound sub-f" +
            "ont-family",
        },
        _0x1dd105 = _0x10d7d4["pageX"],
        _0x55bf86 = _0x10d7d4["pageY"],
        _0x5aeb97 = _0x17ab05["leXdi"]($, this)["data"](_0x17ab05["zkqnX"]),
        _0x4bc9dc = _0x17ab05["leXdi"]($, _0x17ab05["fTKiS"])["text"](),
        _0xf22022 = _0x17ab05["vynGT"]($, this)["data"](_0x17ab05["iCXBI"]);
      if (
        _0x17ab05["esJzi"](
          _0x17ab05["KkTWV"]($, _0x17ab05["MzcyU"])["css"](_0x17ab05["PMRVz"]),
          _0x17ab05["Sxmje"],
        ) &&
        _0x17ab05["HnXsR"](_0x4bc9dc, _0x5aeb97)
      ) {
        _0x17ab05["Tkbgo"]($, _0x17ab05["MzcyU"])["css"]({
          display: _0x17ab05["mmlWy"],
        });
        return;
      }
      (_0x17ab05["vynGT"]($, _0x17ab05["MzcyU"])["css"]({
        display: _0x17ab05["Sxmje"],
        position: _0x17ab05["vpLeq"],
        top: _0x17ab05["XHvHs"](_0x55bf86, -0x1f42 + 0x1d28 + -0x2 * -0x112),
        left: _0x17ab05["sjGQg"](
          _0x1dd105,
          0x1430 + 0x22f * -0x10 + -0x16 * -0xad,
        ),
        zIndex: 0x270f,
      }),
        _0x17ab05["piiMh"]($, _0x17ab05["cZhnn"])["css"]({
          display: _0x17ab05["Sxmje"],
        }),
        _0x17ab05["leXdi"]($, _0x17ab05["TWsat"])["css"]({
          display: _0x17ab05["Sxmje"],
        }),
        _0x17ab05["KkTWV"]($, _0x17ab05["fTKiS"])["text"](_0x5aeb97));
      switch (_0xf22022) {
        case _0x17ab05["AIOIZ"]:
          _0x17ab05["KkTWV"]($, _0x17ab05["Scgpt"])
            ["html"](
              "\n        " +
                arrayColor["map"]((_0x1bb0db) =>
                  renderItemColor(
                    _0x1bb0db["color"],
                    _0x1bb0db["label"],
                    _0xf22022,
                  ),
                )["join"]("") +
                "\n      ",
            )
            ["addClass"](_0x17ab05["XPJaw"])
            ["removeClas" + "s"](_0x17ab05["rtFzU"]);
          break;
        case _0x17ab05["AXGnc"]:
          _0x17ab05["piiMh"]($, _0x17ab05["Scgpt"])
            ["html"](
              "" +
                arraySize["map"]((_0xf23691) =>
                  renderItemFont(
                    _0xf23691["size"],
                    _0xf23691["label"],
                    _0xf22022,
                  ),
                )["join"](""),
            )
            ["addClass"](_0x17ab05["rnCqZ"])
            ["removeClas" + "s"](_0x17ab05["dmzzH"]);
          break;
        case _0x17ab05["vVGCT"]:
          _0x17ab05["leXdi"]($, _0x17ab05["Scgpt"])
            ["html"](
              "" +
                arrayOpacity["map"]((_0x3d0cea) =>
                  renderItemFont(
                    _0x3d0cea["opacity"],
                    _0x3d0cea["label"],
                    _0xf22022,
                  ),
                )["join"](""),
            )
            ["addClass"](_0x17ab05["QWlbD"])
            ["removeClas" + "s"](_0x17ab05["sLboE"]);
          break;
        case _0x17ab05["dmczG"]:
          (_0x17ab05["tdEDo"]($, _0x17ab05["Scgpt"])["html"](
            _0x17ab05["NwEIY"](renderItemBorder),
          ),
            _0x17ab05["Vzcuk"]($, _0x17ab05["Scgpt"])
              ["addClass"](_0x17ab05["NfzxJ"])
              ["removeClas" + "s"](_0x17ab05["cnamn"]));
          break;
        case _0x17ab05["OMsSZ"]:
          _0x17ab05["piiMh"]($, _0x17ab05["Scgpt"])
            ["html"](
              "" +
                arrayBackground["map"]((_0x184050) =>
                  renderItemColor(
                    _0x184050["background"],
                    _0x184050["label"],
                    _0xf22022,
                    "#000000",
                  ),
                )["join"](""),
            )
            ["addClass"](_0x17ab05["gjhVA"])
            ["removeClas" + "s"](_0x17ab05["JfAgk"]);
          break;
        case _0x17ab05["cQrey"]:
          _0x17ab05["GwIfL"]($, _0x17ab05["Scgpt"])
            ["html"](
              "" +
                arrayOpacity["map"]((_0x35efb9) =>
                  renderItemFont(
                    _0x35efb9["opacity"],
                    _0x35efb9["label"],
                    _0xf22022,
                  ),
                )["join"](""),
            )
            ["addClass"](_0x17ab05["GsLZG"])
            ["removeClas" + "s"](_0x17ab05["cogcH"]);
          break;
        case _0x17ab05["nMoXd"]:
          _0x17ab05["KkTWV"]($, _0x17ab05["Scgpt"])
            ["html"](
              "" +
                arrayFont["map"]((_0x1b0492) =>
                  renderItemFont(
                    _0x1b0492["font"],
                    _0x1b0492["label"],
                    _0xf22022,
                  ),
                )["join"](""),
            )
            ["addClass"](_0x17ab05["MTkCf"])
            ["removeClas" + "s"](_0x17ab05["qmgiC"]);
          break;
        case _0x17ab05["cYbXf"]:
          _0x17ab05["Vzcuk"]($, _0x17ab05["Scgpt"])
            ["html"](
              "" +
                arrayColor["map"]((_0x57161e) =>
                  renderItemColor(
                    _0x57161e["color"],
                    _0x57161e["label"],
                    "color",
                    "white",
                    currentConfigSub,
                  ),
                )["join"](""),
            )
            ["addClass"](_0x17ab05["xtDUB"])
            ["removeClas" + "s"](_0x17ab05["mUfXS"]);
          break;
        case _0x17ab05["IQKyq"]:
          _0x17ab05["vynGT"]($, _0x17ab05["Scgpt"])
            ["html"](
              "" +
                arraySizeFont["map"]((_0x18fd19) =>
                  renderItemFont(
                    _0x18fd19["size"],
                    _0x18fd19["label"],
                    "size",
                    currentConfigSub,
                  ),
                )["join"](""),
            )
            ["addClass"](_0x17ab05["CYMpu"])
            ["removeClas" + "s"](_0x17ab05["CeKec"]);
          break;
        case _0x17ab05["bYJHz"]:
          _0x17ab05["GhbSt"]($, _0x17ab05["Scgpt"])
            ["html"](
              "" +
                arrayOpacity["map"]((_0x40c3bc) =>
                  renderItemFont(
                    _0x40c3bc["opacity"],
                    _0x40c3bc["label"],
                    "opacity",
                    currentConfigSub,
                  ),
                )["join"](""),
            )
            ["addClass"](_0x17ab05["xbjZL"])
            ["removeClas" + "s"](_0x17ab05["Rbetj"]);
          break;
        case _0x17ab05["WXEaK"]:
          _0x17ab05["GwIfL"]($, _0x17ab05["Scgpt"])
            ["html"](
              "" +
                arrayFont["map"]((_0x2ca094) =>
                  renderItemFont(
                    _0x2ca094["font"],
                    _0x2ca094["label"],
                    "font",
                    currentConfigSub,
                  ),
                )["join"](""),
            )
            ["addClass"](_0x17ab05["rNGEp"])
            ["removeClas" + "s"](_0x17ab05["DBWEm"]);
          break;
      }
    },
  ));
function renderItemColor(
  _0xd01daa,
  _0xfb0096,
  _0x505355,
  _0x4c3dd5 = "white",
  _0x12c9d1 = playerInstance["getConfig"]()["captions"],
) {
  const _0x5cf562 = _0x9f5b01,
    _0x426480 = {
      FAeBl: function (_0x4f030b, _0x5e1b51) {
        return _0x4f030b === _0x5e1b51;
      },
      prKrj: "active",
    },
    _0x54ed69 = _0x426480["FAeBl"](_0xd01daa, _0x12c9d1[_0x505355] || _0x4c3dd5)
      ? _0x426480["prKrj"]
      : "";
  return (
    '<a class="' +
    "cs-item li" +
    "ne-center " +
    _0x54ed69 +
    ('" data-men' + 'u="mainMen' + 'u" data="') +
    _0xd01daa +
    ('" data-lab' + 'el="') +
    _0xfb0096 +
    ('" data-key' + "=\x22") +
    _0x505355 +
    ('">\n       ' +
      "       <di" +
      'v class="c' +
      'si-color" ' +
      'style="bac' +
      "kground-co" +
      "lor: ") +
    _0xd01daa +
    (';"></div>\n' + "          " + "    <div c" + 'lass="csi-' + 'title">') +
    _0xfb0096 +
    ("</div>\n   " +
      "          " +
      " <i class=" +
      '"fa-solid ' +
      'fa-check">' +
      "</i>\n     " +
      "       </a" +
      ">")
  );
}
function renderItemFont(
  _0x402009,
  _0x57fbc9,
  _0x2c4c69,
  _0x3afd93 = playerInstance["getConfig"]()["captions"],
) {
  const _0x103d84 = _0x9f5b01,
    _0x307441 = {
      yqluW: function (_0x380ef7, _0x28bb7c) {
        return _0x380ef7(_0x28bb7c);
      },
      BvCpN: function (_0x355e31, _0x39fe3a) {
        return _0x355e31(_0x39fe3a);
      },
      YNZRr: function (_0x1de3e3, _0x10a825, _0x270562) {
        return _0x1de3e3(_0x10a825, _0x270562);
      },
      XYttA: function (_0xde153b, _0x20b7a0) {
        return _0xde153b === _0x20b7a0;
      },
      QxwBN: "active",
    };
  let _0x1369d4 = _0x402009,
    _0x183bc0 = _0x3afd93[_0x2c4c69];
  !_0x307441["yqluW"](isNaN, _0x1369d4) &&
    !_0x307441["BvCpN"](isNaN, _0x183bc0) &&
    ((_0x1369d4 = _0x307441["YNZRr"](
      parseInt,
      _0x1369d4,
      0x22e0 + 0x1 * -0xadb + -0x17fb,
    )),
    (_0x183bc0 = _0x307441["YNZRr"](
      parseInt,
      _0x183bc0,
      -0x11c2 + 0x626 + -0x6 * -0x1f1,
    )));
  const _0x1ed1f0 = _0x307441["XYttA"](_0x1369d4, _0x183bc0)
    ? _0x307441["QxwBN"]
    : "";
  return (
    '<a class="' +
    "cs-item li" +
    "ne-center " +
    _0x1ed1f0 +
    ('" data-men' + 'u="mainMen' + 'u" data="') +
    _0x402009 +
    ('" data-lab' + 'el="') +
    _0x57fbc9 +
    ('" data-key' + "=\x22") +
    _0x2c4c69 +
    ('">\n       ' + "       <di" + 'v class="c' + 'si-font">') +
    _0x57fbc9 +
    ("</div>\n   " +
      "          " +
      " <i class=" +
      '"fa-solid ' +
      'fa-check">' +
      "</i>\n     " +
      "       </a" +
      ">")
  );
}
function renderItemBorder() {
  const _0xf8a6dd = _0x9f5b01,
    _0x2e4c63 = {
      xvuie: function (_0x4ef448, _0xe5f4af) {
        return _0x4ef448 === _0xe5f4af;
      },
      NvXoB: "none",
      hdJXF: "active",
      efPjy: function (_0x3438f2, _0x18d9e7) {
        return _0x3438f2 === _0x18d9e7;
      },
      uzhcw: "raised",
      CVlXS: "uniform",
    },
    _0x570714 = playerInstance["getConfig"]()["captions"],
    _0x4e0e4c = _0x2e4c63["xvuie"](_0x570714["edgeStyle"], _0x2e4c63["NvXoB"])
      ? _0x2e4c63["hdJXF"]
      : "",
    _0x2156f9 = _0x2e4c63["efPjy"](_0x570714["edgeStyle"], _0x2e4c63["uzhcw"])
      ? _0x2e4c63["hdJXF"]
      : "",
    _0x24d57b = _0x2e4c63["xvuie"](_0x570714["edgeStyle"], _0x2e4c63["CVlXS"])
      ? _0x2e4c63["hdJXF"]
      : "";
  return (
    '<a class="' +
    "cs-item li" +
    "ne-center " +
    _0x4e0e4c +
    ('" data-men' +
      'u="mainMen' +
      'u" data="n' +
      'one" data-' +
      'label="Khô' +
      'ng viền" d' +
      'ata-key="e' +
      'dgeStyle">' +
      "\n         " +
      "     <div " +
      'class="csi' +
      '-font">Khô' +
      "ng viền</d" +
      "iv>\n      " +
      "        <i" +
      ' class="fa' +
      "-solid fa-" +
      'check"></i' +
      ">\n        " +
      "    </a>\n " +
      "          " +
      " <a class=" +
      '"cs-item l' +
      "ine-center" +
      "\x20") +
    _0x2156f9 +
    ('" data-men' +
      'u="mainMen' +
      'u" data="r' +
      'aised" dat' +
      'a-label="B' +
      'o viền" da' +
      'ta-key="ed' +
      'geStyle">\n' +
      "          " +
      "    <div c" +
      'lass="csi-' +
      'font">Bo v' +
      "iền</div>\n" +
      "          " +
      "    <i cla" +
      'ss="fa-sol' +
      "id fa-chec" +
      'k"></i>\n  ' +
      "          " +
      "</a>\n     " +
      "       <a " +
      'class="cs-' +
      "item line-" +
      "center ") +
    _0x24d57b +
    ('" data-men' +
      'u="mainMen' +
      'u" data="u' +
      'niform" da' +
      'ta-label="' +
      'Đổ bóng" d' +
      'ata-key="e' +
      'dgeStyle">' +
      "\n         " +
      "     <div " +
      'class="csi' +
      '-font">Đổ ' +
      "bóng</div>" +
      "\n         " +
      "     <i cl" +
      'ass="fa-so' +
      "lid fa-che" +
      'ck"></i>\n ' +
      "          " +
      " </a>\n    " +
      "        ")
  );
}
function hexXorDecrypt(_0x1bf76d, _0x1674e1) {
  const _0x4c0739 = _0x9f5b01,
    _0x2e1cd5 = {
      NXwlT: function (_0x3f610f, _0x3ebed8) {
        return _0x3f610f < _0x3ebed8;
      },
      awnMU: function (_0x255633, _0x1aea69, _0x1675c6) {
        return _0x255633(_0x1aea69, _0x1675c6);
      },
      xECBo: function (_0x1647e0, _0x29ba88) {
        return _0x1647e0 % _0x29ba88;
      },
      RQadG: function (_0x1228d4, _0x6f7b45) {
        return _0x1228d4 / _0x6f7b45;
      },
      mxEcy: function (_0x1c57b1, _0x496994) {
        return _0x1c57b1 ^ _0x496994;
      },
    };
  let _0x4f094e = "";
  for (
    let _0x23ec1a = 0x38c * -0x2 + 0x3 * -0xcde + -0x2 * -0x16d9;
    _0x2e1cd5["NXwlT"](_0x23ec1a, _0x1bf76d["length"]);
    _0x23ec1a += 0x1e17 + -0x42b * -0x1 + 0x1120 * -0x2
  ) {
    const _0x247ec2 = _0x1bf76d["substr"](_0x23ec1a, 0x2631 + 0xa3e + -0x306d),
      _0x2d73bf = _0x2e1cd5["awnMU"](
        parseInt,
        _0x247ec2,
        -0x7c * 0x1 + 0x199f + 0x31 * -0x83,
      ),
      _0xf71950 = _0x1674e1["charCodeAt"](
        _0x2e1cd5["xECBo"](
          _0x2e1cd5["RQadG"](_0x23ec1a, -0x2370 + -0x2 * 0xb2 + 0x24d6),
          _0x1674e1["length"],
        ),
      ),
      _0x3c5a16 = _0x2e1cd5["mxEcy"](_0x2d73bf, _0xf71950);
    _0x4f094e += String["fromCharCo" + "de"](_0x3c5a16);
  }
  return _0x4f094e;
}
let dataApi = null;
($("#toggle-ep" + "s")["on"]("click", function () {
  const _0xf08730 = _0x9f5b01,
    _0x4def4e = {
      QgIay: function (_0x4ec189, _0x198996) {
        return _0x4ec189(_0x198996);
      },
      MmYnq: ".jw-season" + "-label",
      UZsaB: "number",
      ikhuz: ".eps-list-" + "menu",
      mLHtI: ".jw-season" + "-dropdown",
      VaJUU: function (_0x211758) {
        return _0x211758();
      },
      YYafl: function (_0x163112, _0x17d334) {
        return _0x163112(_0x17d334);
      },
      idZBI: "#video_eps",
      qLmve: "active",
      qTYMM: function (_0xcbe2dd, _0x532d7d) {
        return _0xcbe2dd > _0x532d7d;
      },
      JOXfE: ".item-ep",
    };
  (_0x4def4e["YYafl"]($, _0x4def4e["idZBI"])["toggleClas" + "s"](
    _0x4def4e["qLmve"],
  ),
    playerInstance["pause"]());
  if (
    _0x4def4e["qTYMM"](
      _0x4def4e["YYafl"]($, _0x4def4e["JOXfE"])["length"],
      -0x4 * -0x559 + -0x23f4 + -0xe9 * -0x10,
    )
  )
    return;
  _0x4def4e["YYafl"](
    fetch,
    "/api/v1/ep" + "isodes/by-" + "idMovie/" + slugMovie,
  )
    ["then"]((_0xdf0b76) => _0xdf0b76["json"]())
    ["then"]((_0x55cfdf) => {
      const _0xc64657 = _0xf08730;
      dataApi = _0x55cfdf;
      const _0xd41a6a = () => {
          const _0x96163c = _0xfa96,
            _0x5063de = new Set();
          return (
            _0x55cfdf["forEach"]((_0x5dac61) => {
              const _0x1e4bc8 = _0x96163c;
              _0x5063de["add"](
                _0x5dac61["season_num" + "ber"] ??
                  0x1f04 + 0x19f1 + 0x5 * -0xb64,
              );
            }),
            [..._0x5063de]["sort"](
              (_0x570af4, _0xb680a0) => _0x570af4 - _0xb680a0,
            )
          );
        },
        _0x2312c1 = _0x4def4e["QgIay"]($, _0x4def4e["MmYnq"])["data"](
          _0x4def4e["UZsaB"],
        ),
        _0x39044c = _0x55cfdf["filter"](
          (_0x553802) => _0x553802["season_num" + "ber"] === Number(_0x2312c1),
        )["filter"](
          (_0x29b1f8, _0x3f9d03, _0x23b0f8) =>
            _0x3f9d03 ===
            _0x23b0f8["findIndex"](
              (_0x141a99) => _0x141a99["name"] === _0x29b1f8["name"],
            ),
        );
      (_0x4def4e["QgIay"]($, _0x4def4e["ikhuz"])["html"](
        _0x39044c["map"](
          (_0x2a4d02) =>
            '<a class="' +
            "item-ep " +
            (_0x2a4d02["id"] === parseInt(id) ? "active" : "") +
            ('" href="#"' + " data-mid=" + "\x22") +
            _0x2a4d02["id"] +
            ('">\n       ' +
              "     <div " +
              'class="v-t' +
              'humbnail">' +
              "\n         " +
              "     <img " +
              'loading="l' +
              'azy" src="') +
            (_0x2a4d02["poster"] || background) +
            ('" onload="' +
              "this.style" +
              ".display='" +
              "block';\" o" +
              'nerror="th' +
              "is.style.d" +
              "isplay='no" +
              "ne';\">\n   " +
              "         <" +
              "/div>\n    " +
              "        <d" +
              'iv class="' +
              'v-info">\n ' +
              "          " +
              "   <div cl" +
              'ass="v-tit' +
              'le">') +
            (_0x2a4d02["name"]["includes"]("tập")
              ? _0x2a4d02["name"]
              : "Tập " + _0x2a4d02["name"]) +
            ("</div>    " +
              "        \n " +
              "          " +
              " </div>\n  " +
              "        </" +
              "a>"),
        )["join"](""),
      ),
        _0x4def4e["QgIay"]($, _0x4def4e["mLHtI"])["html"](
          _0x4def4e["VaJUU"](_0xd41a6a)
            ["map"](
              (_0x291a09) =>
                "<li>\n     " +
                "          " +
                "   <a clas" +
                's="dropdow' +
                "n-item " +
                (String(_0x291a09) === String(_0x2312c1) ? "active" : "") +
                ('" href="#"' + " data-mid=" + "\x22") +
                _0x291a09 +
                ('">\n       ' +
                  "          " +
                  "   <span c" +
                  'lass="s-ti' +
                  'tle">Phần ') +
                _0x291a09 +
                ("</span>\n  " +
                  "          " +
                  "        <d" +
                  'iv class="' +
                  'w-check"><' +
                  'i class="f' +
                  "a-solid fa" +
                  '-check"></' +
                  "i></div>\n " +
                  "          " +
                  "       </a" +
                  ">\n        " +
                  "        </" +
                  "li>"),
            )
            ["join"](""),
        ));
    });
}),
  $("#eps-close")["on"]("click", function () {
    const _0x18866a = _0x9f5b01,
      _0xdda45d = {
        WBGlN: function (_0x47a7a9, _0x4e6db2) {
          return _0x47a7a9(_0x4e6db2);
        },
        SvRZR: "#video_eps",
        UgSUN: "active",
      };
    _0xdda45d["WBGlN"]($, _0xdda45d["SvRZR"])["removeClas" + "s"](
      _0xdda45d["UgSUN"],
    );
  }),
  $(document)["on"](
    "click",
    ".jw-season" + "-dropdown " + ".dropdown-" + "item",
    function () {
      const _0x112b1a = _0x9f5b01,
        _0x2eeb47 = {
          DqLNn: function (_0x549aa2, _0x401f93) {
            return _0x549aa2 - _0x401f93;
          },
          gnpYf: function (_0x4f140a, _0x15dcbd) {
            return _0x4f140a(_0x15dcbd);
          },
          tWFdB: "mid",
          XuQtU: function (_0x1ba54a, _0x4c1230) {
            return _0x1ba54a(_0x4c1230);
          },
          CIGnI: ".jw-season" + "-dropdown",
          mNwtL: "hide",
          bOyjv: ".jw-season" + "-dropdown " + ".dropdown-" + "item",
          KweaR: "active",
          mavvQ: function (_0x18fb29, _0x504f9e) {
            return _0x18fb29(_0x504f9e);
          },
          QqAss: ".jw-season" + "-label",
          Qntqr: ".eps-list-" + "menu",
        },
        _0x4c6c91 = _0x2eeb47["gnpYf"]($, this)["data"](_0x2eeb47["tWFdB"]),
        _0x512b9b = _0x2eeb47["XuQtU"]($, this)["text"]();
      let _0x170f48 = [];
      ((_0x170f48 = dataApi["filter"](
        (_0x46888e) => _0x46888e["season_num" + "ber"] === Number(_0x4c6c91),
      )
        ["filter"](
          (_0x5e1eb9, _0x31bf1e, _0x26a5a8) =>
            _0x31bf1e ===
            _0x26a5a8["findIndex"](
              (_0xea60dd) => _0xea60dd["name"] === _0x5e1eb9["name"],
            ),
        )
        ["sort"]((_0x57861f, _0x1bdc22) => {
          const _0xb1fd5c = _0x112b1a;
          return _0x2eeb47["DqLNn"](
            _0x2eeb47["gnpYf"](Number, _0x57861f["name"]),
            _0x2eeb47["gnpYf"](Number, _0x1bdc22["name"]),
          );
        })),
        _0x2eeb47["XuQtU"]($, _0x2eeb47["CIGnI"])["dropdown"](
          _0x2eeb47["mNwtL"],
        ),
        _0x2eeb47["XuQtU"]($, _0x2eeb47["bOyjv"])["removeClas" + "s"](
          _0x2eeb47["KweaR"],
        ),
        _0x2eeb47["gnpYf"]($, this)["addClass"](_0x2eeb47["KweaR"]),
        _0x2eeb47["mavvQ"]($, _0x2eeb47["QqAss"])["text"](_0x512b9b),
        _0x2eeb47["gnpYf"]($, _0x2eeb47["Qntqr"])["html"](
          _0x170f48["map"](
            (_0x1e5be2) =>
              '<a class="' +
              "item-ep " +
              (_0x1e5be2["id"] === parseInt(id) ? "active" : "") +
              ('" href="#"' + " data-mid=" + "\x22") +
              _0x1e5be2["id"] +
              ('">\n       ' +
                " <div clas" +
                's="v-thumb' +
                'nail">\n   ' +
                "       <im" +
                "g loading=" +
                '"lazy" src' +
                "=\x22") +
              (_0x1e5be2["poster"] || background) +
              ('" onload="' +
                "this.style" +
                ".display='" +
                "block';\" o" +
                'nerror="th' +
                "is.style.d" +
                "isplay='no" +
                "ne';\">\n   " +
                "     </div" +
                ">\n        " +
                "<div class" +
                '="v-info">' +
                "\n         " +
                " <div clas" +
                's="v-title' +
                "\x22>") +
              (_0x1e5be2["name"]["toLowerCas" + "e"]()["includes"]("tập")
                ? _0x1e5be2["name"]
                : "Tập " + _0x1e5be2["name"]) +
              ("</div>    " +
                "        \n " +
                "       </d" +
                "iv>\n      " +
                "</a>"),
          )["join"](""),
        ));
    },
  ),
  $(document)["on"]("click", ".eps-list-" + "menu .item" + "-ep", function () {
    const _0x4f2a1f = _0x9f5b01,
      _0x19cfe9 = {
        fZosb: function (_0x5bdcae, _0xb039d2) {
          return _0x5bdcae(_0xb039d2);
        },
        MBOmh: "mid",
        pRfdH: "CHANGE_EPI" + "SODE",
        ARBOR: "next",
      },
      _0x35a52d = _0x19cfe9["fZosb"]($, this)["data"](_0x19cfe9["MBOmh"]);
    window["parent"]["postMessag" + "e"](
      {
        type: _0x19cfe9["pRfdH"],
        episodeId: _0x35a52d,
        action: _0x19cfe9["ARBOR"],
      },
      "*",
    );
  }),
  $(".eps-mask")["on"]("click", function () {
    const _0x1104e3 = _0x9f5b01,
      _0x1e9c5e = {
        QVdXF: function (_0x10b007, _0x2ee985) {
          return _0x10b007(_0x2ee985);
        },
        oUitD: "#video_eps",
        buDCo: "active",
      };
    _0x1e9c5e["QVdXF"]($, _0x1e9c5e["oUitD"])["removeClas" + "s"](
      _0x1e9c5e["buDCo"],
    );
  }),
  $(document)["on"]("click", "#toggle-ss" + "pp-pop", function () {
    const _0x21194d = _0x9f5b01,
      _0x42ef4c = {
        wQfPH: function (_0x11d697, _0x532497) {
          return _0x11d697(_0x532497);
        },
        OYqhg: ".ssp-pop-i" + "d",
      };
    _0x42ef4c["wQfPH"]($, _0x42ef4c["OYqhg"])["remove"]();
  }));
isLive &&
  playerInstance["on"]("seek", function (_0x513113) {
    const _0x3abda0 = _0x9f5b01,
      _0x21ec26 = {
        WpNVF: function (_0x211e57, _0x8484c0) {
          return _0x211e57 > _0x8484c0;
        },
        NjLlZ: function (_0x355f50, _0x2a608d, _0x75bd01) {
          return _0x355f50(_0x2a608d, _0x75bd01);
        },
        aEqAe: function (_0x2eed91, _0x1b82c8) {
          return _0x2eed91 && _0x1b82c8;
        },
        Szuim: "seek",
      };
    if (!isHost) return;
    if (isHost && _0x21ec26["WpNVF"](_0x513113["offset"], currentPosition)) {
      _0x21ec26["NjLlZ"](
        setTimeout,
        () => {
          const _0x41ed16 = _0x3abda0;
          playerInstance["seek"](currentPosition);
        },
        0x1f61 * 0x1 + -0x18e7 + -0x67a,
      );
      return;
    }
    if (_0x21ec26["aEqAe"](isHost, !isSyncing)) {
      const _0x139757 =
        _0x513113["offset"] || playerInstance["getPositio" + "n"]();
      _0x21ec26["NjLlZ"](
        sendPlayerActionFromIframe,
        _0x21ec26["Szuim"],
        _0x139757,
      );
    }
  });
