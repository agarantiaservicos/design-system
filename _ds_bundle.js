/* @ds-bundle: {"format":3,"namespace":"AGarantiaDesignSystem_9885ce","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"IconChip","sourcePath":"components/core/IconChip.jsx"},{"name":"CheckList","sourcePath":"components/forms/CheckList.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"SegmentedTabs","sourcePath":"components/forms/SegmentedTabs.jsx"},{"name":"Accordion","sourcePath":"components/surfaces/Accordion.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"},{"name":"FeatureCard","sourcePath":"components/surfaces/FeatureCard.jsx"},{"name":"StatCard","sourcePath":"components/surfaces/StatCard.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"6485342242b7","components/core/Button.jsx":"42bb868f3444","components/core/IconChip.jsx":"217a52cb0d6e","components/forms/CheckList.jsx":"35eb4503fcbd","components/forms/Input.jsx":"ef5962931fcc","components/forms/SegmentedTabs.jsx":"a051d3560462","components/surfaces/Accordion.jsx":"58b82bbe1112","components/surfaces/Card.jsx":"81ef5c5d9c13","components/surfaces/FeatureCard.jsx":"87c3d3d5e372","components/surfaces/StatCard.jsx":"53b9490f8de1","ui_kits/app/DashboardView.jsx":"918daec60d1a","ui_kits/app/GarantiasView.jsx":"3017579c9fbb","ui_kits/app/NovaGarantiaModal.jsx":"c3ce33668777","ui_kits/app/Sidebar.jsx":"8f09343ac59d","ui_kits/app/Topbar.jsx":"88ec8544953f","ui_kits/website/ContatosPage.jsx":"830f162a21b1","ui_kits/website/FaqPage.jsx":"2f98996825ee","ui_kits/website/Footer.jsx":"15224ddc4962","ui_kits/website/HomePage.jsx":"9ef2b5885e9a","ui_kits/website/Navbar.jsx":"69c266d2e082","ui_kits/website/SobrePage.jsx":"a22f3c20cb6d"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AGarantiaDesignSystem_9885ce = window.AGarantiaDesignSystem_9885ce || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * AGarantia Badge — the uppercase pill label used as an "eyebrow" above headlines
 * (BENEFÍCIOS PARA, FLUXO DE APROVAÇÃO, API REST) and as status chips.
 */
function Badge({
  children,
  variant = 'soft',
  withDot = false,
  icon = null,
  style = {},
  ...rest
}) {
  const variants = {
    soft: {
      background: 'var(--ag-verde-100)',
      color: '#4E7D14',
      border: '1px solid rgba(122,184,41,0.22)'
    },
    success: {
      background: 'var(--ag-verde-vibrante)',
      color: 'var(--ag-navy)',
      border: '1px solid transparent'
    },
    dark: {
      background: 'rgba(255,255,255,0.08)',
      color: 'var(--ag-white)',
      border: '1px solid rgba(255,255,255,0.16)'
    },
    'dark-green': {
      background: 'rgba(122,184,41,0.16)',
      color: '#A8D46A',
      border: '1px solid rgba(122,184,41,0.3)'
    },
    navy: {
      background: 'rgba(21,49,79,0.06)',
      color: 'var(--ag-navy)',
      border: '1px solid rgba(21,49,79,0.12)'
    },
    amber: {
      background: 'var(--warning-soft)',
      color: '#9A6E00',
      border: '1px solid rgba(245,180,0,0.3)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--ag-cinza-medio)',
      border: '1px solid var(--ag-cinza-claro)'
    }
  };
  const v = variants[variant] || variants.soft;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      padding: '6px 13px',
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 11,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      borderRadius: 'var(--radius-pill)',
      lineHeight: 1,
      ...v,
      ...style
    }
  }, rest), withDot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: variant === 'success' ? 'var(--ag-navy)' : 'var(--ag-verde)'
    }
  }), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex'
    }
  }, icon), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * AGarantia Button — pill-shaped CTA following the brand's action language.
 * Primary uses the green gradient + soft glow; CTAs are always clear and verb-led
 * ("Solicitar Garantia", "Simule agora", "Falar com um consultor").
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  iconLeft = null,
  iconRight = null,
  fullWidth = false,
  disabled = false,
  type = 'button',
  onClick,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '9px 18px',
      fontSize: 13,
      gap: 7
    },
    md: {
      padding: '13px 26px',
      fontSize: 15,
      gap: 9
    },
    lg: {
      padding: '17px 34px',
      fontSize: 16,
      gap: 10
    }
  };
  const variants = {
    primary: {
      background: 'var(--gradient-verde)',
      color: 'var(--ag-white)',
      border: '1px solid transparent',
      boxShadow: 'var(--shadow-brand)'
    },
    vibrant: {
      background: 'var(--gradient-verde-vibrante)',
      color: 'var(--ag-navy)',
      border: '1px solid transparent',
      boxShadow: '0 12px 28px rgba(0,214,92,0.32)'
    },
    dark: {
      background: 'var(--ag-petroleo)',
      color: 'var(--ag-white)',
      border: '1px solid transparent',
      boxShadow: 'var(--shadow-sm)'
    },
    secondary: {
      background: 'var(--ag-white)',
      color: 'var(--ag-navy)',
      border: '1.5px solid var(--ag-cinza-claro)',
      boxShadow: 'var(--shadow-xs)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--ag-navy)',
      border: '1.5px solid var(--ag-cinza-claro)',
      boxShadow: 'none'
    },
    light: {
      /* sobre fundo escuro */
      background: 'var(--ag-white)',
      color: 'var(--ag-navy)',
      border: '1px solid transparent',
      boxShadow: '0 10px 24px rgba(0,0,0,0.18)'
    },
    'ghost-light': {
      background: 'transparent',
      color: 'var(--ag-white)',
      border: '1.5px solid rgba(255,255,255,0.35)',
      boxShadow: 'none'
    }
  };
  const s = sizes[size] || sizes.md;
  const v = variants[variant] || variants.primary;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: s.gap,
      width: fullWidth ? '100%' : 'auto',
      padding: s.padding,
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: s.fontSize,
      lineHeight: 1,
      letterSpacing: '-0.01em',
      borderRadius: 'var(--radius-pill)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      whiteSpace: 'nowrap',
      transition: 'transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), filter var(--dur-base) var(--ease-out)',
      ...v,
      ...style
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = 'scale(0.97)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'scale(1)';
    },
    onMouseEnter: e => {
      if (!disabled) e.currentTarget.style.filter = 'brightness(1.05)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'scale(1)';
      e.currentTarget.style.filter = 'none';
    }
  }, rest), iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex'
    }
  }, iconLeft), children, iconRight && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex'
    }
  }, iconRight));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconChip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * AGarantia IconChip — the rounded square/circle chip that holds a linear icon,
 * used across the site on feature cards and steps. Icons are outline, rounded,
 * monochrome (green on light, white/green on dark).
 */
function IconChip({
  children,
  tone = 'green-soft',
  shape = 'rounded',
  size = 48,
  style = {},
  ...rest
}) {
  const tones = {
    'green-soft': {
      background: 'var(--ag-verde-100)',
      color: '#4E7D14'
    },
    green: {
      background: 'var(--ag-verde)',
      color: 'var(--ag-white)'
    },
    navy: {
      background: 'rgba(21,49,79,0.06)',
      color: 'var(--ag-navy)'
    },
    teal: {
      background: 'rgba(13,118,130,0.12)',
      color: 'var(--ag-teal)'
    },
    'on-dark': {
      background: 'rgba(255,255,255,0.08)',
      color: 'var(--ag-white)'
    },
    'on-dark-green': {
      background: 'rgba(122,184,41,0.16)',
      color: '#A8D46A'
    },
    white: {
      background: 'var(--ag-white)',
      color: 'var(--ag-verde)'
    }
  };
  const t = tones[tone] || tones['green-soft'];
  const radius = shape === 'circle' ? '50%' : 'var(--radius-md)';
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: size,
      height: size,
      flex: 'none',
      borderRadius: radius,
      ...t,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconChip.jsx", error: String((e && e.message) || e) }); }

// components/forms/CheckList.jsx
try { (() => {
/**
 * AGarantia CheckList — the green-check benefit list used across the site
 * ("Sem fiador ou caução", "Aprovação em menos de 60s"). Each item can carry an
 * optional sub-description.
 */
function CheckList({
  items = [],
  tone = 'light',
  gap = 14,
  style = {}
}) {
  const onDark = tone === 'dark';
  return /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap,
      ...style
    }
  }, items.map((it, i) => {
    const text = typeof it === 'string' ? it : it.text;
    const desc = typeof it === 'string' ? null : it.desc;
    return /*#__PURE__*/React.createElement("li", {
      key: i,
      style: {
        display: 'flex',
        gap: 12,
        alignItems: desc ? 'flex-start' : 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 22,
        height: 22,
        flex: 'none',
        borderRadius: '50%',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: onDark ? 'rgba(122,184,41,0.18)' : 'var(--ag-verde-100)',
        color: onDark ? '#A8D46A' : '#4E7D14',
        marginTop: desc ? 2 : 0
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: "13",
      height: "13",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "3",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("polyline", {
      points: "20 6 9 17 4 12"
    }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        fontWeight: desc ? 600 : 500,
        fontSize: 15,
        color: onDark ? 'var(--ag-white)' : 'var(--ag-navy)'
      }
    }, text), desc && /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 3,
        fontFamily: 'var(--font-body)',
        fontSize: 13.5,
        lineHeight: 1.5,
        color: onDark ? 'rgba(255,255,255,0.7)' : 'var(--ag-cinza-medio)'
      }
    }, desc)));
  }));
}
Object.assign(__ds_scope, { CheckList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/CheckList.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * AGarantia Input — label in uppercase micro-caps above a soft-filled field,
 * matching the Contatos form. Supports text inputs and textarea.
 */
function Input({
  label,
  type = 'text',
  multiline = false,
  rows = 4,
  placeholder = '',
  value,
  defaultValue,
  onChange,
  iconLeft = null,
  hint = null,
  error = null,
  id,
  style = {},
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const fieldId = id || (label ? `f-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  const fieldStyle = {
    width: '100%',
    boxSizing: 'border-box',
    padding: multiline ? '14px 16px' : iconLeft ? '14px 16px 14px 44px' : '14px 16px',
    fontFamily: 'var(--font-body)',
    fontSize: 15,
    color: 'var(--ag-navy)',
    background: 'var(--ag-offwhite)',
    border: `1.5px solid ${error ? 'var(--danger)' : focused ? 'var(--ag-verde)' : 'transparent'}`,
    borderRadius: 'var(--radius-md)',
    outline: 'none',
    resize: multiline ? 'vertical' : undefined,
    boxShadow: focused ? '0 0 0 4px var(--focus-ring)' : 'none',
    transition: 'border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 11,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--ag-cinza-medio)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex'
    }
  }, iconLeft && !multiline && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 15,
      top: '50%',
      transform: 'translateY(-50%)',
      color: 'var(--ag-cinza-medio)',
      display: 'inline-flex',
      pointerEvents: 'none'
    }
  }, iconLeft), multiline ? /*#__PURE__*/React.createElement("textarea", _extends({
    id: fieldId,
    rows: rows,
    placeholder: placeholder,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: fieldStyle
  }, rest)) : /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    type: type,
    placeholder: placeholder,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: fieldStyle
  }, rest))), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12.5,
      color: error ? 'var(--danger)' : 'var(--ag-cinza-medio)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/SegmentedTabs.jsx
try { (() => {
/**
 * AGarantia SegmentedTabs — the pill toggle used to switch audience views
 * (Locatários · Proprietários · Imobiliárias). Active pill = white with shadow
 * on a soft track, or green when standalone.
 */
function SegmentedTabs({
  tabs = [],
  value,
  defaultValue,
  onChange,
  tone = 'light',
  style = {}
}) {
  const [internal, setInternal] = React.useState(defaultValue ?? (tabs[0] && tabs[0].id));
  const active = value !== undefined ? value : internal;
  const select = id => {
    if (value === undefined) setInternal(id);
    onChange && onChange(id);
  };
  const onDark = tone === 'dark';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      gap: 4,
      padding: 5,
      background: onDark ? 'rgba(255,255,255,0.08)' : 'var(--ag-white)',
      border: onDark ? '1px solid rgba(255,255,255,0.12)' : '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-pill)',
      boxShadow: onDark ? 'none' : 'var(--shadow-xs)',
      ...style
    }
  }, tabs.map(t => {
    const isActive = t.id === active;
    return /*#__PURE__*/React.createElement("button", {
      key: t.id,
      onClick: () => select(t.id),
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        padding: '10px 18px',
        border: 'none',
        cursor: 'pointer',
        borderRadius: 'var(--radius-pill)',
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        fontSize: 13.5,
        whiteSpace: 'nowrap',
        background: isActive ? onDark ? 'var(--ag-verde)' : 'var(--ag-verde)' : 'transparent',
        color: isActive ? '#fff' : onDark ? 'rgba(255,255,255,0.7)' : 'var(--ag-navy)',
        boxShadow: isActive ? 'var(--shadow-brand)' : 'none',
        transition: 'all var(--dur-base) var(--ease-out)'
      }
    }, t.icon && /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex'
      }
    }, t.icon), t.label);
  }));
}
Object.assign(__ds_scope, { SegmentedTabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SegmentedTabs.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Accordion.jsx
try { (() => {
/**
 * AGarantia Accordion — the FAQ disclosure used on the Central de Ajuda page.
 * White rounded pill-card, chevron rotates on open.
 */
function Accordion({
  items = [],
  allowMultiple = false,
  style = {}
}) {
  const [open, setOpen] = React.useState(() => new Set());
  const toggle = i => {
    setOpen(prev => {
      const next = new Set(allowMultiple ? prev : []);
      if (prev.has(i)) next.delete(i);else next.add(i);
      return next;
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      ...style
    }
  }, items.map((it, i) => {
    const isOpen = open.has(i);
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        background: 'var(--ag-white)',
        border: '1px solid var(--border-soft)',
        borderRadius: 'var(--radius-xl)',
        boxShadow: isOpen ? 'var(--shadow-card)' : 'var(--shadow-xs)',
        overflow: 'hidden',
        transition: 'box-shadow var(--dur-base) var(--ease-out)'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => toggle(i),
      style: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 16,
        padding: '20px 24px',
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        textAlign: 'left',
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        fontSize: 16,
        color: 'var(--ag-navy)'
      }
    }, /*#__PURE__*/React.createElement("span", null, it.q), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 28,
        height: 28,
        flex: 'none',
        borderRadius: '50%',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: isOpen ? 'var(--ag-verde)' : 'var(--ag-verde-100)',
        color: isOpen ? '#fff' : '#4E7D14',
        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
        transition: 'transform var(--dur-base) var(--ease-out), background var(--dur-base) var(--ease-out)'
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: "14",
      height: "14",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("polyline", {
      points: "6 9 12 15 18 9"
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        maxHeight: isOpen ? 260 : 0,
        opacity: isOpen ? 1 : 0,
        transition: 'max-height var(--dur-slow) var(--ease-out), opacity var(--dur-base) var(--ease-out)'
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        padding: '0 24px 22px',
        fontFamily: 'var(--font-body)',
        fontSize: 14.5,
        lineHeight: 1.6,
        color: 'var(--ag-cinza-medio)'
      }
    }, it.a)));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * AGarantia Card — the brand's core surface. Generously rounded, soft shadow.
 * tone sets the whole look: white (default), soft (pale green), dark (petróleo),
 * brand (solid green), teal, glass (translucent on dark sections).
 */
function Card({
  children,
  tone = 'white',
  padding = 28,
  interactive = false,
  style = {},
  ...rest
}) {
  const tones = {
    white: {
      background: 'var(--ag-white)',
      color: 'var(--ag-grafite)',
      border: '1px solid var(--border-soft)',
      boxShadow: 'var(--shadow-card)'
    },
    soft: {
      background: 'var(--ag-verde-050)',
      color: 'var(--ag-grafite)',
      border: '1px solid rgba(122,184,41,0.18)',
      boxShadow: 'none'
    },
    dark: {
      background: 'var(--gradient-petroleo)',
      color: 'var(--ag-white)',
      border: '1px solid rgba(255,255,255,0.06)',
      boxShadow: 'var(--shadow-dark)'
    },
    brand: {
      background: 'var(--gradient-verde)',
      color: 'var(--ag-white)',
      border: '1px solid transparent',
      boxShadow: 'var(--shadow-brand)'
    },
    teal: {
      background: 'var(--ag-teal)',
      color: 'var(--ag-white)',
      border: '1px solid transparent',
      boxShadow: 'var(--shadow-md)'
    },
    glass: {
      background: 'var(--surface-glass)',
      color: 'var(--ag-white)',
      border: '1px solid var(--surface-glass-border)',
      boxShadow: 'none',
      backdropFilter: 'blur(14px)'
    }
  };
  const t = tones[tone] || tones.white;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      borderRadius: 'var(--radius-xl)',
      padding,
      transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
      ...t,
      ...style
    },
    onMouseEnter: interactive ? e => {
      e.currentTarget.style.transform = 'translateY(-4px)';
    } : undefined,
    onMouseLeave: interactive ? e => {
      e.currentTarget.style.transform = 'translateY(0)';
    } : undefined
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/FeatureCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * AGarantia FeatureCard — the icon-chip + title + description block used all over
 * the marketing site. Composes Card + IconChip.
 */
function FeatureCard({
  icon = null,
  title,
  description,
  tone = 'white',
  chipTone,
  eyebrow = null,
  style = {},
  ...rest
}) {
  const onDark = tone === 'dark' || tone === 'brand' || tone === 'teal' || tone === 'glass';
  const resolvedChip = chipTone || (tone === 'brand' ? 'white' : onDark ? 'on-dark-green' : 'green-soft');
  return /*#__PURE__*/React.createElement(__ds_scope.Card, _extends({
    tone: tone,
    interactive: true,
    style: style
  }, rest), icon && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.IconChip, {
    tone: resolvedChip
  }, icon)), eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 11,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: onDark ? 'rgba(255,255,255,0.7)' : 'var(--ag-verde)',
      marginBottom: 8
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 19,
      letterSpacing: '-0.01em',
      color: onDark ? 'var(--ag-white)' : 'var(--ag-navy)'
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '10px 0 0',
      fontFamily: 'var(--font-body)',
      fontSize: 14.5,
      lineHeight: 1.6,
      color: onDark ? 'rgba(255,255,255,0.78)' : 'var(--ag-cinza-medio)'
    }
  }, description));
}
Object.assign(__ds_scope, { FeatureCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/FeatureCard.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/StatCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * AGarantia StatCard — the big-number proof card (timeline / metrics on Sobre).
 * "2021", "+R$2 Bi", "<60s" — number large, small uppercase label, short caption.
 */
function StatCard({
  icon = null,
  value,
  label,
  caption,
  tone = 'white',
  style = {},
  ...rest
}) {
  const onDark = tone === 'dark' || tone === 'brand' || tone === 'teal';
  const valueColor = tone === 'brand' ? 'var(--ag-white)' : onDark ? 'var(--ag-white)' : tone === 'soft' ? 'var(--ag-verde)' : 'var(--ag-navy)';
  return /*#__PURE__*/React.createElement(__ds_scope.Card, _extends({
    tone: tone,
    padding: 22,
    style: style
  }, rest), icon && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 'var(--radius-sm)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: onDark ? 'rgba(255,255,255,0.1)' : 'var(--ag-white)',
      color: onDark ? 'var(--ag-white)' : 'var(--ag-teal)',
      boxShadow: onDark ? 'none' : 'var(--shadow-xs)',
      marginBottom: 16
    }
  }, icon), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 30,
      letterSpacing: '-0.02em',
      lineHeight: 1,
      color: valueColor
    }
  }, value), label && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 10.5,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      marginTop: 10,
      color: onDark ? 'rgba(255,255,255,0.62)' : 'var(--ag-cinza-medio)'
    }
  }, label), caption && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '8px 0 0',
      fontFamily: 'var(--font-body)',
      fontSize: 13.5,
      lineHeight: 1.55,
      color: onDark ? 'rgba(255,255,255,0.8)' : 'var(--ag-grafite)'
    }
  }, caption));
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/StatCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/DashboardView.jsx
try { (() => {
/* AGarantia app — Dashboard (Visão Geral) */
function DashboardView() {
  const {
    Card
  } = window.DS;
  const stats = [{
    ic: 'ShieldCheck',
    label: 'Garantias ativas',
    value: '1.284',
    delta: '+12,4%',
    up: true,
    tone: 'green'
  }, {
    ic: 'Landmark',
    label: 'Volume garantido',
    value: 'R$ 38,2 Mi',
    delta: '+8,1%',
    up: true,
    tone: 'teal'
  }, {
    ic: 'TrendingUp',
    label: 'Comissões do mês',
    value: 'R$ 92.450',
    delta: '+21,7%',
    up: true,
    tone: 'navy'
  }, {
    ic: 'Gauge',
    label: 'Taxa de aprovação',
    value: '94,3%',
    delta: '+1,2%',
    up: true,
    tone: 'amber'
  }];
  const toneMap = {
    green: {
      bg: 'var(--ag-verde-100)',
      fg: '#4E7D14'
    },
    teal: {
      bg: 'rgba(13,118,130,0.12)',
      fg: 'var(--ag-teal)'
    },
    navy: {
      bg: 'rgba(21,49,79,0.07)',
      fg: 'var(--ag-navy)'
    },
    amber: {
      bg: 'var(--warning-soft)',
      fg: '#9A6E00'
    }
  };
  const recent = [{
    cli: 'Marina Costa',
    imovel: 'Apto 304 · Jurerê',
    valor: 'R$ 3.200',
    status: 'ativa',
    t: 'há 4 min'
  }, {
    cli: 'Eduardo Lima',
    imovel: 'Casa · Córrego Grande',
    valor: 'R$ 5.800',
    status: 'analise',
    t: 'há 22 min'
  }, {
    cli: 'Patrícia Souza',
    imovel: 'Studio · Centro',
    valor: 'R$ 1.950',
    status: 'ativa',
    t: 'há 1 h'
  }, {
    cli: 'Rafael Nunes',
    imovel: 'Apto 1102 · Trindade',
    valor: 'R$ 2.700',
    status: 'pendente',
    t: 'há 2 h'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 32,
      display: 'flex',
      flexDirection: 'column',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 18
    }
  }, stats.map(s => {
    const t = toneMap[s.tone];
    return /*#__PURE__*/React.createElement(Card, {
      key: s.label,
      tone: "white",
      padding: 22,
      interactive: true
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 44,
        height: 44,
        borderRadius: 'var(--radius-md)',
        background: t.bg,
        color: t.fg,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      n: s.ic,
      size: 22
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 3,
        fontSize: 12,
        fontWeight: 600,
        color: 'var(--ag-verde)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      n: "ArrowUpRight",
      size: 13,
      color: "var(--ag-verde)"
    }), s.delta)), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 27,
        color: 'var(--ag-navy)',
        marginTop: 16,
        letterSpacing: '-0.01em'
      }
    }, s.value), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12.5,
        color: 'var(--ag-cinza-medio)',
        marginTop: 2
      }
    }, s.label));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.6fr 1fr',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Card, {
    tone: "white",
    padding: 0
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px 24px',
      borderBottom: '1px solid var(--border-soft)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 17,
      color: 'var(--ag-navy)'
    }
  }, "Garantias recentes"), /*#__PURE__*/React.createElement("button", {
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: 'var(--ag-verde)',
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 13
    }
  }, "Ver todas")), /*#__PURE__*/React.createElement("div", null, recent.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '15px 24px',
      borderBottom: i < recent.length - 1 ? '1px solid var(--border-soft)' : 'none'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: r.cli
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 14.5,
      color: 'var(--ag-navy)'
    }
  }, r.cli), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: 'var(--ag-cinza-medio)'
    }
  }, r.imovel)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 14.5,
      color: 'var(--ag-navy)'
    }
  }, r.valor), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 110,
      display: 'flex',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement(StatusPill, {
    status: r.status
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 60,
      fontSize: 11.5,
      color: 'var(--ag-cinza-medio)',
      textAlign: 'right'
    }
  }, r.t))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Card, {
    tone: "dark",
    padding: 24
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 11,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,0.6)'
    }
  }, "Carteira AGT"), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-cadeado.png",
    alt: "",
    style: {
      height: 22,
      opacity: 0.9
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 30,
      color: '#fff',
      letterSpacing: '-0.01em'
    }
  }, "184.920 ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      color: '#A8D46A'
    }
  }, "AGT")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'rgba(255,255,255,0.66)',
      marginTop: 4
    }
  }, "\u2248 R$ 184.920,00 \xB7 lastro 1:1"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      flex: 1,
      padding: '10px',
      borderRadius: 'var(--radius-pill)',
      border: 'none',
      background: 'var(--ag-verde)',
      color: '#fff',
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 13,
      cursor: 'pointer'
    }
  }, "Resgatar"), /*#__PURE__*/React.createElement("button", {
    style: {
      flex: 1,
      padding: '10px',
      borderRadius: 'var(--radius-pill)',
      border: '1px solid rgba(255,255,255,0.22)',
      background: 'transparent',
      color: '#fff',
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 13,
      cursor: 'pointer'
    }
  }, "Extrato"))), /*#__PURE__*/React.createElement(Card, {
    tone: "white",
    padding: 22
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 15,
      color: 'var(--ag-navy)',
      marginBottom: 16
    }
  }, "Aprova\xE7\xE3o por IA"), [['Aprovadas', 94, 'var(--ag-verde)'], ['Em análise', 4, 'var(--ag-teal)'], ['Recusadas', 2, 'var(--ag-cinza-medio)']].map(r => /*#__PURE__*/React.createElement("div", {
    key: r[0],
    style: {
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 12.5,
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ag-grafite)'
    }
  }, r[0]), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      color: 'var(--ag-navy)'
    }
  }, r[1], "%")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 7,
      borderRadius: 99,
      background: 'var(--ag-cinza-claro)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: r[1] + '%',
      height: '100%',
      background: r[2],
      borderRadius: 99
    }
  }))))))));
}
window.DashboardView = DashboardView;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/DashboardView.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/GarantiasView.jsx
try { (() => {
/* AGarantia app — Garantias (contracts table) */
function GarantiasView() {
  const {
    Card,
    SegmentedTabs
  } = window.DS;
  const [filter, setFilter] = React.useState('todas');
  const rows = [{
    id: 'AGT-90412',
    cli: 'Marina Costa',
    imovel: 'Apto 304 · Jurerê Internacional',
    valor: 'R$ 3.200',
    mensal: 'R$ 96',
    status: 'ativa',
    venc: '12/2026'
  }, {
    id: 'AGT-90411',
    cli: 'Eduardo Lima',
    imovel: 'Casa · Córrego Grande',
    valor: 'R$ 5.800',
    mensal: 'R$ 174',
    status: 'analise',
    venc: '—'
  }, {
    id: 'AGT-90408',
    cli: 'Patrícia Souza',
    imovel: 'Studio · Centro',
    valor: 'R$ 1.950',
    mensal: 'R$ 58',
    status: 'ativa',
    venc: '03/2027'
  }, {
    id: 'AGT-90405',
    cli: 'Rafael Nunes',
    imovel: 'Apto 1102 · Trindade',
    valor: 'R$ 2.700',
    mensal: 'R$ 81',
    status: 'pendente',
    venc: '—'
  }, {
    id: 'AGT-90399',
    cli: 'Bianca Reis',
    imovel: 'Cobertura · Lagoa',
    valor: 'R$ 8.400',
    mensal: 'R$ 252',
    status: 'ativa',
    venc: '09/2026'
  }, {
    id: 'AGT-90388',
    cli: 'Thiago Alves',
    imovel: 'Apto 22 · Estreito',
    valor: 'R$ 2.100',
    mensal: 'R$ 63',
    status: 'expirada',
    venc: '01/2026'
  }];
  const tabs = [{
    id: 'todas',
    label: 'Todas'
  }, {
    id: 'ativa',
    label: 'Ativas'
  }, {
    id: 'analise',
    label: 'Em análise'
  }, {
    id: 'pendente',
    label: 'Pendentes'
  }];
  const shown = filter === 'todas' ? rows : rows.filter(r => r.status === filter);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 32,
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(SegmentedTabs, {
    tabs: tabs,
    value: filter,
    onChange: setFilter
  }), /*#__PURE__*/React.createElement("button", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      padding: '10px 16px',
      borderRadius: 'var(--radius-pill)',
      border: '1px solid var(--border-subtle)',
      background: '#fff',
      color: 'var(--ag-navy)',
      fontFamily: 'var(--font-body)',
      fontWeight: 500,
      fontSize: 13.5,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "SlidersHorizontal",
    size: 16,
    color: "var(--ag-cinza-medio)"
  }), " Filtros")), /*#__PURE__*/React.createElement(Card, {
    tone: "white",
    padding: 0
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.1fr 2fr 1fr 1fr 1.1fr 0.9fr 40px',
      gap: 12,
      padding: '14px 24px',
      borderBottom: '1px solid var(--border-soft)',
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 11,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--ag-cinza-medio)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Token"), /*#__PURE__*/React.createElement("span", null, "Cliente / Im\xF3vel"), /*#__PURE__*/React.createElement("span", null, "Garantia"), /*#__PURE__*/React.createElement("span", null, "Mensal"), /*#__PURE__*/React.createElement("span", null, "Status"), /*#__PURE__*/React.createElement("span", null, "Vencimento"), /*#__PURE__*/React.createElement("span", null)), shown.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: r.id,
    style: {
      display: 'grid',
      gridTemplateColumns: '1.1fr 2fr 1fr 1fr 1.1fr 0.9fr 40px',
      gap: 12,
      padding: '15px 24px',
      alignItems: 'center',
      borderBottom: i < shown.length - 1 ? '1px solid var(--border-soft)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 12.5,
      color: 'var(--ag-teal)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, r.id), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: r.cli,
    size: 34
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 14,
      color: 'var(--ag-navy)'
    }
  }, r.cli), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--ag-cinza-medio)'
    }
  }, r.imovel))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 14,
      color: 'var(--ag-navy)'
    }
  }, r.valor), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13.5,
      color: 'var(--ag-grafite)'
    }
  }, r.mensal), /*#__PURE__*/React.createElement(StatusPill, {
    status: r.status
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--ag-grafite)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, r.venc), /*#__PURE__*/React.createElement("button", {
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: 'var(--ag-cinza-medio)',
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "MoreHorizontal",
    size: 18,
    color: "var(--ag-cinza-medio)"
  }))))));
}
window.GarantiasView = GarantiasView;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/GarantiasView.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/NovaGarantiaModal.jsx
try { (() => {
/* AGarantia app — Nova Garantia modal (3-step flow mock) */
function NovaGarantiaModal({
  open,
  onClose
}) {
  const {
    Button,
    Input,
    Badge
  } = window.DS;
  const [step, setStep] = React.useState(0);
  const [done, setDone] = React.useState(false);
  React.useEffect(() => {
    if (open) {
      setStep(0);
      setDone(false);
    }
  }, [open]);
  if (!open) return null;
  const steps = ['Imóvel', 'Locatário', 'Emissão'];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      background: 'rgba(12,34,54,0.5)',
      backdropFilter: 'blur(4px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: 540,
      background: '#fff',
      borderRadius: 'var(--radius-2xl)',
      boxShadow: 'var(--shadow-lg)',
      overflow: 'hidden'
    }
  }, done ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '48px 40px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 72,
      height: 72,
      margin: '0 auto 18px',
      borderRadius: '50%',
      background: 'var(--ag-verde-100)',
      color: '#4E7D14',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "ShieldCheck",
    size: 36
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 23,
      color: 'var(--ag-navy)'
    }
  }, "Garantia emitida!"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '10px auto 8px',
      maxWidth: 360,
      fontSize: 14.5,
      color: 'var(--ag-cinza-medio)'
    }
  }, "Token ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--ag-teal)'
    }
  }, "AGT-90413"), " mintado on-chain. Aprova\xE7\xE3o em ", /*#__PURE__*/React.createElement("strong", null, "38s"), "."), /*#__PURE__*/React.createElement(Badge, {
    variant: "success",
    withDot: true,
    style: {
      marginBottom: 24
    }
  }, "Liquidez imediata garantida"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: onClose
  }, "Concluir"))) : /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '22px 28px',
      borderBottom: '1px solid var(--border-soft)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 19,
      color: 'var(--ag-navy)'
    }
  }, "Nova Garantia"), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: 'var(--ag-cinza-medio)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "X",
    size: 20,
    color: "var(--ag-cinza-medio)"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      padding: '18px 28px'
    }
  }, steps.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s,
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 4,
      borderRadius: 99,
      background: i <= step ? 'var(--ag-verde)' : 'var(--ag-cinza-claro)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: i <= step ? 'var(--ag-navy)' : 'var(--ag-cinza-medio)'
    }
  }, i + 1, ". ", s)))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px 28px 24px',
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      minHeight: 180
    }
  }, step === 0 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Input, {
    label: "Endere\xE7o do im\xF3vel",
    placeholder: "Rua, n\xFAmero, bairro"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Valor do aluguel",
    placeholder: "R$ 0,00"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Tipo",
    placeholder: "Apartamento"
  }))), step === 1 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Input, {
    label: "Nome do locat\xE1rio",
    placeholder: "Nome completo"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "CPF",
    placeholder: "000.000.000-00"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "E-mail",
    type: "email",
    placeholder: "email@exemplo.com"
  }))), step === 2 && /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--ag-verde-050)',
      border: '1px solid rgba(122,184,41,0.2)',
      borderRadius: 'var(--radius-lg)',
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 15,
      color: 'var(--ag-navy)',
      marginBottom: 12
    }
  }, "Revis\xE3o"), [['Imóvel', 'Apto 304 · Jurerê'], ['Garantia', 'R$ 3.200/mês'], ['Locatário', 'Marina Costa'], ['Análise IA', 'Score 842 · baixo risco']].map(r => /*#__PURE__*/React.createElement("div", {
    key: r[0],
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '7px 0',
      fontSize: 13.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ag-cinza-medio)'
    }
  }, r[0]), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      color: 'var(--ag-navy)'
    }
  }, r[1]))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '18px 28px',
      borderTop: '1px solid var(--border-soft)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: step === 0 ? onClose : () => setStep(step - 1)
  }, step === 0 ? 'Cancelar' : 'Voltar'), step < 2 ? /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      n: "ArrowRight",
      size: 17,
      color: "#fff"
    }),
    onClick: () => setStep(step + 1)
  }, "Continuar") : /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      n: "Sparkles",
      size: 16,
      color: "#fff"
    }),
    onClick: () => setDone(true)
  }, "Emitir Garantia")))));
}
window.NovaGarantiaModal = NovaGarantiaModal;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/NovaGarantiaModal.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/Sidebar.jsx
try { (() => {
/* AGarantia app — sidebar navigation */
function Sidebar({
  view,
  setView
}) {
  const items = [{
    id: 'dashboard',
    label: 'Visão Geral',
    icon: 'LayoutDashboard'
  }, {
    id: 'garantias',
    label: 'Garantias',
    icon: 'ShieldCheck'
  }, {
    id: 'carteira',
    label: 'Carteira AGT',
    icon: 'Wallet'
  }, {
    id: 'clientes',
    label: 'Clientes',
    icon: 'Users'
  }, {
    id: 'comissoes',
    label: 'Comissões',
    icon: 'TrendingUp'
  }, {
    id: 'integracoes',
    label: 'API & Integrações',
    icon: 'Plug'
  }];
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 248,
      flex: 'none',
      background: 'var(--ag-petroleo)',
      display: 'flex',
      flexDirection: 'column',
      padding: '24px 16px',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '4px 10px 24px'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-full-white.png",
    alt: "agarantia",
    style: {
      height: 26
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      flex: 1
    }
  }, items.map(it => {
    const active = view === it.id;
    return /*#__PURE__*/React.createElement("button", {
      key: it.id,
      onClick: () => setView(it.id),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '11px 14px',
        border: 'none',
        cursor: 'pointer',
        textAlign: 'left',
        borderRadius: 'var(--radius-md)',
        background: active ? 'var(--ag-verde)' : 'transparent',
        color: active ? '#fff' : 'rgba(255,255,255,0.66)',
        fontFamily: 'var(--font-body)',
        fontWeight: active ? 600 : 500,
        fontSize: 14,
        boxShadow: active ? 'var(--shadow-brand)' : 'none',
        transition: 'all var(--dur-base) var(--ease-out)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      n: it.icon,
      size: 19,
      color: active ? '#fff' : 'rgba(255,255,255,0.7)'
    }), it.label);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'rgba(255,255,255,0.06)',
      border: '1px solid rgba(255,255,255,0.1)',
      borderRadius: 'var(--radius-lg)',
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "Headphones",
    size: 17,
    color: "#A8D46A"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 13.5,
      color: '#fff'
    }
  }, "Suporte 24/7")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 12px',
      fontSize: 12,
      lineHeight: 1.5,
      color: 'rgba(255,255,255,0.6)'
    }
  }, "Time dedicado para sua opera\xE7\xE3o."), /*#__PURE__*/React.createElement("button", {
    style: {
      width: '100%',
      padding: '8px',
      borderRadius: 'var(--radius-pill)',
      border: '1px solid rgba(255,255,255,0.2)',
      background: 'transparent',
      color: '#fff',
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 12.5,
      cursor: 'pointer'
    }
  }, "Falar agora")));
}
window.Sidebar = Sidebar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/Sidebar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/Topbar.jsx
try { (() => {
/* AGarantia app — top bar */
function Topbar({
  title,
  subtitle,
  onNew
}) {
  const {
    Button
  } = window.DS;
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '22px 32px',
      borderBottom: '1px solid var(--border-soft)',
      background: 'rgba(255,255,255,0.7)',
      backdropFilter: 'blur(8px)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 23,
      color: 'var(--ag-navy)',
      letterSpacing: '-0.01em'
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '4px 0 0',
      fontSize: 13.5,
      color: 'var(--ag-cinza-medio)'
    }
  }, subtitle)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '9px 14px',
      background: '#fff',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-pill)',
      width: 220
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "Search",
    size: 16,
    color: "var(--ag-cinza-medio)"
  }), /*#__PURE__*/React.createElement("input", {
    placeholder: "Buscar garantia, cliente\u2026",
    style: {
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: 'var(--ag-navy)',
      width: '100%'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      width: 40,
      height: 40,
      borderRadius: '50%',
      background: '#fff',
      border: '1px solid var(--border-subtle)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "Bell",
    size: 18,
    color: "var(--ag-navy)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 8,
      right: 9,
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: 'var(--ag-verde-vibrante)',
      border: '1.5px solid #fff'
    }
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      n: "Plus",
      size: 16,
      color: "#fff"
    }),
    onClick: onNew
  }, "Nova Garantia"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      paddingLeft: 6
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Cidades Imobili\xE1ria"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      lineHeight: 1.2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 13.5,
      color: 'var(--ag-navy)'
    }
  }, "Cidades Imob."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: 'var(--ag-cinza-medio)'
    }
  }, "Admin")))));
}
window.Topbar = Topbar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/Topbar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ContatosPage.jsx
try { (() => {
/* AGarantia website — Contatos page */
function ContatosPage() {
  const {
    Button,
    Badge,
    Input,
    Card
  } = window.DS;
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--surface-page)',
      padding: '64px 0 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--gradient-hero-light)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement(Plus, {
    top: 60,
    left: "9%",
    size: 16
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 1200,
      margin: '0 auto',
      padding: '0 56px'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: "soft",
    style: {
      marginBottom: 22
    }
  }, "Atendimento AGarantia"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 50,
      lineHeight: 1.06,
      letterSpacing: '-0.025em',
      color: 'var(--ag-navy)'
    }
  }, "Estamos \xE0 disposi\xE7\xE3o", /*#__PURE__*/React.createElement("br", null), "para ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ag-verde)'
    }
  }, "ouvir voc\xEA.")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '20px 0 0',
      fontSize: 17,
      lineHeight: 1.6,
      color: 'var(--ag-cinza-medio)',
      maxWidth: 480
    }
  }, "Tire suas d\xFAvidas, solicite informa\xE7\xF5es ou agende uma conversa com nossos especialistas em fiduci\xE1rio digital."))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-page)',
      padding: '36px 0 80px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '0 56px',
      display: 'grid',
      gridTemplateColumns: '1.3fr 1fr',
      gap: 24,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    tone: "white",
    padding: 38
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 24,
      color: 'var(--ag-navy)',
      marginBottom: 22
    }
  }, "Envie uma mensagem"), sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 14,
      padding: '40px 0'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 64,
      height: 64,
      borderRadius: '50%',
      background: 'var(--ag-verde-100)',
      color: '#4E7D14',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "Check",
    size: 32
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 19,
      color: 'var(--ag-navy)'
    }
  }, "Mensagem enviada!"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14.5,
      color: 'var(--ag-cinza-medio)',
      textAlign: 'center'
    }
  }, "Em menos de 60s um especialista entra em contato."), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => setSent(false)
  }, "Enviar outra")) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Nome",
    placeholder: "Seu nome completo"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "E-mail",
    type: "email",
    placeholder: "contato@empresa.com"
  })), /*#__PURE__*/React.createElement(Input, {
    label: "Assunto",
    placeholder: "Como podemos ajudar?"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Mensagem",
    multiline: true,
    rows: 4,
    placeholder: "Descreva sua solicita\xE7\xE3o ou d\xFAvida\u2026"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    fullWidth: true,
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      n: "Send",
      size: 17,
      color: "#fff"
    }),
    onClick: () => setSent(true)
  }, "Enviar Mensagem"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Card, {
    tone: "dark",
    padding: 32
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 21,
      color: '#fff',
      marginBottom: 8
    }
  }, "Canais Diretos"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 24px',
      fontSize: 14,
      lineHeight: 1.6,
      color: 'rgba(255,255,255,0.72)'
    }
  }, "Resposta imediata via canais digitais ou agendamento de reuni\xF5es presenciais em nossa sede."), [{
    ic: 'Mail',
    v: 'contato@agarantia.com.br'
  }, {
    ic: 'Phone',
    v: '(48) 3050-3030'
  }, {
    ic: 'MapPin',
    v: 'Florianópolis, SC'
  }].map(r => /*#__PURE__*/React.createElement("div", {
    key: r.v,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '12px 0',
      borderTop: '1px solid rgba(255,255,255,0.1)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 'var(--radius-md)',
      background: 'rgba(255,255,255,0.08)',
      color: '#A8D46A',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    n: r.ic,
    size: 18
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      color: '#fff',
      fontWeight: 500
    }
  }, r.v)))), /*#__PURE__*/React.createElement(Card, {
    tone: "white",
    padding: 28
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 11,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--ag-cinza-medio)',
      marginBottom: 14
    }
  }, "Hor\xE1rio de atendimento"), [['Segunda – Sexta', '8h – 18h'], ['Sábado', '9h – 13h'], ['Domingo', 'Fechado']].map(r => /*#__PURE__*/React.createElement("div", {
    key: r[0],
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '9px 0',
      borderTop: '1px solid var(--border-soft)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14.5,
      color: 'var(--ag-grafite)'
    }
  }, r[0]), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14.5,
      fontWeight: 600,
      color: r[1] === 'Fechado' ? 'var(--ag-cinza-medio)' : 'var(--ag-navy)'
    }
  }, r[1]))))))));
}
window.ContatosPage = ContatosPage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ContatosPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/FaqPage.jsx
try { (() => {
/* AGarantia website — FAQ page */
function FaqPage({
  setPage
}) {
  const {
    Button,
    Badge,
    Accordion
  } = window.DS;
  const left = [{
    q: 'O que é a AGarantia?',
    a: 'Uma fintech/proptech que oferece garantia locatícia digital: substituímos fiador, caução e seguro-fiança por um ativo tokenizado (token AGT) registrado em blockchain e lastreado em moeda fiduciária.'
  }, {
    q: 'Quanto custa para o locatário?',
    a: 'Você paga uma mensalidade acessível — via cartão ou boleto — sem imobilizar capital em caução. Parte do valor pode ainda retornar como cashback e benefícios.'
  }, {
    q: 'A AGarantia é um banco?',
    a: 'Não. Somos uma plataforma de garantia locatícia digital. Operamos sob compliance LGPD & BACEN, com arquitetura distribuída e criptografia AES-256.'
  }, {
    q: 'Quais documentos são necessários?',
    a: 'Apenas os dados essenciais do locatário e do imóvel. O cadastro leva menos de 2 minutos e a análise de crédito é automatizada.'
  }];
  const right = [{
    q: 'É seguro usar blockchain para aluguel?',
    a: 'Sim. Os contratos são inteligentes e imutáveis, com dados auditáveis on-chain em tempo real por qualquer stakeholder.'
  }, {
    q: 'Como funciona a aprovação?',
    a: 'Nossa IA processa mais de 5.000 pontos de dados e retorna a aprovação em menos de 60 segundos, considerando além do score tradicional.'
  }, {
    q: 'O que ganha a imobiliária?',
    a: 'Inadimplência zero, repasse pontual, comissão a cada operação, painel dashboard completo e integração nativa via API.'
  }, {
    q: 'Posso recuperar o valor pago?',
    a: 'Parte do ativo pode retornar ao locatário em forma de cashback e acesso ao Clube de Benefícios Exclusivo.'
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--surface-page)',
      padding: '64px 0 30px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--gradient-hero-light)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement(Plus, {
    top: 70,
    left: "10%",
    size: 18
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 1200,
      margin: '0 auto',
      padding: '0 56px'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: "soft",
    style: {
      marginBottom: 22
    }
  }, "Central de Ajuda"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 52,
      lineHeight: 1.05,
      letterSpacing: '-0.025em',
      color: 'var(--ag-navy)'
    }
  }, "Como podemos", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ag-verde)'
    }
  }, "ajudar?")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '20px 0 0',
      fontSize: 17,
      lineHeight: 1.6,
      color: 'var(--ag-cinza-medio)',
      maxWidth: 480
    }
  }, "Explore as d\xFAvidas mais comuns sobre o fiduci\xE1rio digital e como estamos transformando a seguran\xE7a no mercado imobili\xE1rio."))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-page)',
      padding: '40px 0 80px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '0 56px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Accordion, {
    items: left
  }), /*#__PURE__*/React.createElement(Accordion, {
    items: right
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 36,
      background: '#fff',
      borderRadius: 'var(--radius-xl)',
      borderLeft: '4px solid var(--ag-verde)',
      boxShadow: 'var(--shadow-card)',
      padding: '32px 36px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 22,
      color: 'var(--ag-navy)'
    }
  }, "Ainda tem d\xFAvidas?"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '8px 0 0',
      fontSize: 15,
      color: 'var(--ag-cinza-medio)'
    }
  }, "Nossa equipe de especialistas est\xE1 pronta para te atender.")), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      n: "ArrowRight",
      size: 18,
      color: "#fff"
    }),
    onClick: () => setPage('contatos')
  }, "Falar com um consultor")))));
}
window.FaqPage = FaqPage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/FaqPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
/* AGarantia website — footer (petróleo) */
function Footer() {
  const cols = [{
    h: 'Links',
    items: ['Como Funciona', 'Clientes', 'Sobre', 'FAQ', 'Contatos']
  }, {
    h: 'Acesso',
    items: ['Área do Cliente', 'Área da Imobiliária', 'Área da Construtora/Holding', 'Área do Parceiro']
  }, {
    h: 'Legal',
    items: ['Política de Privacidade', 'Termos de Uso', 'Política de Cookies', 'LGPD']
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--ag-petroleo)',
      padding: '56px 56px 30px',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-full-white.png",
    alt: "agarantia",
    style: {
      height: 30,
      marginBottom: 18
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 13.5,
      lineHeight: 1.6,
      color: 'rgba(255,255,255,0.62)',
      maxWidth: 260
    }
  }, "Sua garantia locat\xEDcia baseada em ativo digital. Seguran\xE7a e praticidade para inquilinos e imobili\xE1rias."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginTop: 20
    }
  }, ['Twitter', 'Instagram', 'Linkedin'].map(s => /*#__PURE__*/React.createElement("span", {
    key: s,
    style: {
      width: 36,
      height: 36,
      borderRadius: '50%',
      background: 'rgba(255,255,255,0.08)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'rgba(255,255,255,0.8)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    n: s,
    size: 16
  }))))), cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 11,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,0.5)',
      marginBottom: 16
    }
  }, c.h), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, c.items.map(it => /*#__PURE__*/React.createElement("li", {
    key: it
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontSize: 13.5,
      color: 'rgba(255,255,255,0.72)',
      textDecoration: 'none'
    }
  }, it))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 44,
      paddingTop: 22,
      borderTop: '1px solid rgba(255,255,255,0.1)',
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 12,
      color: 'rgba(255,255,255,0.42)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 AGarantia. Todos os direitos reservados."), /*#__PURE__*/React.createElement("span", null, "CNPJ: 00.000.000/0001-00")));
}
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomePage.jsx
try { (() => {
/* AGarantia website — Home page */
function HomePage({
  setPage
}) {
  const {
    Button,
    Badge,
    FeatureCard,
    CheckList
  } = window.DS;
  const Section = ({
    children,
    style
  }) => /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '88px 56px',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto'
    }
  }, children));
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--gradient-hero-light)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement(Plus, {
    top: 56,
    left: "14%",
    size: 20
  }), /*#__PURE__*/React.createElement(Plus, {
    bottom: 90,
    left: "42%",
    size: 13
  }), /*#__PURE__*/React.createElement(Plus, {
    top: 120,
    right: "30%",
    size: 15
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 1200,
      margin: '0 auto',
      padding: '72px 56px 88px',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 48,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
    variant: "soft",
    style: {
      marginBottom: 22
    }
  }, "1\xBA Emissor de Garantia Locat\xEDcia Tokenizada"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 56,
      lineHeight: 1.04,
      letterSpacing: '-0.025em',
      color: 'var(--ag-navy)'
    }
  }, "Garantia Locat\xEDcia Tokenizada:", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ag-verde)'
    }
  }, "A Nova Era", /*#__PURE__*/React.createElement("br", null), "da Confian\xE7a.")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '24px 0 32px',
      fontSize: 18,
      lineHeight: 1.6,
      color: 'var(--ag-cinza-medio)',
      maxWidth: 440
    }
  }, "Seguran\xE7a fiduci\xE1ria real, sem a burocracia do fiador ou o custo do seguro-fian\xE7a tradicional."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      n: "ArrowRight",
      size: 18,
      color: "#fff"
    }),
    onClick: () => setPage('contatos')
  }, "Solicitar Garantia")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginTop: 36
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex'
    }
  }, ['Building2', 'Home', 'Landmark', 'KeyRound'].map((ic, i) => /*#__PURE__*/React.createElement("span", {
    key: ic,
    style: {
      width: 36,
      height: 36,
      borderRadius: '50%',
      background: 'var(--ag-verde-100)',
      color: '#4E7D14',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: i ? -10 : 0,
      border: '2px solid var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    n: ic,
    size: 16
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--ag-cinza-medio)',
      fontWeight: 500
    }
  }, "Confian\xE7a de +500 imobili\xE1rias em todo o Brasil"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--radius-2xl)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-lg)',
      aspectRatio: '4/3',
      background: 'linear-gradient(140deg, #1d4a3a 0%, #0D7682 60%, #2A3B45 100%)',
      position: 'relative',
      display: 'flex',
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      opacity: 0.16
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "Building2",
    size: 180,
    color: "#fff",
    strokeWidth: 1
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: -28,
      bottom: 36,
      background: '#fff',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-lg)',
      padding: '16px 20px',
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 'var(--radius-md)',
      background: 'var(--ag-verde-100)',
      color: '#4E7D14',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "ShieldCheck",
    size: 22
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--ag-cinza-medio)',
      fontWeight: 600
    }
  }, "Ativos segurados"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 22,
      color: 'var(--ag-navy)'
    }
  }, "R$ 2.4 Bi+"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: 'var(--ag-cinza-medio)'
    }
  }, "Garantias via blockchain em tempo real.")))))), /*#__PURE__*/React.createElement(Section, {
    style: {
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1.1fr',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Heading, {
    pre: "Chega de fiador e",
    keyword: "burocracia.",
    size: 36
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '20px 0 28px',
      fontSize: 16,
      lineHeight: 1.6,
      color: 'var(--ag-cinza-medio)',
      maxWidth: 420
    }
  }, "O mercado imobili\xE1rio brasileiro est\xE1 preso em processos do s\xE9culo passado. O fiador \xE9 uma figura em extin\xE7\xE3o, e o seguro-fian\xE7a \xE9 caro e o cau\xE7\xE3o imobiliza o seu capital."), /*#__PURE__*/React.createElement(CheckList, {
    items: ['Análise de crédito morosa (3–5 dias)', 'Exigência de 2 imóveis para o fiador', 'Dinheiro parado que não rende']
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(FeatureCard, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      n: "Clock"
    }),
    title: "Sem Espera",
    description: "Aprova\xE7\xE3o imediata via intelig\xEAncia de dados."
  }), /*#__PURE__*/React.createElement(FeatureCard, {
    tone: "brand",
    icon: /*#__PURE__*/React.createElement(Icon, {
      n: "Lock",
      color: "#fff"
    }),
    title: "100% On-Chain",
    description: "Contratos inteligentes imut\xE1veis."
  }), /*#__PURE__*/React.createElement(FeatureCard, {
    tone: "dark",
    icon: /*#__PURE__*/React.createElement(Icon, {
      n: "Zap",
      color: "#A8D46A"
    }),
    title: "Zero Burocracia",
    description: "Tudo digital, assinado em segundos."
  }), /*#__PURE__*/React.createElement(FeatureCard, {
    tone: "soft",
    icon: /*#__PURE__*/React.createElement(Icon, {
      n: "TrendingUp"
    }),
    title: "Renda Passiva",
    description: "Seu capital rende 100% do CDI todo m\xEAs."
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--gradient-dark)',
      padding: '88px 56px',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1000,
      margin: '0 auto',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    onDark: true
  }, "Fluxo de aprova\xE7\xE3o"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '16px 0 14px',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 40,
      letterSpacing: '-0.02em',
      color: '#fff'
    }
  }, "Simples. Digital. ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ag-verde-vibrante)'
    }
  }, "Seguro.")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 auto 56px',
      maxWidth: 520,
      fontSize: 16,
      lineHeight: 1.6,
      color: 'rgba(255,255,255,0.72)'
    }
  }, "A jornada do novo aluguel come\xE7a aqui, em tr\xEAs atos fundamentais."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 12,
      position: 'relative'
    }
  }, [{
    ic: 'UserPlus',
    t: 'Solicitação rápida',
    d: 'Insira os dados do imóvel e o locatário em menos de 2 minutos através de nossa plataforma intuitiva.'
  }, {
    ic: 'Cpu',
    t: 'Verificação AI',
    d: 'Nossa inteligência processa mais de 5.000 pontos de dados para validar o risco em tempo real.'
  }, {
    ic: 'ShieldCheck',
    t: 'Garantia Blockchain',
    d: 'A garantia é "mintada" como um token fiduciário, assegurando a liquidez imediata para a imobiliária.'
  }].map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s.t,
    style: {
      padding: '0 18px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 64,
      height: 64,
      margin: '0 auto 20px',
      borderRadius: '50%',
      background: 'rgba(255,255,255,0.06)',
      border: '1px solid rgba(255,255,255,0.12)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    n: s.ic,
    size: 26
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 18,
      color: '#fff',
      marginBottom: 8
    }
  }, s.t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 13.5,
      lineHeight: 1.6,
      color: 'rgba(255,255,255,0.68)'
    }
  }, s.d)))))), /*#__PURE__*/React.createElement(Section, {
    style: {
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement(Heading, {
    pre: "Nossos",
    keyword: "Benef\xEDcios",
    align: "center",
    size: 36
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '14px auto 0',
      maxWidth: 520,
      fontSize: 16,
      color: 'var(--ag-cinza-medio)'
    }
  }, "Descubra as vantagens do nosso servi\xE7o padr\xE3o para cada perfil de cliente da AGarantia.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 20
    }
  }, [{
    ic: 'Search',
    eye: 'Benefícios para',
    t: 'Locatários',
    sub: 'Alugue sem fiador',
    items: ['Sem fiador ou caução', 'Aprovação em menos de 60s', 'Retorno do ativo', 'Clube de benefícios Exclusivo', 'Pagamento via cartão ou boleto'],
    cta: 'Área do Locatário',
    variant: 'ghost'
  }, {
    ic: 'BookMarked',
    eye: 'Benefícios para',
    t: 'Proprietários',
    sub: 'Receba em dia',
    items: ['Garantia de repasse do aluguel', 'Inadimplência Zero', 'Segurança jurídica total', 'Despejo sem custos advocatícios', 'Cobrança extrajudicial'],
    cta: 'Falar com um Consultor',
    variant: 'primary'
  }, {
    ic: 'Building2',
    eye: 'Benefícios para',
    t: 'Imobiliárias & Holding',
    sub: 'Acelere fechamentos',
    items: ['Aprovação em menos de 60s', 'Comissão atraente a cada repasse', 'Painel Dashboard completo', 'Integração nativa via API', 'Suporte tecnológico'],
    cta: 'Área da Imobiliária',
    variant: 'ghost'
  }].map(c => /*#__PURE__*/React.createElement("div", {
    key: c.t,
    style: {
      background: '#fff',
      borderRadius: 'var(--radius-xl)',
      border: '1px solid var(--border-soft)',
      boxShadow: 'var(--shadow-card)',
      padding: 28,
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 48,
      height: 48,
      borderRadius: 'var(--radius-md)',
      background: 'var(--ag-verde-100)',
      color: '#4E7D14',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    n: c.ic,
    size: 22
  })), /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      fontSize: 10.5
    }
  }, c.eye), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 21,
      color: 'var(--ag-navy)',
      margin: '6px 0 2px'
    }
  }, c.t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      color: 'var(--ag-cinza-medio)',
      marginBottom: 20
    }
  }, c.sub), /*#__PURE__*/React.createElement(CheckList, {
    items: c.items,
    gap: 11,
    style: {
      flex: 1,
      marginBottom: 22
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: c.variant,
    fullWidth: true
  }, c.cta))))), /*#__PURE__*/React.createElement(Section, {
    style: {
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--gradient-dark)',
      borderRadius: 'var(--radius-2xl)',
      padding: '64px 48px',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 36,
      color: '#fff',
      letterSpacing: '-0.02em'
    }
  }, "Pronto para desburocratizar", /*#__PURE__*/React.createElement("br", null), "seu aluguel?"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '16px auto 30px',
      maxWidth: 480,
      fontSize: 16,
      color: 'rgba(255,255,255,0.74)'
    }
  }, "Junte-se a milhares de locat\xE1rios e imobili\xE1rias que j\xE1 migraram para a garantia tokenizada."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => setPage('contatos')
  }, "Solicitar minha Garantia"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost-light",
    size: "lg",
    onClick: () => setPage('contatos')
  }, "Falar com um Consultor")))));
}
window.HomePage = HomePage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomePage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Navbar.jsx
try { (() => {
/* AGarantia website — top navigation bar */
function Navbar({
  page,
  setPage
}) {
  const {
    Button
  } = window.DS;
  const links = [{
    id: 'home',
    label: 'Início'
  }, {
    id: 'como',
    label: 'Como funciona'
  }, {
    id: 'clientes',
    label: 'Clientes'
  }, {
    id: 'sobre',
    label: 'Sobre'
  }, {
    id: 'faq',
    label: 'FAQ'
  }, {
    id: 'contatos',
    label: 'Contatos'
  }];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '18px 56px',
      background: 'rgba(244,247,246,0.82)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--border-soft)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-full-color.png",
    alt: "agarantia",
    style: {
      height: 30,
      cursor: 'pointer'
    },
    onClick: () => setPage('home')
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 30
    }
  }, links.map(l => /*#__PURE__*/React.createElement("button", {
    key: l.id,
    onClick: () => setPage(l.id),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      fontSize: 14.5,
      fontWeight: 500,
      color: page === l.id ? 'var(--ag-verde)' : 'var(--ag-navy)',
      position: 'relative',
      padding: '4px 0'
    }
  }, l.label, page === l.id && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: -2,
      height: 2,
      background: 'var(--ag-verde)',
      borderRadius: 2
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      fontSize: 14.5,
      fontWeight: 500,
      color: 'var(--ag-navy)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4
    }
  }, "Entrar ", /*#__PURE__*/React.createElement(Icon, {
    n: "ChevronDown",
    size: 15
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    onClick: () => setPage('contatos')
  }, "Simule agora")));
}
window.Navbar = Navbar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Navbar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SobrePage.jsx
try { (() => {
/* AGarantia website — Sobre page */
function SobrePage({
  setPage
}) {
  const {
    Button,
    Badge,
    StatCard,
    Card
  } = window.DS;
  const Section = ({
    children,
    style
  }) => /*#__PURE__*/React.createElement("section", {
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '0 56px'
    }
  }, children));
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--surface-page)',
      padding: '64px 0 80px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--gradient-hero-light)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement(Plus, {
    top: 70,
    left: "10%",
    size: 18
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 1200,
      margin: '0 auto',
      padding: '0 56px',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 48,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
    variant: "soft",
    style: {
      marginBottom: 22
    }
  }, "O futuro do fiduci\xE1rio digital"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 46,
      lineHeight: 1.08,
      letterSpacing: '-0.025em',
      color: 'var(--ag-navy)'
    }
  }, "Arquitetando", /*#__PURE__*/React.createElement("br", null), "o Futuro da", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ag-verde)'
    }
  }, "Confian\xE7a Imobili\xE1ria.")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '22px 0 30px',
      fontSize: 17,
      lineHeight: 1.6,
      color: 'var(--ag-cinza-medio)',
      maxWidth: 420
    }
  }, "Fus\xE3o entre a seguran\xE7a institucional e a agilidade tecnol\xF3gica. Transformamos ativos f\xEDsicos em possibilidades digitais infinitas."), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      n: "ArrowRight",
      size: 18,
      color: "#fff"
    })
  }, "Saiba Mais")), /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--radius-2xl)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-lg)',
      aspectRatio: '5/4',
      background: 'linear-gradient(150deg, #e7efe6 0%, #cfe0cf 100%)',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "Home",
    size: 150,
    color: "#7AB829",
    strokeWidth: 1
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 18,
      bottom: 18,
      right: 18,
      background: 'rgba(0,40,48,0.55)',
      backdropFilter: 'blur(8px)',
      borderRadius: 'var(--radius-lg)',
      padding: '14px 18px',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,0.7)'
    }
  }, "Inova\xE7\xE3o digital"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 18
    }
  }, "Fiduci\xE1rio 4.0"))))), /*#__PURE__*/React.createElement(Section, {
    style: {
      background: '#fff',
      padding: '80px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1.1fr',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Heading, {
    pre: "Uma jornada de",
    keyword: "inova\xE7\xE3o fiduci\xE1ria.",
    size: 34
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22,
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, ['A AGarantia nasceu para modernizar o mercado de locação, substituindo garantias tradicionais por ativos digitais.', 'Operamos com um token digital próprio, lastreado em moeda fiduciária, representando o valor de garantia do contrato de locação.', 'Nossa proposta é oferecer uma alternativa rápida, segura e acessível à fiança tradicional, eliminando burocracias e custos elevados.'].map((p, i) => /*#__PURE__*/React.createElement("p", {
    key: i,
    style: {
      margin: 0,
      fontSize: 15.5,
      lineHeight: 1.65,
      color: 'var(--ag-cinza-medio)'
    }
  }, p)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(StatCard, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      n: "Flag",
      size: 18,
      color: "#0D7682"
    }),
    value: "2018",
    label: "Funda\xE7\xE3o",
    caption: "In\xEDcio das opera\xE7\xF5es focadas em garantias reais."
  }), /*#__PURE__*/React.createElement(StatCard, {
    tone: "brand",
    value: "2021",
    label: "Blockchain",
    caption: "Primeira emiss\xE3o de token de garantia digital do Brasil.",
    style: {
      marginTop: 28
    }
  }), /*#__PURE__*/React.createElement(StatCard, {
    tone: "dark",
    icon: /*#__PURE__*/React.createElement(Icon, {
      n: "Globe",
      size: 18,
      color: "#fff"
    }),
    value: "2023",
    label: "Escala",
    caption: "Expans\xE3o para mercados internacionais de Real Estate."
  }), /*#__PURE__*/React.createElement(StatCard, {
    tone: "soft",
    value: "+R$2 Bi",
    label: "Custodiados",
    caption: "Volume de ativos sob gest\xE3o fiduci\xE1ria digital.",
    style: {
      marginTop: 28
    }
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--gradient-dark)',
      padding: '80px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '0 56px'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: "dark-green",
    style: {
      marginBottom: 18
    }
  }, "Filosofia corporativa"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 0 36px',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 34,
      color: '#fff',
      letterSpacing: '-0.02em'
    }
  }, "Nossos Pilares"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(Card, {
    tone: "glass",
    padding: 28
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 'var(--radius-md)',
      background: 'rgba(255,255,255,0.08)',
      color: '#A8D46A',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "Rocket",
    size: 22
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 20,
      color: '#fff',
      marginBottom: 8
    }
  }, "Miss\xE3o"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14.5,
      lineHeight: 1.6,
      color: 'rgba(255,255,255,0.75)'
    }
  }, "Facilitar o acesso \xE0 moradia e loca\xE7\xE3o segura, atrav\xE9s da tecnologia e inclus\xE3o financeira.")), /*#__PURE__*/React.createElement(Card, {
    tone: "brand",
    padding: 28
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 'var(--radius-md)',
      background: 'rgba(255,255,255,0.18)',
      color: '#fff',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "Eye",
    size: 22,
    color: "#fff"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 20,
      color: '#fff',
      marginBottom: 8
    }
  }, "Vis\xE3o"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14.5,
      lineHeight: 1.6,
      color: 'rgba(255,255,255,0.9)'
    }
  }, "Ser a principal solu\xE7\xE3o de garantia locat\xEDcia digital do Brasil, integrando imobili\xE1rias, inquilinos e propriet\xE1rios."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5, 1fr)',
      gap: 12
    }
  }, [{
    ic: 'Lightbulb',
    t: 'Inovação',
    d: 'Soluções Web3 aplicadas ao mercado.'
  }, {
    ic: 'ShieldCheck',
    t: 'Confiança',
    d: 'Protocolos fiduciários íntegros.'
  }, {
    ic: 'Users',
    t: 'Transparência',
    d: 'Dados on-chain auditáveis.'
  }, {
    ic: 'Heart',
    t: 'Inclusão',
    d: 'Remoção de barreiras financeiras.'
  }, {
    ic: 'Zap',
    t: 'Simplicidade',
    d: 'Complexidade vira fluidez digital.'
  }].map(p => /*#__PURE__*/React.createElement("div", {
    key: p.t,
    style: {
      background: 'rgba(255,255,255,0.05)',
      border: '1px solid rgba(255,255,255,0.1)',
      borderRadius: 'var(--radius-lg)',
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 36,
      height: 36,
      borderRadius: 'var(--radius-sm)',
      background: 'rgba(122,184,41,0.16)',
      color: '#A8D46A',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    n: p.ic,
    size: 18
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 15,
      color: '#fff',
      marginBottom: 6
    }
  }, p.t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 12.5,
      lineHeight: 1.5,
      color: 'rgba(255,255,255,0.62)'
    }
  }, p.d)))))), /*#__PURE__*/React.createElement(Section, {
    style: {
      background: 'var(--surface-page)',
      padding: '70px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--gradient-verde)',
      borderRadius: 'var(--radius-2xl)',
      padding: '60px 48px',
      textAlign: 'center',
      boxShadow: 'var(--shadow-brand)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 34,
      color: '#fff'
    }
  }, "Pronto para o futuro?"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '14px auto 28px',
      maxWidth: 460,
      fontSize: 16,
      color: 'rgba(255,255,255,0.92)'
    }
  }, "Junte-se \xE0 elite da nova economia imobili\xE1ria. Tokenize, invista e proteja seu patrim\xF4nio."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "light",
    size: "lg",
    onClick: () => setPage('contatos')
  }, "Come\xE7ar agora"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost-light",
    size: "lg",
    onClick: () => setPage('contatos')
  }, "Falar com especialista")))));
}
window.SobrePage = SobrePage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SobrePage.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconChip = __ds_scope.IconChip;

__ds_ns.CheckList = __ds_scope.CheckList;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.SegmentedTabs = __ds_scope.SegmentedTabs;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.FeatureCard = __ds_scope.FeatureCard;

__ds_ns.StatCard = __ds_scope.StatCard;

})();
