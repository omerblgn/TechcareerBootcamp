namespace FirstWebApi.Models
{
    public class CategoryCreateInput
    {
        // [
        //     Required(ErrorMessage = "Kategori adı boş bırakılamaz"),
        //     MaxLength(10, ErrorMessage = "Kategori adı 10 karakterden fazla olamaz"),
        //     MinLength(3, ErrorMessage = "Kategori adı 3 karakterden az olamaz")
        // ]
        public string Name { get; set; } = null!;
        public string? Description { get; set; }
    }
}