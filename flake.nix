{
  description = "My project with postgres service";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-25.05";
    flake-parts.url = "github:hercules-ci/flake-parts";
    process-compose-flake.url = "github:Platonic-Systems/process-compose-flake";
    services-flake.url = "github:juspay/services-flake";
    systems.url = "github:nix-systems/default";
  };

  outputs = inputs:
    inputs.flake-parts.lib.mkFlake { inherit inputs; } {
      systems = import inputs.systems;
      imports = [ inputs.process-compose-flake.flakeModule ];

      perSystem = { config, pkgs, ... }: {
        process-compose.default = { config, ... }: {
          imports = [ inputs.services-flake.processComposeModules.default ];

          services.postgres."pg1" = {
            enable = true;
            initialScript.before = ''
              CREATE USER postuser WITH SUPERUSER PASSWORD 'postpass';
            '';
            initialDatabases = [
              {
                name = "db";
                schemas = [ ./scripts/uuidv7.sql ];
              }
            ];
          };
        };

        devShells.default = pkgs.mkShell {
          inputsFrom = [
            config.process-compose.default.services.outputs.devShell
          ];
          packages = with pkgs; [
            nodejs_24
          ];
        };
      };
    };
  }