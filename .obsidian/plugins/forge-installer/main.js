var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/main.ts
var main_exports = {};
__export(main_exports, {
  default: () => ForgeInstaller
});
module.exports = __toCommonJS(main_exports);
var import_obsidian3 = require("obsidian");

// src/installer.ts
var import_obsidian2 = require("obsidian");

// node_modules/fflate/esm/index.mjs
var import_module = require("module");
var require2 = (0, import_module.createRequire)("/");
var _a;
var Worker;
var isMarkedAsUntransferable;
try {
  _a = require2("worker_threads"), Worker = _a.Worker, isMarkedAsUntransferable = _a.isMarkedAsUntransferable;
} catch (e) {
}
var u8 = Uint8Array;
var u16 = Uint16Array;
var i32 = Int32Array;
var fleb = new u8([
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  1,
  1,
  2,
  2,
  2,
  2,
  3,
  3,
  3,
  3,
  4,
  4,
  4,
  4,
  5,
  5,
  5,
  5,
  0,
  /* unused */
  0,
  0,
  /* impossible */
  0
]);
var fdeb = new u8([
  0,
  0,
  0,
  0,
  1,
  1,
  2,
  2,
  3,
  3,
  4,
  4,
  5,
  5,
  6,
  6,
  7,
  7,
  8,
  8,
  9,
  9,
  10,
  10,
  11,
  11,
  12,
  12,
  13,
  13,
  /* unused */
  0,
  0
]);
var clim = new u8([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
var freb = function(eb, start) {
  var b = new u16(31);
  for (var i = 0; i < 31; ++i) {
    b[i] = start += 1 << eb[i - 1];
  }
  var r = new i32(b[30]);
  for (var i = 1; i < 30; ++i) {
    for (var j = b[i]; j < b[i + 1]; ++j) {
      r[j] = j - b[i] << 5 | i;
    }
  }
  return { b, r };
};
var _a = freb(fleb, 2);
var fl = _a.b;
var revfl = _a.r;
fl[28] = 258, revfl[258] = 28;
var _b = freb(fdeb, 0);
var fd = _b.b;
var revfd = _b.r;
var rev = new u16(32768);
for (i = 0; i < 32768; ++i) {
  x = (i & 43690) >> 1 | (i & 21845) << 1;
  x = (x & 52428) >> 2 | (x & 13107) << 2;
  x = (x & 61680) >> 4 | (x & 3855) << 4;
  rev[i] = ((x & 65280) >> 8 | (x & 255) << 8) >> 1;
}
var x;
var i;
var hMap = function(cd, mb, r) {
  var s = cd.length;
  var i = 0;
  var l = new u16(mb);
  for (; i < s; ++i) {
    if (cd[i])
      ++l[cd[i] - 1];
  }
  var le = new u16(mb);
  for (i = 1; i < mb; ++i) {
    le[i] = le[i - 1] + l[i - 1] << 1;
  }
  var co;
  if (r) {
    co = new u16(1 << mb);
    var rvb = 15 - mb;
    for (i = 0; i < s; ++i) {
      if (cd[i]) {
        var sv = i << 4 | cd[i];
        var r_1 = mb - cd[i];
        var v = le[cd[i] - 1]++ << r_1;
        for (var m = v | (1 << r_1) - 1; v <= m; ++v) {
          co[rev[v] >> rvb] = sv;
        }
      }
    }
  } else {
    co = new u16(s);
    for (i = 0; i < s; ++i) {
      if (cd[i]) {
        co[i] = rev[le[cd[i] - 1]++] >> 15 - cd[i];
      }
    }
  }
  return co;
};
var flt = new u8(288);
for (i = 0; i < 144; ++i)
  flt[i] = 8;
var i;
for (i = 144; i < 256; ++i)
  flt[i] = 9;
var i;
for (i = 256; i < 280; ++i)
  flt[i] = 7;
var i;
for (i = 280; i < 288; ++i)
  flt[i] = 8;
var i;
var fdt = new u8(32);
for (i = 0; i < 32; ++i)
  fdt[i] = 5;
var i;
var flrm = /* @__PURE__ */ hMap(flt, 9, 1);
var fdrm = /* @__PURE__ */ hMap(fdt, 5, 1);
var max = function(a) {
  var m = a[0];
  for (var i = 1; i < a.length; ++i) {
    if (a[i] > m)
      m = a[i];
  }
  return m;
};
var bits = function(d, p, m) {
  var o = p / 8 | 0;
  return (d[o] | d[o + 1] << 8) >> (p & 7) & m;
};
var bits16 = function(d, p) {
  var o = p / 8 | 0;
  return (d[o] | d[o + 1] << 8 | d[o + 2] << 16) >> (p & 7);
};
var shft = function(p) {
  return (p + 7) / 8 | 0;
};
var slc = function(v, s, e) {
  if (s == null || s < 0)
    s = 0;
  if (e == null || e > v.length)
    e = v.length;
  return new u8(v.subarray(s, e));
};
var ec = [
  "unexpected EOF",
  "invalid block type",
  "invalid length/literal",
  "invalid distance",
  "stream finished",
  "no stream handler",
  ,
  // determined by compression function
  "no callback",
  "invalid UTF-8 data",
  "extra field too long",
  "date not in range 1980-2099",
  "filename too long",
  "stream finishing",
  "invalid zip data"
  // determined by unknown compression method
];
var err = function(ind, msg, nt) {
  var e = new Error(msg || ec[ind]);
  e.code = ind;
  if (Error.captureStackTrace)
    Error.captureStackTrace(e, err);
  if (!nt)
    throw e;
  return e;
};
var inflt = function(dat, st, buf, dict) {
  var sl = dat.length, dl = dict ? dict.length : 0;
  if (!sl || st.f && !st.l)
    return buf || new u8(0);
  var noBuf = !buf;
  var resize = noBuf || st.i != 2;
  var noSt = st.i;
  if (noBuf)
    buf = new u8(sl * 3);
  var cbuf = function(l2) {
    var bl = buf.length;
    if (l2 > bl) {
      var nbuf = new u8(Math.max(bl * 2, l2));
      nbuf.set(buf);
      buf = nbuf;
    }
  };
  var final = st.f || 0, pos = st.p || 0, bt = st.b || 0, lm = st.l, dm = st.d, lbt = st.m, dbt = st.n;
  var tbts = sl * 8;
  do {
    if (!lm) {
      final = bits(dat, pos, 1);
      var type = bits(dat, pos + 1, 3);
      pos += 3;
      if (!type) {
        var s = shft(pos) + 4, l = dat[s - 4] | dat[s - 3] << 8, t = s + l;
        if (t > sl) {
          if (noSt)
            err(0);
          break;
        }
        if (resize)
          cbuf(bt + l);
        buf.set(dat.subarray(s, t), bt);
        st.b = bt += l, st.p = pos = t * 8, st.f = final;
        continue;
      } else if (type == 1)
        lm = flrm, dm = fdrm, lbt = 9, dbt = 5;
      else if (type == 2) {
        var hLit = bits(dat, pos, 31) + 257, hcLen = bits(dat, pos + 10, 15) + 4;
        var tl = hLit + bits(dat, pos + 5, 31) + 1;
        pos += 14;
        var ldt = new u8(tl);
        var clt = new u8(19);
        for (var i = 0; i < hcLen; ++i) {
          clt[clim[i]] = bits(dat, pos + i * 3, 7);
        }
        pos += hcLen * 3;
        var clb = max(clt), clbmsk = (1 << clb) - 1;
        var clm = hMap(clt, clb, 1);
        for (var i = 0; i < tl; ) {
          var r = clm[bits(dat, pos, clbmsk)];
          pos += r & 15;
          var s = r >> 4;
          if (s < 16) {
            ldt[i++] = s;
          } else {
            var c = 0, n = 0;
            if (s == 16)
              n = 3 + bits(dat, pos, 3), pos += 2, c = ldt[i - 1];
            else if (s == 17)
              n = 3 + bits(dat, pos, 7), pos += 3;
            else if (s == 18)
              n = 11 + bits(dat, pos, 127), pos += 7;
            while (n--)
              ldt[i++] = c;
          }
        }
        var lt = ldt.subarray(0, hLit), dt = ldt.subarray(hLit);
        lbt = max(lt);
        dbt = max(dt);
        lm = hMap(lt, lbt, 1);
        dm = hMap(dt, dbt, 1);
      } else
        err(1);
      if (pos > tbts) {
        if (noSt)
          err(0);
        break;
      }
    }
    if (resize)
      cbuf(bt + 131072);
    var lms = (1 << lbt) - 1, dms = (1 << dbt) - 1;
    var lpos = pos;
    for (; ; lpos = pos) {
      var c = lm[bits16(dat, pos) & lms], sym = c >> 4;
      pos += c & 15;
      if (pos > tbts) {
        if (noSt)
          err(0);
        break;
      }
      if (!c)
        err(2);
      if (sym < 256)
        buf[bt++] = sym;
      else if (sym == 256) {
        lpos = pos, lm = null;
        break;
      } else {
        var add = sym - 254;
        if (sym > 264) {
          var i = sym - 257, b = fleb[i];
          add = bits(dat, pos, (1 << b) - 1) + fl[i];
          pos += b;
        }
        var d = dm[bits16(dat, pos) & dms], dsym = d >> 4;
        if (!d)
          err(3);
        pos += d & 15;
        var dt = fd[dsym];
        if (dsym > 3) {
          var b = fdeb[dsym];
          dt += bits16(dat, pos) & (1 << b) - 1, pos += b;
        }
        if (pos > tbts) {
          if (noSt)
            err(0);
          break;
        }
        if (resize)
          cbuf(bt + 131072);
        var end = bt + add;
        if (bt < dt) {
          var shift = dl - dt, dend = Math.min(dt, end);
          if (shift + bt < 0)
            err(3);
          for (; bt < dend; ++bt)
            buf[bt] = dict[shift + bt];
        }
        for (; bt < end; ++bt)
          buf[bt] = buf[bt - dt];
      }
    }
    st.l = lm, st.p = lpos, st.b = bt, st.f = final;
    if (lm)
      final = 1, st.m = lbt, st.d = dm, st.n = dbt;
  } while (!final);
  return bt != buf.length && noBuf ? slc(buf, 0, bt) : buf.subarray(0, bt);
};
var et = /* @__PURE__ */ new u8(0);
var b2 = function(d, b) {
  return d[b] | d[b + 1] << 8;
};
var b4 = function(d, b) {
  return (d[b] | d[b + 1] << 8 | d[b + 2] << 16 | d[b + 3] << 24) >>> 0;
};
var b8 = function(d, b) {
  return b4(d, b) + b4(d, b + 4) * 4294967296;
};
function inflateSync(data, opts) {
  return inflt(data, { i: 2 }, opts && opts.out, opts && opts.dictionary);
}
var td = typeof TextDecoder != "undefined" && /* @__PURE__ */ new TextDecoder();
var tds = 0;
try {
  td.decode(et, { stream: true });
  tds = 1;
} catch (e) {
}
var dutf8 = function(d) {
  for (var r = "", i = 0; ; ) {
    var c = d[i++];
    var eb = (c > 127) + (c > 223) + (c > 239);
    if (i + eb > d.length)
      return { s: r, r: slc(d, i - 1) };
    if (!eb)
      r += String.fromCharCode(c);
    else if (eb == 3) {
      c = ((c & 15) << 18 | (d[i++] & 63) << 12 | (d[i++] & 63) << 6 | d[i++] & 63) - 65536, r += String.fromCharCode(55296 | c >> 10, 56320 | c & 1023);
    } else if (eb & 1)
      r += String.fromCharCode((c & 31) << 6 | d[i++] & 63);
    else
      r += String.fromCharCode((c & 15) << 12 | (d[i++] & 63) << 6 | d[i++] & 63);
  }
};
function strFromU8(dat, latin1) {
  if (latin1) {
    var r = "";
    for (var i = 0; i < dat.length; i += 16384)
      r += String.fromCharCode.apply(null, dat.subarray(i, i + 16384));
    return r;
  } else if (td) {
    return td.decode(dat);
  } else {
    var _a2 = dutf8(dat), s = _a2.s, r = _a2.r;
    if (r.length)
      err(8);
    return s;
  }
}
var slzh = function(d, b) {
  return b + 30 + b2(d, b + 26) + b2(d, b + 28);
};
var zh = function(d, b, z) {
  var fnl = b2(d, b + 28), efl = b2(d, b + 30), fn = strFromU8(d.subarray(b + 46, b + 46 + fnl), !(b2(d, b + 8) & 2048)), es = b + 46 + fnl;
  var _a2 = z64hs(d, es, efl, z, b4(d, b + 20), b4(d, b + 24), b4(d, b + 42)), sc = _a2[0], su = _a2[1], off = _a2[2];
  return [b2(d, b + 10), sc, su, fn, es + efl + b2(d, b + 32), off];
};
var z64hs = function(d, b, l, z, sc, su, off) {
  var nsc = sc == 4294967295, nsu = su == 4294967295, noff = off == 4294967295, e = b + l;
  var nf = nsc + nsu + noff;
  if (z && nf) {
    for (; b + 4 < e; b += 4 + b2(d, b + 2)) {
      if (b2(d, b) == 1) {
        return [
          nsc ? b8(d, b + 4 + 8 * nsu) : sc,
          nsu ? b8(d, b + 4) : su,
          noff ? b8(d, b + 4 + 8 * (nsu + nsc)) : off,
          1
        ];
      }
    }
    if (z < 2)
      err(13);
  }
  return [sc, su, off, 0];
};
function unzipSync(data, opts) {
  var files = {};
  var e = data.length - 22;
  for (; b4(data, e) != 101010256; --e) {
    if (!e || data.length - e > 65558)
      err(13);
  }
  ;
  var c = b2(data, e + 8);
  if (!c)
    return {};
  var o = b4(data, e + 16);
  var z = b4(data, e - 20) == 117853008;
  if (z) {
    var ze = b4(data, e - 12);
    z = b4(data, ze) == 101075792;
    if (z) {
      c = b4(data, ze + 32);
      o = b4(data, ze + 48);
    }
  }
  var fltr = opts && opts.filter;
  for (var i = 0; i < c; ++i) {
    var _a2 = zh(data, o, z), c_2 = _a2[0], sc = _a2[1], su = _a2[2], fn = _a2[3], no = _a2[4], off = _a2[5], b = slzh(data, off);
    o = no;
    if (!fltr || fltr({
      name: fn,
      size: sc,
      originalSize: su,
      compression: c_2
    })) {
      if (!c_2)
        files[fn] = slc(data, b, b + sc);
      else if (c_2 == 8)
        files[fn] = inflateSync(data.subarray(b, b + sc), { out: new u8(su) });
      else
        err(14, "unknown compression type " + c_2);
    }
  }
  return files;
}

// src/github-release.ts
var import_obsidian = require("obsidian");

// src/version.ts
function versionGreater(a, b) {
  const parse = (s) => {
    const norm = s.replace(/^v/, "").split(/[-+]/, 1)[0];
    const parts = norm.split(".").map((p) => {
      const n = Number(p);
      return Number.isFinite(n) ? n : 0;
    });
    return parts;
  };
  const aP = parse(a);
  const bP = parse(b);
  for (let i = 0; i < 3; i++) {
    const av = aP[i] ?? 0;
    const bv = bP[i] ?? 0;
    if (av > bv)
      return true;
    if (av < bv)
      return false;
  }
  return false;
}

// src/github-release.ts
var REPO = "frmoded/forge-client-obsidian";
async function fetchRelease(pinnedTag) {
  const url = pinnedTag ? `https://api.github.com/repos/${REPO}/releases/tags/${pinnedTag}` : `https://api.github.com/repos/${REPO}/releases/latest`;
  const res = await (0, import_obsidian.requestUrl)({ url, method: "GET", throw: false });
  if (res.status !== 200) {
    const detail = res.json && typeof res.json.message === "string" ? res.json.message : `HTTP ${res.status}`;
    throw new Error(`GitHub API: ${detail}`);
  }
  return res.json;
}

// src/zip-paths.ts
var ZIP_TOP_DIR_RE = /^forge-client-obsidian\//;
function stripZipTopDir(path) {
  return path.replace(ZIP_TOP_DIR_RE, "");
}

// src/enable-strategy.ts
function selectEnableStrategy(plugins) {
  if (plugins === null || typeof plugins !== "object")
    return null;
  const p = plugins;
  if (typeof p.enablePluginAndSave === "function") {
    return "enablePluginAndSave";
  }
  if (typeof p.enablePlugin === "function" && typeof p.saveData === "function") {
    return "enablePluginWithSaveData";
  }
  return null;
}

// src/installer.ts
var PLUGIN_ID = "forge-client-obsidian";
var PLUGIN_DIR_REL = `.obsidian/plugins/${PLUGIN_ID}`;
async function checkAndInstall(app, options = {}) {
  try {
    const release = await fetchRelease(options.pinnedTag);
    const installed = await readInstalledVersion(app);
    if (installed && !versionGreater(release.tag_name, installed)) {
      const plugins = app.plugins;
      const isLoaded = !!plugins?.plugins?.[PLUGIN_ID];
      if (!isLoaded) {
        await activatePlugin(app);
        return {
          status: "updated",
          detail: `v${installed} re-enabled (was unloaded)`
        };
      }
      return {
        status: "up-to-date",
        detail: `v${installed} is current`
      };
    }
    const asset = pickReleaseZip(release.assets);
    if (!asset) {
      return {
        status: "error",
        detail: `No .zip asset on release ${release.tag_name}`
      };
    }
    if (!options.silent) {
      new import_obsidian2.Notice(`Forge Installer: downloading ${release.tag_name} (${humanSize(asset.size)})\u2026`);
    }
    const res = await (0, import_obsidian2.requestUrl)({ url: asset.browser_download_url, method: "GET" });
    const zipBytes = new Uint8Array(res.arrayBuffer);
    const unzipped = unzipSync(zipBytes);
    await writePluginFiles(app, unzipped);
    await activatePlugin(app);
    return {
      status: installed ? "updated" : "installed",
      detail: `${installed ?? "fresh"} \u2192 ${release.tag_name}`
    };
  } catch (e) {
    return {
      status: "error",
      detail: e instanceof Error ? e.message : String(e)
    };
  }
}
async function readInstalledVersion(app) {
  const manifestPath = `${PLUGIN_DIR_REL}/manifest.json`;
  if (!await app.vault.adapter.exists(manifestPath))
    return null;
  try {
    const raw = await app.vault.adapter.read(manifestPath);
    const m = JSON.parse(raw);
    return typeof m.version === "string" ? m.version : null;
  } catch {
    return null;
  }
}
function pickReleaseZip(assets) {
  const canonical = assets.find((a) => /^forge-client-obsidian-v\d+\.\d+\.\d+\.zip$/.test(a.name));
  if (canonical)
    return canonical;
  return assets.find((a) => a.name.toLowerCase().endsWith(".zip")) ?? null;
}
async function writePluginFiles(app, unzipped) {
  let savedData = null;
  const dataPath = `${PLUGIN_DIR_REL}/data.json`;
  if (await app.vault.adapter.exists(dataPath)) {
    savedData = await app.vault.adapter.read(dataPath);
  }
  if (await app.vault.adapter.exists(PLUGIN_DIR_REL)) {
    await app.vault.adapter.rmdir(PLUGIN_DIR_REL, true);
  }
  await app.vault.adapter.mkdir(PLUGIN_DIR_REL);
  for (const [path, bytes] of Object.entries(unzipped)) {
    if (path.endsWith("/"))
      continue;
    const stripped = stripZipTopDir(path);
    if (stripped === "")
      continue;
    const targetPath = `${PLUGIN_DIR_REL}/${stripped}`;
    await ensureParentDir(app, targetPath);
    await app.vault.adapter.writeBinary(targetPath, bytes.buffer);
  }
  if (savedData !== null) {
    await app.vault.adapter.write(dataPath, savedData);
  }
}
async function ensureParentDir(app, fullPath) {
  const lastSlash = fullPath.lastIndexOf("/");
  if (lastSlash <= 0)
    return;
  const parent = fullPath.slice(0, lastSlash);
  if (await app.vault.adapter.exists(parent))
    return;
  const segments = parent.split("/");
  let cursor = "";
  for (const seg of segments) {
    cursor = cursor === "" ? seg : `${cursor}/${seg}`;
    if (!await app.vault.adapter.exists(cursor)) {
      await app.vault.adapter.mkdir(cursor);
    }
  }
}
async function activatePlugin(app) {
  const plugins = app.plugins;
  if (!plugins) {
    throw new Error("Obsidian plugin manager not available \u2014 Forge Installer cannot enable the plugin automatically");
  }
  if (plugins.plugins?.[PLUGIN_ID]) {
    await plugins.disablePlugin(PLUGIN_ID);
  }
  if (typeof plugins.loadManifests === "function") {
    await plugins.loadManifests();
  }
  const strategy = selectEnableStrategy(plugins);
  if (strategy === "enablePluginAndSave") {
    await plugins.enablePluginAndSave(PLUGIN_ID);
  } else if (strategy === "enablePluginWithSaveData") {
    await plugins.enablePlugin(PLUGIN_ID);
    await plugins.saveData();
  } else {
    throw new Error(
      "Obsidian plugin manager exposes no enablePluginAndSave or enablePlugin+saveData \u2014 Forge Installer cannot persist the enable"
    );
  }
}
function humanSize(bytes) {
  if (typeof bytes !== "number" || !Number.isFinite(bytes))
    return "?";
  if (bytes < 1024)
    return `${bytes} B`;
  if (bytes < 1024 * 1024)
    return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
}

// src/main.ts
var DEFAULT_SETTINGS = {
  pinnedTag: "",
  disableAfterFirstInstall: false
};
var ForgeInstaller = class extends import_obsidian3.Plugin {
  async onload() {
    await this.loadSettings();
    this.addSettingTab(new ForgeInstallerSettingTab(this.app, this));
    this.addCommand({
      id: "forge-installer-check-now",
      name: "Check for Forge Client updates now",
      callback: () => this.runInstall()
    });
    queueMicrotask(() => {
      void this.runInstall();
    });
  }
  async runInstall() {
    let result;
    try {
      result = await checkAndInstall(this.app, {
        pinnedTag: this.settings.pinnedTag || void 0,
        silent: false
      });
    } catch (e) {
      console.error("Forge Installer: unexpected throw", e);
      new import_obsidian3.Notice(`Forge Installer failed: ${e instanceof Error ? e.message : String(e)}`);
      return;
    }
    switch (result.status) {
      case "up-to-date":
        new import_obsidian3.Notice(`Forge Client is up to date \u2014 ${result.detail}`);
        break;
      case "installed":
        new import_obsidian3.Notice(`Forge Client installed \u2014 ${result.detail}`, 8e3);
        if (this.settings.disableAfterFirstInstall) {
          await this.app.plugins.disablePlugin(this.manifest.id);
        }
        break;
      case "updated":
        new import_obsidian3.Notice(`Forge Client updated \u2014 ${result.detail}`, 8e3);
        break;
      case "error":
        console.error("Forge Installer failed:", result.detail);
        new import_obsidian3.Notice(`Forge Installer failed: ${result.detail}`, 1e4);
        break;
    }
  }
  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }
  async saveSettings() {
    await this.saveData(this.settings);
  }
};
var ForgeInstallerSettingTab = class extends import_obsidian3.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    containerEl.createEl("h2", { text: "Forge Installer" });
    containerEl.createEl("p", {
      text: 'This plugin downloads and installs Forge Client from GitHub Releases. Use "Check for Forge Client updates now" (Cmd-P) to re-run on demand.'
    });
    new import_obsidian3.Setting(containerEl).setName("Pin to specific version").setDesc("Leave empty for latest. Example: v0.2.12. Pinning is useful for cohort-wide rollback to a known-good release.").addText(
      (t) => t.setPlaceholder("latest").setValue(this.plugin.settings.pinnedTag).onChange(async (v) => {
        this.plugin.settings.pinnedTag = v.trim();
        await this.plugin.saveSettings();
      })
    );
    new import_obsidian3.Setting(containerEl).setName("Disable this installer after first install").setDesc("Once Forge Client is installed, the installer disables itself. Re-enable in Community plugins to run an update later.").addToggle(
      (t) => t.setValue(this.plugin.settings.disableAfterFirstInstall).onChange(async (v) => {
        this.plugin.settings.disableAfterFirstInstall = v;
        await this.plugin.saveSettings();
      })
    );
    new import_obsidian3.Setting(containerEl).addButton(
      (b) => b.setButtonText("Check for updates now").setCta().onClick(() => this.plugin.runInstall())
    );
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
