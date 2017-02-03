document.write(Viz(`
  digraph {
    node [fontname = monospace];
    rankdir = BT;
      {
        node [style = dashed]
        DSIAuth; DSIAuthority;
      }

    subgraph cluster_dappsys {
      label     = <<b>Access control</b>    >;
      labelloc  = t;
      labeljust = l;
      fontname  = "monospace";
      fontsize  = 16;
      edge [arrowhead = onormal]
      # DSWhitelist -> DSAuth;
      # DSRoles -> DSAuth;
      DSAuthority -> DSAuth;
      DSWhitelist -> DSAuthority;
      DSRoles -> DSAuthority;
      {
        edge [style = dashed];
        DSAuthority -> DSIAuthority;
        DSAuth -> DSIAuth;
      }
      {
        edge [arrowhead = none, arrowtail = diamond, dir = both]
        DSAuth -> DSIAuthority;
        DSAuthority -> DSIAuth;
      }
    }
  }
`))

document.write(Viz(`
  digraph {
    node [fontname = monospace];
    rankdir = BT;
    edge [arrowhead = onormal]
WETH -> StandardToken;

    {
      node [style = dashed]
      ERC20;
    }
    subgraph cluster_dappsys {
      label     = <<b>Dappsys</b>    >;
      labelloc  = b;
      labeljust = r;
      fontname  = "monospace";
      fontsize  = 16;

    subgraph cluster_dappsyseueu {
      label     = <<b>Dependencies</b>>;
      labelloc  = b;
      labeljust = l;
      fontname  = "monospace";
      fontsize  = 16;
    StandardToken -> ERC20 [style = dashed];
      }

      DSActor -> DSBase;
      DSAuth -> DSNote;
      DSBase -> DSAssert;
      DSBase -> DSMath;
      DSGov -> DSActor;
      DSMultisig -> DSGov;
      DSNote -> DSBase;
      DSProxy -> DSActor;
      DSProxy -> DSAuth;
      DSRoles -> DSAuthority;
      DSStake -> DSGov;
      DSStore -> DSAuth;
      DSTest -> DSBase;
      DSToken -> DSAuth;
      DSToken -> StandardToken;
      DSVault -> DSAuth;
      DSWhitelist -> DSAuthority;
    DSAuthority -> DSAuth;

    {
      edge [arrowhead = none, arrowtail = diamond, dir = both]
      DSStake -> DSToken;
      DSVault -> ERC20;
    }
    }
  }
`))
