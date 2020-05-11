using Microsoft.EntityFrameworkCore.Migrations;

namespace Project_P34.API_Angular.Migrations
{
    public partial class newTables : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "CustomPizzaId",
                table: "tblIngredients",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "tblCustoms",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    Name = table.Column<string>(nullable: false),
                    Price = table.Column<decimal>(nullable: false),
                    Description = table.Column<string>(nullable: false),
                    Image = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_tblCustoms", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "tblWhislistPizzas",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Pizza_Id = table.Column<string>(nullable: false),
                    User_Id = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_tblWhislistPizzas", x => x.ID);
                });

            migrationBuilder.CreateIndex(
                name: "IX_tblIngredients_CustomPizzaId",
                table: "tblIngredients",
                column: "CustomPizzaId");

            migrationBuilder.AddForeignKey(
                name: "FK_tblIngredients_tblCustoms_CustomPizzaId",
                table: "tblIngredients",
                column: "CustomPizzaId",
                principalTable: "tblCustoms",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_tblIngredients_tblCustoms_CustomPizzaId",
                table: "tblIngredients");

            migrationBuilder.DropTable(
                name: "tblCustoms");

            migrationBuilder.DropTable(
                name: "tblWhislistPizzas");

            migrationBuilder.DropIndex(
                name: "IX_tblIngredients_CustomPizzaId",
                table: "tblIngredients");

            migrationBuilder.DropColumn(
                name: "CustomPizzaId",
                table: "tblIngredients");
        }
    }
}
